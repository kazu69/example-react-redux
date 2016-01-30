FROM ubuntu:12.04

RUN apt-get update -y && \
    apt-get install -y sudo curl && \
    apt-get install -y apache2 build-essential

ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2

RUN curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash - && \
    apt-get install -y nodejs

RUN mkdir -p /var/app
WORKDIR /var/app

ADD package.json ./package.json
ADD .htmlminifier ./.htmlminifier
ADD src ./src

RUN npm install && \
    npm run build

RUN mv public/* /var/www/

EXPOSE 80

CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]
