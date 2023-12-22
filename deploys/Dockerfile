FROM node:18-alpine

WORKDIR /react-vite-app

EXPOSE 3001

COPY package*.json ./

RUN NODE_ENV=development npm i --legacy-peer-deps

COPY . .

CMD ["npm", "run", "dev"]
