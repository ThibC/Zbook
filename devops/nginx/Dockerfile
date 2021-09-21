FROM nginx

RUN apt-get update && apt-get install -y nginx-extras

RUN mkdir /etc/nginx/ssl
RUN rm -rf /etc/nginx/sites-available
RUN rm -rf /etc/nginx/sites-enabled

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 9090