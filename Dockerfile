FROM node:lts-alpine
WORKDIR /build
# 设置Node-Sass的镜像地址
RUN npm config set sass_binary_site https://repo.huaweicloud.com/node-sass 
# 设置npm镜像
RUN npm config set registry https://repo.huaweicloud.com/repository/npm/
COPY package.json /build/package.json
RUN npm install --legacy-peer-deps -d
COPY ./ /build
RUN npm run build
# FROM nginx
# RUN mkdir /app

COPY --from=build-stage /build/dist /var/project/erp/web
# COPY --from=0 /build/nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80