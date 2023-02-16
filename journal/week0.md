# Week 0 — Billing and Architecture
(1)  Set a Billing alarm in AWS Billing & Cost Management console:
Select: Budgets/create Budget/Monthly cost budget/

Budget name
Provide a descriptive name for this budget:
"AWS_Bootcamp_Budget"
 Enter your budgeted amount ($):
"5.00"
Email recipients:
"email.com"
Select: Create Budget

(2) Set an AWS Budget:
Select "AWS_Bootcamp_Budget"
Edit Alerts
Use default 85% of budgeted amount
Save

(3) Generating AWS Credential

Destroy your root account credentials, Set MFA, IAM role

Use EventBridge to hookup Health Dashboard to SNS and send notification when there is a service health issue.

Review all the questions of each pillars in the Well Architected Tool (No specialized lens)

Create an architectural diagram (to the best of your ability) the CI/CD logical pipeline in Lucid Charts

Research the technical and service limits of specific services and how they could impact the technical path for technical flexibility. 
Open a support ticket and request a service limit

Architectural diagram Link: https://lucid.app/lucidchart/4698c1f4-05d6-409e-8b75-674aa7893ede/edit?viewport_loc=-651%2C-78%2C2314%2C1100%2C0_0&invitationId=inv_d6fc401f-cc02-4f23-8e54-233310f9f66c
