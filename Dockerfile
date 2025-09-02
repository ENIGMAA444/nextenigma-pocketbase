# Use the latest Alpine image for small size
FROM alpine:latest

# Set working directory
WORKDIR /app

# Copy all project files into container
COPY . .

# Make pocketbase binary executable
RUN chmod +x ./pocketbase

# Expose default PocketBase port
EXPOSE 10000

# Run PocketBase server
CMD ["./pocketbase", "serve", "--http=0.0.0.0:10000"]
