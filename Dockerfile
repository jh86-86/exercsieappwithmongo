From node:14.16.0

WORKDIR /app

COPY . /app
RUN npm install


CMD npm start

EXPOSE 3000 