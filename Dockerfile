FROM node:latest

RUN apt-get install -y && apt-get upgrade -y

WORKDIR /app

ADD . /app

CMD node server.js

EXPOSE 9000
