import dns from 'k6/x/dns';
import { sample } from './helper.js'

const fqdn = ["gitlab.globoi.com", "artifactory.globoi.com"]
const nameserver = "10.128.24.2"

export let options = {
  scenarios: {
    open_model: {
      executor: 'constant-arrival-rate',
      rate: 10,
      duration: '10s',
      preAllocatedVUs: 2,
    },
  },
}

export default function () {
  const options = {
    fqdn: sample(fqdn),
    rrtype: "A",
    nameserver: nameserver,
    port: "53"
  }

  console.log(`${dns.lookup(options)}`);
}
