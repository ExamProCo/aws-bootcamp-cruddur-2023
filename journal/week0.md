# Week 0 — Billing and Architecture

Set a Billing alarm in AWS Billing & Cost Management console:
Select: Budgets/create Budget/Monthly cost budget/
Budget name
Provide a descriptive name for this budget:
"AWS_Bootcamp_Budget"
 Enter your budgeted amount ($):
"5.00"
Email recipients:
"email.com"
Select: Create Budget

Set an AWS Budget:
Select "AWS_Bootcamp_Budget"
Edit Alerts
Use default 85% of budgeted amount
Save

Generated AWS Credential.

Destroyed your root account credentials, Set MFA, IAM role.

Used EventBridge to hookup Health Dashboard to SNS and send notification when there is a service health issue.

Reviewed all the questions of each pillar in the Well Architected Tool.

Created an architectural diagram in LUCID Charts
rchitectural diagram Link:
https://lucid.app/lucidchart/4698c1f4-05d6-409e-8b75-674aa7893ede/edit?viewport_loc=-102%2C77%2C2522%2C1302%2C0_0&invitationId=inv_d6fc401f-cc02-4f23-8e54-233310f9f66c

Architectural diagram on a NAPKIN
Link: https://github.com/FranklinMoux/aws-bootcamp-cruddur-2023/blob/main/napkin.jpg

Researched the technical and service limits of specific services and how they could impact the technical path for technical flexibility. 

Opened a support ticket and request a service limit
