
FROM node:15

WORKDIR /usr/app

COPY package.json .

RUN npm i --quiet

COPY . .

EXPOSE 3001

RUN npm run serve