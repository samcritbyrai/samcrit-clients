FROM node:18-slim
WORKDIR /app
COPY . /app
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]
