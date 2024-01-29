# Criando workon

## build

```bash
docker build -t rfahham/workon:1.0 .

docker build -t rfahham/workon:1.0 .
[+] Building 14.5s (10/10) FINISHED                                                          docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                         0.0s
 => => transferring dockerfile: 443B                                                                         0.0s
 => [internal] load .dockerignore                                                                            0.0s
 => => transferring context: 2B                                                                              0.0s
 => [internal] load metadata for docker.io/library/debian:latest                                             2.6s
 => [auth] library/debian:pull token for registry-1.docker.io                                                0.0s
 => [1/4] FROM docker.io/library/debian:latest@sha256:b16cef8cbcb20935c0f052e37fc3d38dc92bfec0bcfb894c32854  4.1s
 => => resolve docker.io/library/debian:latest@sha256:b16cef8cbcb20935c0f052e37fc3d38dc92bfec0bcfb894c32854  0.0s
 => => sha256:b16cef8cbcb20935c0f052e37fc3d38dc92bfec0bcfb894c328547f81e932d67 1.85kB / 1.85kB               0.0s
 => => sha256:6fc9b50711023adfca7c7b4236948e120d1332ff01bf46c93e5b64ca0830a81a 529B / 529B                   0.0s
 => => sha256:60e0ade36b1ab9227b0b8fc5a9731a3a5b9217e9feeb4ba7a2f8cb84addef87b 1.48kB / 1.48kB               0.0s
 => => sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c 49.59MB / 49.59MB             1.7s
 => => extracting sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c                    2.3s
 => [internal] load build context                                                                            0.0s
 => => transferring context: 743B                                                                            0.0s
 => [2/4] RUN apt-get update && apt-get upgrade -y                                                           3.1s
 => [3/4] RUN apt-get install nginx -y                                                                       4.5s
 => [4/4] COPY index.html /var/www/html/index.nginx-debian.html                                              0.0s
 => exporting to image                                                                                       0.1s
 => => exporting layers                                                                                      0.1s
 => => writing image sha256:d0306f7985da493feb0c14df1d6a0e766966155e8ab80610f4451329463e3443                 0.0s
 => => naming to docker.io/rfahham/workon:1.0                                                                0.0s
```

## Verificando o build

```bash
docker images

REPOSITORY        TAG   IMAGE ID       CREATED          SIZE
rfahham/workon    1.0   d0306f7985da   52 seconds ago   177MB
```

## Executando a imagem

```bash
docker container run --name workon -p 80:80 rfahham/workon:1.0
```

## Tagueando a imagem

```bash
docker tag <imagem_id> <sua_conta>/<nome_image>:tag
docker tag d0306f7985da rfahham/workon:1.0
```

## Construindo a imagem (dockerhub)

```bash
docker push <nome_da_sua_conta>/sua_imagem:tag
docker push rfahham/workon:1.0
```

## Listar os Container

```bash
docker ps -a
```

## Remover Containers

```bash
docker container rm <CONTAINER ID>
```

## Remover Imagem

```bash
docker rmi <IMAGE ID>
```
