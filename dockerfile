# Stage 1: Build the Vite + React app
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app using Vite
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's default folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (default HTTP port)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
