FROM node:20.14-alpine

WORKDIR /app

COPY main.js .

RUN npm inita -y && npm install vm2

CMD ["node", "main.js"]
