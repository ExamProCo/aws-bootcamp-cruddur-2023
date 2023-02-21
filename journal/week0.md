# Week 0 — Billing and Architecture

***

## Logical Architectual Diagram in Lucid Charts

![lucidchart](https://user-images.githubusercontent.com/8875454/220376480-4b3dc90a-49da-49b9-ab69-a4d0f77d0478.png)


[Architecture Lucid chart](https://lucid.app/lucidchart/ea974004-3bd1-4c86-b23d-fd75c9ff459c/edit?viewport_loc=-1272%2C-48%2C4050%2C1874%2C0_0&invitationId=inv_08b7e927-893d-4516-96ef-0632829c5448)


## Required Homework/tasks 

## Admin User creation in AWS

Logged into AWS console and opened IAM.


Created new user and provided custom password.

Also Created security credentials for CLI login as below.


## Cloudshell in AWS 

Opened Cloudshell from AWS Console and logged in and able to check through sts identity command. 

<img width="1704" alt="aws cloudshell" src="https://user-images.githubusercontent.com/8875454/220378740-2ffd8fb6-ae65-467c-86dc-3a68512e851e.png">


## GitPod setup 

Installed AWS CLI inside Gitpod and also configured Credentials as environment variables.

<img width="1719" alt="aws cli" src="https://user-images.githubusercontent.com/8875454/220388343-cf60084d-eaea-46db-8022-bd77b41885b7.png">


## Creating a budget


I have created a Budget in AWS Console for zero spend budget (1$) and EC2 usage for 20 hours

I have created a budget for spend of 20$ through AWS CLI.

<img width="1579" alt="budgets" src="https://user-images.githubusercontent.com/8875454/220386541-7031692f-126d-474e-b0ef-8a50c1e59ed3.png">



I have Created a Billing Alarm via AWS CLI

<img width="1579" alt="billing_alarm_sns" src="https://user-images.githubusercontent.com/8875454/220376848-f2dd994a-c415-437d-8329-075190035aa7.png">

Have setup a cloudwatch SNS topic from AWS CLI as below.

<img width="1668" alt="alarm " src="https://user-images.githubusercontent.com/8875454/220387796-2bc89832-43c7-409f-bf09-50a42202e47f.png">


I could see the Billing Alarm notification in Cloudwatch as below 

<img width="1724" alt="Screenshot 2023-02-21 at 8 58 22 PM" src="https://user-images.githubusercontent.com/8875454/220387492-4c271487-7ad4-4aa3-96dc-515687fc73ae.png">



# Additional Homework/tasks 

# Secured Root user 

Removed access keys and have setup MFA.

<img width="1473" alt="root_MFA" src="https://user-images.githubusercontent.com/8875454/220378610-c23cfad6-0153-4993-83a4-a33c3b2a9665.png">



