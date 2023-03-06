FROM python:3.10-slim-buster
## Step 1:
# inside container
# Create a working directory
WORKDIR /backend-flask

## Step 2:
# Outside -> inside container 
# Copy source code to working directory
COPY requirements.txt requirements.txt
## Step 3:
# inside the container
# Install packages from requirements.txt
RUN pip3 install -r requirements.txt

# Outside -> inside container 
# first (.) mean /backend-flask Outside container
# second (.) mean /backend-flask Inside container
#
COPY . .

# set env variable inside container
ENV FLASK_ENV=development
## Step 4:
# Expose port 80
EXPOSE ${PORT}

## Step 5:
# Run app at container launch
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"]