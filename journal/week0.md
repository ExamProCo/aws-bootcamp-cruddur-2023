 # Week 0 — Billing and Architecture
    
 ## REQUIRED HOMEWORK

◆ Set a Billing alarm in AWS Billing & Cost Management console:
Select: Budgets/create Budget/Monthly cost budget/
Budget name
Provide a descriptive name for this budget:
"AWS_Bootcamp_Budget"
 Enter your budgeted amount ($):
"5.00"
Email recipients:
"email.com"
Select: Create Budget

◆ Set an AWS Budget:
Select "AWS_Bootcamp_Budget"
Edit Alerts
Use default 85% of budgeted amount
Save

◆ Generated AWS Credential. Created a User Group "Admin User Group" and a User attached to that User Group. 

◆ Destroyed root account credentials, Set MFA for IAM role and Root User. 

◆ Used EventBridge to hookup Health Dashboard to SNS and send notification when there is a service health issue.

◆ AWS Installation

[AWS CLI Microsoft-supported versions of 64-bit Windows](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
was installed on the command prompt: 

```
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```
confirmed the installation with the command:
```
aws --version
```
and I got the result:

"aws-cli/2.10.0 Python/3.9.11 Windows/10 exe/AMD64 prompt/off"

I was able to log in the AWS CLI with the command:

```
aws configure
```

entered my AWS Access Key ID, AWS Access Key, Default region name, and Default output format.

◆ used Cloudshell

![Cloudshell](assets/Screenshot%20(185).png)

◆ Reviewed all the questions of each pillar in the Well Architected Tool.

◆ Created an architectural diagram in LUCID Charts architectural diagram:

https://lucid.app/lucidchart/4698c1f4-05d6-409e-8b75-674aa7893ede/edit?viewport_loc=-102%2C77%2C2522%2C1302%2C0_0&invitationId=inv_d6fc401f-cc02-4f23-8e54-233310f9f66c

◆ Completed the Security Quiz.

◆ Completed the Pricing Quiz.

## HOMEWORK CHALLENGES

◆ sketch an architectural diagram on a NAPKIN. 
![Architectural sketch on a napkin](aassets/napkin.jpg)

◆ Researched the technical and service limits of AWS Lambda function and how they could impact the technical path for technical flexibility. 
Opened a support ticket and requested a service limit.
Wrote an article about "AWS LAMBDA: (1) what is it? (2) what are its service limits? (3) how do you request a service limit increase?"

https://www.awsinformation.com/2023/02/15/aws-lambda-1-what-is-it-2-what-is-its-service-limits-3-how-do-you-request-a-service-limit-increase/

