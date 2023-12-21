FROM node:18-alpine

WORKDIR /react-vite-app

EXPOSE 3030

COPY package*.json yarn.lock ./

RUN npm install -g yarn

RUN yarn install

COPY . ./

CMD ["yarn", "dev"]
