FROM node:22-alpine


# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instala dependências sem salvar em cache desnecessário
RUN npm install --legacy-peer-deps

# Copia o restante do código para o contêiner
COPY . .

# Exponha a porta padrão do Next.js
EXPOSE 3000

# Comando padrão para rodar o Next.js no modo de desenvolvimento
CMD ["npm", "run", "dev"]
