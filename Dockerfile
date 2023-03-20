FROM node:16-buster

ENV PORT 3001

WORKDIR /onview

COPY ./package.json ./package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${PORT}

CMD ["node","server/index.js"]