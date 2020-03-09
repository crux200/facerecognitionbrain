FROM node:12
WORKDIR /usr/src
RUN npm ci --only=production
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
