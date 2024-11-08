FROM node:18-slim
WORKDIR /app
COPY . /app
RUN npm install
RUN npm install -g nodemon
EXPOSE 3000
CMD nodemon app.js
