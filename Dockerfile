# Usando a versão LTS do Node (22)
FROM node:22-slim

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]