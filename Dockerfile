FROM node:12
run NPM run build
COPY build build
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s","build"]
