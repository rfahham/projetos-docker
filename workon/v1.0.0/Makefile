versao=2.0.0

build:
	docker build -t rfahham/workon:${versao} .

list-images:
	docker images

execute-local:
	docker container run --name workon -p 80:80 rfahham/workon:1.0

push:
	docker push rfahham/workon:${versao}
