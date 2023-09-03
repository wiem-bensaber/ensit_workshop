FROM node:alpine

# Create app directory
WORKDIR /user/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

