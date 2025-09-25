FROM nginx:alpine

# Remove default site
RUN rm -rf /usr/share/nginx/html/*

# Copy website files
COPY . /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy certificates into container
COPY certs /etc/nginx/certs

EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]  