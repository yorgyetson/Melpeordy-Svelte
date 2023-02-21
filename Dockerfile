FROM node:19-alpine AS build

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:1.21-alpine AS deploy-static

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]