# Use the official Nginx base image
FROM nginx

# Copy your web content to the default Nginx public directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Define the command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]