FROM node:18-alpine

WORKDIR /react-vite-app

EXPOSE 3030

COPY package*.json yarn.lock ./

COPY . ./

CMD ["npm", "run", "dev"]
