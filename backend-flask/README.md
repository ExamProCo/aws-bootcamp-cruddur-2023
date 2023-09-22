# Install python version
```
pyenv install 3.10.9
```

# Set your python version
```
pyenv global 3.10.9
```

# Create virual environment
```
python -m venv venv
```

# Activate environment
```
source venv/bin/activate
```

# Install Flask
```
pip install flask
```

aws ecs execute-command \
--region $AWS_DEFAULT_REGION \
--cluster cruddur \
--task arn:aws:ecs:eu-west-1:404100009949:task/cruddur/0e7f10cc569941199c8513261581cab0 \
--container backend-flask \
--interactive \
--command "/bin/bash" 
 

aws ecs update-service \
    --cluster cruddur \
    --task-definition backend-flask \
    --service  backend-flask \
    --enable-execute-command \


aws ecs create-service --cli-input-json file://aws/json/service-backend-flask.json

aws ecs create-service --cli-input-json file://aws/json/service-frontend-react-js.json