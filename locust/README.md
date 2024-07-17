# Criando uma imagem docker com Locust

```bash
cd locust

docker build -t locust .
```
## Criando o Master

```bash
master docker run -it -dp 8089:8089 teste-locust -f /home/locust/locustfile.py --master -H http://127.0.0.1:8089
```

## Criando o Worker

```bash
worker docker run -it locust -f /mnt/locust/locustfile.py --worker --master-host http://127.0.0.1:8089
```
