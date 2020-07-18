FROM node:current as builder
MAINTAINER David Leonard <david@davidops.com>


WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

ARG owmapp
ENV OWMAPP=$owmapp
COPY postcss.config.js .
COPY tailwind.config.js .
COPY build.js .
COPY time.js .
COPY css css/
COPY index.tpl.html .
COPY config.yaml .

RUN npm run build

FROM pierrezemb/gostatic:latest
COPY --from=builder /app/dist /srv/http