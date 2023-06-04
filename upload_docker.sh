#!/usr/bin/env bash
# This file tags and uploads an image to Docker Hub

# Assumes that an image is built if not run the via Build image command and add a descriptive tag
# an image can be build via 'run_docker.sh'

# Step 1:
# Create dockerpath
# dockerpath=<your docker ID/path>
dockerpath=papamfall/aws-bootcamp-cruddur-2023-backend-flask

# Step 2:  
# Authenticate & tag
echo "Docker ID and Image: $dockerpath"
docker login
docker tag aws-bootcamp-cruddur-2023-backend-flask $dockerpath:latest

# Step 3:
# Push image to a docker repository
#docker push $dockerpath
docker image push --all-tags $dockerpath