FROM node:16-buster

ENV PORT 3001

COPY . /onview

WORKDIR /onview

RUN npm install

EXPOSE ${PORT}

CMD ["npm","start"]