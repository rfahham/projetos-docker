install:
	go install go.k6.io/xk6/cmd/xk6@latest

build:
	xk6 build --with xk6-ldap=.

run-authenticate:
	./k6 run examples/authenticate.js

run-search:
	./k6 run examples/search.js
