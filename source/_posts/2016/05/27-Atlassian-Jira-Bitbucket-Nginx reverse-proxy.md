----
title: Atlassian Jira Bitbucket Nginx reverse proxy
date: 2016-05-27 00:51:47
tags:
- Bitbucket 
- Jira
- Nginx
----
## Bitbucket tomcat Connector config

add secure scheme proxyName and proxyPort

```sh
 vim /var/atlassian/application-data/bitbucket/shared/server.xml
```

```xml
<Connector port="7990" 
           protocol="HTTP/1.1"
           connectionTimeout="20000"
           useBodyEncodingForURI="true"
           redirectPort="8443"
           compression="on"
           compressableMimeType="text/html,text/xml,text/plain,text/css,application/json,application/javascript,application/x-javascript"
           secure="true"
           scheme="https"
           proxyName="domain.com"
           proxyPort="443"/>
```

## Nginx site config

```sh
vim /etc/nginx/sites-enabled/default

server {
        listen 80;
        listen [::]:80;
        server_name domain.com;
        return 301 https://domain.com$request_uri;
}
server {
        listen 443 ssl;
        server_name domain.com;
        ssl_certificate /etc/nginx/ssl/domain.com.crt;
        ssl_certificate_key /etc/nginx/ssl/domain.com.key;
        location / {
                proxy_pass http://192.168.1.000:7990/;
                proxy_set_header        Host $host;
                proxy_set_header        X-Forwarded-Host $host;
                proxy_set_header        X-Forwarded-Server $host;
                proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header        X-Real-IP $remote_addr;
                proxy_redirect          off;
        }
}
```

