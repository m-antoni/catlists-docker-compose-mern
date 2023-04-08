FROM node:alpine3.17

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json .

COPY tsconfig.json .
# copy source code to /app/src folder
COPY src /app/src

# check files list
RUN ls -a

# install and build
RUN npm install
RUN npm run build

EXPOSE 5000

CMD [ "node", "./build/index.js" ]


