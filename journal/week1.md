# Week 1 — App Containerization

I managed to Run the dockerfile CMD as an external script using an Ec2-instance.
![Screenshot 2025-01-02 213832](https://github.com/user-attachments/assets/28f571a4-0d07-4965-8e22-3e371a3c42bf)


I managed to buld a Dockerfile with multistage build for my backend-flask

# Stage 1: Build stage
FROM python:3.10-slim as builder

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential gcc

# Create and set work directory
WORKDIR /app

# Copy requirements file
COPY requirements.txt /app/

# Install dependencies
RUN pip install --upgrade pip \
    && pip wheel --no-cache-dir --no-deps --wheel-dir /app/wheels -r requirements.txt

# Stage 2: Runtime stage
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev && apt-get clean && rm -rf /var/lib/apt/lists/*

# Create and set work directory
WORKDIR /app

# Copy dependencies from build stage
COPY --from=builder /app/wheels /wheels
RUN pip install --no-cache /wheels/*

# Copy application source code
COPY . /app

# Expose port
EXPOSE 4567

# Command to run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port", "4567"]

I also managed to Implement a healthcheck in the Docker-compose with health checks.

version: '3.8'

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "4567:4567"
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:4567 || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    depends_on:
      - db

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:3000 || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    depends_on:
      - backend

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: appdb
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d appdb || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s

I managed to Launch an EC2 instance that has docker installed, and pull a container to demonstrate I can run my own docker processes.

![Screenshot 2025-01-05 120203](https://github.com/user-attachments/assets/43489e78-66bf-4dc2-bad4-e89a4b8e60ef)

Implement a healthcheck in the V3 Docker compose file

![Screenshot 2025-01-05 150056](https://github.com/user-attachments/assets/091cb7ce-6748-45c6-a629-afee623a361e)
