FROM nginx:1.19.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY ./docs /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]