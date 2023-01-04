FROM node:14
# RUN apt update 
#RUN apt-get update 
WORKDIR /usr/src
COPY ./package*.json ./
RUN npm install
RUN npm prune
COPY . .
#RUN npx sequelize db:seed:all
EXPOSE 3001
CMD ["npm", "start"]