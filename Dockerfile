
FROM node:15

WORKDIR /usr/app

COPY yarn.lock .

RUN yarn

RUN yarn global add pm2

COPY . .

EXPOSE 3001

RUN yarn serve