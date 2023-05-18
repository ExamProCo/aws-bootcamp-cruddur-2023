#! /usr/bin/bash

ABS_PATH=$(readlink -f "$0")
BACKEND_PATH=$(dirname $ABS_PATH)
BIN_PATH=$(dirname $BACKEND_PATH)
PROJECT_PATH=$(dirname $BIN_PATH)
BACKEND_FLASK_PATH="$PROJECT_PATH/backend-flask"

docker build \
-f "$BACKEND_FLASK_PATH/Dockerfile.prod" \
-t backend-flask-prod \
"$BACKEND_FLASK_PATH/."