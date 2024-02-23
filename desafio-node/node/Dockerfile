FROM node:20.11.1-alpine

WORKDIR /usr/src/app

# Copia os arquivos do projeto para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta na qual a aplicação será executada
EXPOSE  8080

CMD [ "node", "index.js"]