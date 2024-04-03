# Criando workon

## Acessar a pasta da versão

Nesta pasta contém o arquivo Dockerfile e a versão do index.html

## build

```bash
docker build -t rfahham/workon:1.0 .
```

## Verificando o build

```bash
docker images

REPOSITORY        TAG     IMAGE ID       CREATED          SIZE
rfahham/workon    1.0.0   d0306f7985da   52 seconds ago   177MB
```

## Executando a imagem

```bash
docker container run --name workon -p 80:80 rfahham/workon:<indicar a versão>
```

## Tagueando a imagem

```bash
docker tag <imagem_id> <sua_conta>/<nome_image>:tag
docker tag 3b781fe0e1f4 rfahham/workon:<indicar a versão>
```

## Construindo a imagem (dockerhub)

```bash
docker push <nome_da_sua_conta>/sua_imagem:tag
docker push rfahham/workon:<indicar a versão>
```

## Listar os Containers

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
