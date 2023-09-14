FROM node:18

LABEL maintainer "japier.07@gmail.com"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY server.js server.js

EXPOSE 3000

CMD ["npm", "start"]
