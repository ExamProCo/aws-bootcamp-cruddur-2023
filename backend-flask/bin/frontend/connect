#! /usr/bin/bash
if [ -z "$1" ]; then
  echo "No TASK_ID argument supplied eg ./bin/ecs/connect-to-frontend-react-js 99b2f8953616495e99545e5a6066fbb5d"
  exit 1
fi
TASK_ID=$1

CONTAINER_NAME=frontend-react-js

echo "TASK ID : $TASK_ID"
echo "Container Name: $CONTAINER_NAME"

aws ecs execute-command  \
--region $AWS_DEFAULT_REGION \
--cluster cruddur \
--task $TASK_ID \
--container $CONTAINER_NAME \
--command "/bin/sh" \
--interactive