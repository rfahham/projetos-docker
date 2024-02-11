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

// https://authapi.globoi.com/api/2.0/users/teste-autenticacao-ldap@g.globo?groups=1

export default function () {
    const ldapOptions = {
      username: "teste-autenticacao-ldap@g.globo",
      password: "QqP7cK@MKgwp",
      fqdn: sample(servers),
      baseDN: "CN=teste-autenticacao-ldap,OU=USRSVC,OU=SI,OU=IT,DC=corp,DC=tvglobo,DC=com,DC=br",
      filter: "(samaccountname=teste-auth-ldap)",
    }

    console.log(`${ldap.bindAndSearch(ldapOptions)}, ${ldap.result}`);
}
