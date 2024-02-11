package ldap

import (
	"fmt"
	"log"

	"github.com/go-ldap/ldap/v3"
	"go.k6.io/k6/js/modules"
)

func init() {
	modules.Register("k6/x/ldap", new(LDAP))
}

type LDAP struct {
	Result string
}

type options struct {
	Username string `js:"username"`
	Password string `js:"password"`
	FQDN     string `js:"fqdn"`
	BaseDN   string `js:"baseDN"`
	Filter   string `js:"filter"`
}

func (ldap *LDAP) Authenticate(options options) bool {
	l, err := connect(options)
	if err != nil {
		log.Fatal(err)
	}
	defer l.Close()

	err = l.Bind(options.Username, options.Password)
	if err != nil {
		ldap.Result = "Failed"
		log.Fatal(err)
		return false
	}

	ldap.Result = "Success"
	return true
}

// Ldap Connection without TLS
func connect(options options) (*ldap.Conn, error) {
	l, err := ldap.DialURL(fmt.Sprintf("ldap://%s:389", options.FQDN))
	if err != nil {
		return nil, err
	}

	return l, nil
}

// Normal Bind and Search
func (ldapStruct *LDAP) BindAndSearch(options options) bool {
	l, err := connect(options)
	if err != nil {
		log.Fatal(err)
	}
	defer l.Close()

	l.Bind(options.Username, options.Password)

	searchReq := ldap.NewSearchRequest(
		options.BaseDN,
		ldap.ScopeBaseObject, // you can also use l.ScopeWholeSubtree
		ldap.NeverDerefAliases,
		0,
		0,
		false,
		options.Filter,
		[]string{},
		nil,
	)

	result, err := l.Search(searchReq)
	if err != nil {
		ldapStruct.Result = fmt.Sprintf("Failed: Search Error: %s", err)
		return false
	}

	if len(result.Entries) > 0 {
		ldapStruct.Result = "Success"
		return true
	}

	ldapStruct.Result = "Couldn't fetch search entries"
	return false
}
