FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy entire directory
COPY . .

# Build main website
RUN npm run build

EXPOSE 8080

# Run server
CMD [ "node", "server.js" ]