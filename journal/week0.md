# Week 0 — Billing and Architecture

1.Destroy your root account credentials, Set MFA, IAM role

I did this by loging in to my root user and then I deleted all my security acess keys.
I changed my root password to a temporary password just in case I need it later on.
I created an IAM role, loggged on into the AWS Management Console with administrative IAM credentials. I later accessed the IAM dashboard and select "Roles" from the navigation pane. I clicked on "Create role" and choose the trusted entity type, which could be another AWS account for cross-account access or the same account for internal roles. I Attach appropriate permissions policies that define the role's actions in my case I created "Administrative access".I assigned a name by EMK.


Architectural diagram for my CI/CD logical pipeline in Lucid Charts
https://lucid.app/lucidchart/c5c25334-e98f-4b71-a620-f0d830f870dd/edit?viewport_loc=-414%2C-730%2C5120%2C2368%2C0_0&invitationId=inv_731072f9-38f6-490b-9115-3e42673d9fcc

![Screenshot 2024-12-31 223546](https://github.com/user-attachments/assets/c5058b7c-91bf-48de-9c21-54bc7025fdf0)


EventBridge to hookup Health Dashboard to SNS

![Screenshot 2024 - SNS](https://github.com/user-attachments/assets/74972956-3961-4463-858e-3e33421fe654)
