# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Create the .env file inside the container
RUN echo "MONGO_URI=mongodb://mongodb:27017/" > .env

EXPOSE 5000

CMD ["npm", "start"]
