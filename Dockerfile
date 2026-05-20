FROM node:24.14.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Compilamos el código de TypeScript a JavaScript
RUN npm run build
EXPOSE 3000
# Ejecutamos el script de arranque optimizado
CMD ["npm", "start"]