# Week 0 — Billing and Architecture

#### Conceptual Diagram
![image](https://user-images.githubusercontent.com/64602124/218861357-a9f0ad16-be41-4393-9a3a-7eb92018395c.png)

#### Logical Architecture
Here's a link to [view in Lucid Chart](https://lucid.app/lucidchart/e89a0ab2-aae7-4930-88b9-f6cb119be1dc/edit?invitationId=inv_caf204c3-4e28-4b8a-b39d-eb5ae1fdfaff)

![image](https://user-images.githubusercontent.com/64602124/219190588-c900ae9d-cd6d-4763-8dfb-7b6f9e2e0d7a.png)




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
  
#### Create Budget via AWS CLI
The [CLI Documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/budgets/create-budget.html) details how to use _Budgets_. We'll be creating the budget using the example in the documentation. 
You can persist the Account ID variable using: `gp env AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)`. After creating the respective `json` files for the budget and notification, you can run this command in terminal:
```
  aws budgets create-budget \
    --account-id $AWS_ACCOUNT_ID \
    --budget file://aws/json/budget.json \
    --notifications-with-subscribers file://aws/json/budget-notifications-with-subscribers.json
```
![image](https://user-images.githubusercontent.com/64602124/218876427-458454e5-5c08-4b10-94bd-00fecedbc626.png)


#### Create SNS Topic using the AWS CLI
To create topic, use `aws sns create-topic --name evebootcamp-billing-alarm` Then you need to subscribe to the topic so you can be notified. To subscribe, use:
```
aws sns subscribe \
    --topic-arn="arn:aws:sns:us-east-1:<your_acct_id>:<your_topic_name>" \
    --protocol=email \
    --notification-endpoint=everlygrandest+bootcamp@gmail.com
```
![image](https://user-images.githubusercontent.com/64602124/218877385-7977a8a3-7531-469d-b8a5-79f993a329e0.png)


#### Creating a Billing Alarm via AWS CLI
Using this [json file](https://github.com/omenking/aws-bootcamp-cruddur-2023/blob/week-0/aws/json/alarm_config.json.example), we will be updating the `arn` on line 6 to our previously created Topic `arn`. Then running the `aws cloudwatch put-metric-alarm --cli-input-json file://aws/json/alarm_config.json` command to set up the alarm

![image](https://user-images.githubusercontent.com/64602124/218876557-50f896d0-6903-4c5d-9f8a-1e6b3c4f5873.png)


