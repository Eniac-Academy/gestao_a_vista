# Estágio 1: Construção (Build) da aplicação
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências para o container
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia todo o resto do código da aplicação
COPY . .

# Executa o build da aplicação (o Vite vai gerar a pasta 'dist')
RUN npm run build

# Estágio 2: Servir os arquivos estáticos com Nginx
FROM nginx:alpine

# Remove os arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos "buildados" do Estágio 1 para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Como é uma SPA (Single Page Application) com React Router, 
# precisamos garantir que o Nginx redirecione as rotas para o index.html.
# Vamos criar uma configuração simples do Nginx dinamicamente:
RUN echo "server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files \$uri \$uri/ /index.html; \
    } \
}" > /etc/nginx/conf.d/default.conf

# Expõe a porta 80 do container
EXPOSE 80

# Inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]