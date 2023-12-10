# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json /app

# Install dependencies
RUN npm install

# Copy the current directory contents to /app
COPY . /app

# Expose the port the app runs on
EXPOSE 3000:3000

# Command to run your application
CMD ["npm", "start"]
