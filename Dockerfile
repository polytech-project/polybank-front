FROM node:16-alpine AS builder

WORKDIR /app

ARG VITE_API
ENV VITE_API $VITE_API

RUN echo "Variable VITE_API: $VITE_API"

COPY package.json .
COPY package-lock.json .

RUN npm install --immutable

COPY . .
RUN npx nx build client

FROM nginxinc/nginx-unprivileged:alpine3.18

RUN rm -rf /etc/nginx/html/*
COPY --from=builder --chown=nginx:nginx /app/dist/apps/* /etc/nginx/html
COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
