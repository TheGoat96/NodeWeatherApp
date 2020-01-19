FROM node:12-slim

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
ENTRYPOINT ["node", "index.js"]
CMD []