#! /usr/bin/bash

ABS_PATH=$(readlink -f "$0")
FRONTEND_PATH=$(dirname $ABS_PATH)
BIN_PATH=$(dirname $FRONTEND_PATH)
PROJECT_PATH=$(dirname $BIN_PATH)
TASK_DEF_PATH="$PROJECT_PATH/aws/task-definitions/backend-flask.json"

echo $TASK_DEF_PATH

aws ecs register-task-definition \
--cli-input-json "file://$TASK_DEF_PATH"