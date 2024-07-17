FROM locustio/locust
RUN pip3 install locust
COPY locustfile.py /home/locust/locustfile.py
#CMD locust -f /home/locust/locustfile.py --master -H http://127.0.0.1:8089
ENTRYPOINT locust