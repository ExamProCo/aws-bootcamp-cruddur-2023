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
