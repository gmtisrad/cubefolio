
FROM node:15

WORKDIR /usr/app

COPY . .

RUN yarn

RUN yarn global add pm2

EXPOSE 3001

RUN yarn build

CMD ["pm2-runtime", "build/server.js"]