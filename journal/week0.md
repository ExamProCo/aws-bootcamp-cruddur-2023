# Week 0 — Billing and Architecture

#### Installing AWS CLI via my GitPod account:
From within my GitPod terminal, I did the following:
1. `curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"` --> this will download the binary files & save it as awscliv2.zip
2. `unzip awscliv2.zip` -> just unpacks our archived file
3. `sudo ./aws/install`


#### Configure User Credentials via the CLI
[Amazon Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html) provides the scaffolding for setting up your Environment variables if you don't want to configure it on the CLI using `aws configure`. Change your values and export at the terminal as seen in this image:

Verify using `aws sts get-caller-identity`; you should get your user credentials if everything is working as expected.

#### GitPod Configuration.
To persist our env variables so that everytime we start GitPod, we do not have to re-configure user credentials, we are using the script from [Andrew Brown's repo](https://github.com/omenking/aws-bootcamp-cruddur-2023/blob/week-0/journal/week0.md) which basically installs aws-cli and sets the cli auto-complete prompt to partial:
```
tasks:
  - name: aws-cli
    env:
      AWS_CLI_AUTO_PROMPT: on-partial
    init: |
      cd /workspace
      curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
      unzip awscliv2.zip
      sudo ./aws/install
      cd $THEIA_WORKSPACE_ROOT
  ```
  *__Persisting earlier exported values to GitPod's workspace, use:__* `gp env <AWS_ENV_VARIABLE>=<AWS_VALUE>`
