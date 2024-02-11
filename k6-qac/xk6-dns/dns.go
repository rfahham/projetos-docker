package dns

import (
	"fmt"
	"net"

	"github.com/miekg/dns"
	"go.k6.io/k6/js/modules"
)

func init() {
	modules.Register("k6/x/dns", new(DNS))
}

type DNS struct {
	Result string
}

type options struct {
	FQDN       string `js:"fqdn"`
	RRType     string `js:"rrtype"`
	NameServer string `js:"nameserver"`
	Port       string `js:"port"`
}

func (d *DNS) Lookup(options options) bool {
	c := new(dns.Client)

	m := new(dns.Msg)
	m.SetQuestion(dns.Fqdn(options.FQDN), dns.StringToType[options.RRType])
	m.RecursionDesired = true

	r, _, err := c.Exchange(m, net.JoinHostPort(options.NameServer, options.Port))
	if r == nil {
		d.Result = fmt.Sprintf("*** error: %s\n", err.Error())
		return false
	}

	if r.Rcode != dns.RcodeSuccess {
		d.Result = fmt.Sprintf("*** invalid answer name %s after %s query for %s\n", options.FQDN, options.RRType, options.FQDN)
		return false
	}

	answers := ""
	for _, a := range r.Answer {
		answers = fmt.Sprintf("%s,%s", answers, a.String())
	}
	d.Result = answers

	return true
}
