install:
	go install go.k6.io/xk6/cmd/xk6@latest

build:
	xk6 build --with xk6-dns=.

run-lookup:
	./k6 run examples/lookup.js
