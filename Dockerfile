FROM node:14
# RUN apt update 
#RUN apt-get update 
WORKDIR /usr/src
COPY ./package*.json ./
RUN npm install
RUN npm prune
COPY . .
EXPOSE 3001
CMD ["npm", "start"]