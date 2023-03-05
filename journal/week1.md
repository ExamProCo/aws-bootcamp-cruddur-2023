# Week 1 — App Containerization

# Week 1 — App Containerization

The applications that will be containerised has two components:
1. backend using python and flask > under backend-flask directory
2. frontend using react js > under frontend-react-js

In this example, we will use Gitpod environment which has docker installed by default.

### Build Backend Container

```sh
cd backend-flask
pip3 install -r requirements.txt
export FRONTEND_URL="*"
export BACKEND_URL="*"
python3 -m flask run --host=0.0.0.0 --port=4567
```
make port 4567 public (click padlock) 
access the backend url: https://4567-<url>.<url>.gitpod.io/api/activities/home

Create Dockerfile in the backend-flask directory to build backend-flask container

```sh
touch Dockerfile
```

```dockerfile
FROM python:3.10-slim-buster

WORKDIR /backend-flask

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

ENV FLASK_ENV=development

EXPOSE ${PORT}
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=4567"]
```

Build backend-flask container image

```sh
cd ..
docker build -t backend-flask:1.0 -t backend-flask:latest ./backend-flask
```

Run backend-flask container image

```sh
docker run --rm -p 4567:4567 -it -e FRONTEND_URL='*' -e BACKEND_URL='*' backend-flask
```

To attach to the running backend-flask container use command: ```docker exec -it <container-id> bash```


### Build Frontend Container

Run NPM Install before building the container since it needs to copy the contents of node_modules

```
cd frontend-react-js
npm install
```

Create Dockerfile in the frontend-react-js directory to build frontend-react-js container

```sh
touch Dockerfile
```

```dockerfile
FROM node:16.18

ENV PORT=3000

COPY . /frontend-react-js
WORKDIR /frontend-react-js
RUN npm install
EXPOSE ${PORT}
CMD ["npm", "start"]
```

Build frontend-react-js container image

```sh
cd ..
docker build -t frontend-react-js:1.0 -t frontend-react-js:latest ./frontend-react-js
```

Run frontend-react-js container image

```sh
docker run --rm -p 3000:3000 frontend-react-js
```

### Build Multiple Container using Docker Compose

Create a docker-compose.yml file at the root directory

```sh
touch docker-compose.yml
```

```yaml
version: "3.8"
services:
  backend-flask:
    environment:
      FRONTEND_URL: "https://3000-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
      BACKEND_URL: "https://4567-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
    build: ./backend-flask
    ports:
      - "4567:4567"
    volumes:
      - ./backend-flask:/backend-flask
  frontend-react-js:
    environment:
      REACT_APP_BACKEND_URL: "https://4567-${GITPOD_WORKSPACE_ID}.${GITPOD_WORKSPACE_CLUSTER_HOST}"
    build: ./frontend-react-js
    ports:
      - "3000:3000"
    volumes:
      - ./frontend-react-js:/frontend-react-js

# the name flag is a hack to change the default prepend folder
# name when outputting the image names
networks: 
  internal-network:
    driver: bridge
    name: cruddur
```

Run docker compose up

```sh
docker compose -f "docker-compose.yml" up -d --build
```

Validate containers are running and application is accessible. To shutdown, use the ```docker compose down``` command.