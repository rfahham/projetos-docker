#!/usr/bin/make

NAME = "k6-qac"
VERSION=v1.4.2

########################################################
# teste discord integration
# teste discord integration

all: build

info:
	@echo "${NAME} version: ${VERSION}"

build:
	DOCKER_BUILDKIT=1
	docker build -t docker.artifactory.globoi.com/sre/${NAME}/${NAME}:${VERSION} .

build-push: build
	DOCKER_BUILDKIT=1
	docker build -t docker.artifactory.globoi.com/sre/${NAME}/${NAME}:${VERSION} .
	docker image push docker.artifactory.globoi.com/sre/${NAME}/${NAME}:${VERSION}

push:
	docker image push docker.artifactory.globoi.com/sre/${NAME}/${NAME}:${VERSION}
