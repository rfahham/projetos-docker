import http from 'k6/http';
import {check, group, sleep, fail } from 'k6';
import { Counter, Trend } from 'k6/metrics';
import { parseHTML } from 'k6/html';
import exec from 'k6/execution';

var testId = `${__ENV.HOSTNAME}`.split("-")[0];

var qacRampUp = {
    VU_START: 1,
    VU_MAX: 10,
    VU_STEP: 1,
    STEP_TIME: 5,
    STEP_HOLD_TIME: 10,
    RAMPDOWN_TIME: 60    
};

/* Check which environment variables were passed */
Object.keys(qacRampUp).forEach(key => {
    if(__ENV[key]) {
        qacRampUp[key] = parseInt(__ENV[key],0);
    }
});

/* create stages based on environment variables */
var stages = [];
var aux = {};
for(var i = qacRampUp['RAMPUP_START']; i <= qacRampUp['RAMPUP_END']; i = i + qacRampUp['RAMPUP_ADD']){
    aux = { duration: qacRampUp['RAMPUP_TIME']+'s', target: i};
    stages.push(aux);
    aux = { duration: qacRampUp['RAMPUP_HOLD']+'s', target: i};
    stages.push(aux); 
}
aux = { duration: qacRampUp['RAMPDOWN_TIME']+'s', target: 0};
stages.push(aux); 

export const options = {
    scenarios: {
      'neoson': {
        executor: 'ramping-vus',
        exec: 'default',
        stages: stages,
      }
  }
};

export default function() {

   const res = http.get('http://neoson.sre1.hdg.gcp.i.globo:80/', {
       tags: {
           testid: testId,
       },
   });
   check(res, { 'status was 200': (res) => res.status == 200 });
}
