FROM --platform=$BUILDPLATFORM node:20-alpine as build-deps
WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:stable-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /app/dist /usr/share/nginx/html
