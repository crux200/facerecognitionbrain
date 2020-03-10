FROM node:12
WORKDIR /usr/src
copy . .
EXPOSE 3000
CMD [ "npm", "start" ]
