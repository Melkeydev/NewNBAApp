# Pulling from DockerHub, specific Node Version
FROM node:12.16.1 

# Changing working directory, renaming it and creating directory app
WORKDIR /app 

# Copying all package.json
COPY package*.json ./ 

RUN npm install 

COPY . .

CMD npm run server 
