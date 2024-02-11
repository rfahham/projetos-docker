#!/usr/bin/make

NAME = workon
VERSION=v2.0.1

########################################################
# 					DOCKERHUB 						   #
########################################################

build-dockerhub:
	docker build -t rfahham/workon:${VERSION} .

list-images:
	docker images

execute-local:
	docker container run --name workon -p 80:80 rfahham/workon:1.0

push-dockerhub:
	docker push rfahham/workon:${VERSION}


########################################################
# 					ARTIFACTORY 					   #
########################################################

all: build

info:
	@echo "${NAME} version: ${VERSION}"

build:
	DOCKER_BUILDKIT=1
	docker build -t docker.artifactory.globoi.com/qa2/${NAME}:${VERSION} .

push:
	docker image push docker.artifactory.globoi.com/qa2/${NAME}:${VERSION}
	
build-push: build
	DOCKER_BUILDKIT=1
	docker build -t docker.artifactory.globoi.com/qa2/${NAME}:${VERSION} .
	docker image push docker.artifactory.globoi.com/qa2/${NAME}:${VERSION}


