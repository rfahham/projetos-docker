import ldap from 'k6/x/ldap';
import { sample } from './helper.js'

const servers = [
  "JBPAADSSR011.corp.tvglobo.com.br",
  "SPPAADSSR011.corp.tvglobo.com.br",
  "EGPAADSSR011.corp.tvglobo.com.br",
  "IOPAADSSR002.corp.tvglobo.com.br"
]

export let options = {
  scenarios: {
    open_model: {
      executor: 'constant-arrival-rate',
      rate: 1,
      duration: '10s',
      preAllocatedVUs: 2,
    },
  },
}

export default function () {
    const ldapOptions = {
      username: "teste-autenticacao-ldap@g.globo",
      password: "QqP7cK@MKgwp",
      fqdn: sample(servers)
    }

    console.log(`${console.log(ldap.authenticate(ldapOptions))}, ${ldap.result}, ${ldapOptions.fqdn}`);
}
