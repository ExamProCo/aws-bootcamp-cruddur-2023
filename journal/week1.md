# Week 1 — App Containerization

# Week 1 — App Containerization

The applications that will be containerised has two components:
1. backend using python and flask > under backend-flask directory
2. frontend using react js > under frontend-react-js

In this example, we will use Gitpod environment which has docker installed by default.

```sh
cd backend-flask
pip3 install -r requirements.txt
export FRONTEND_URL="*"
export BACKEND_URL="*"
python3 -m flask run --host=0.0.0.0 --port=4567
```
make port 4567 public (click padlock) 
https://4567-<url>.<url>.gitpod.io/api/activities/home

touch Dockerfile

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

### Build Container

```sh
cd ..
docker build -t  backend-flask ./backend-flask
```
