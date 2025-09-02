FROM alpine:3.18

WORKDIR /app

# Copy PocketBase binary & data
COPY . .

# Make PocketBase executable
RUN chmod +x ./pocketbase

# Expose Render's expected port
EXPOSE 10000

# Start PocketBase on 0.0.0.0:10000
CMD ["./pocketbase", "serve", "--http=0.0.0.0:10000"]
