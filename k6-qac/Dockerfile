# Multi-stage build to generate custom k6 with extension
FROM grafana/xk6:0.10.0 as builder
WORKDIR /xk6
COPY . .
RUN xk6 build v0.49.0 \
  --with xk6-mongo=/xk6/xk6-mongo/ \
  --with xk6-ldap=/xk6/xk6-ldap/ \
  --with xk6-dns=/xk6/xk6-dns/ \
  --with xk6-sql=/xk6/xk6-sql/ \
  --with xk6-output-clickhouse=/xk6/xk6-output-clickhouse/ \
  --with k6-utils=/xk6/k6-utils/ \
  --with xk6-m3u8=/xk6/xk6-m3u8/

FROM kubeshop/testkube-k6-executor:1.15.10 as runner

FROM alpine:3.18

RUN apk add --no-cache tcpdump
RUN apk add --no-cache net-tools
RUN apk add --no-cache bash

WORKDIR /home/k6
RUN mkdir -p /home/k6
COPY --from=builder /xk6/k6 /usr/bin/k6
COPY --from=runner /bin/runner /bin/runner

ENTRYPOINT ["/bin/runner"]
