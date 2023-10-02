FROM node:18.17.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080,8000

CMD ["npm" , "start"]
