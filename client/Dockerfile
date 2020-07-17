# No bash, can still use once confident
# FROM node:alpine

FROM node

WORKDIR /app

#destination after COPY command is the WORKDIR

COPY ./package*.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]
