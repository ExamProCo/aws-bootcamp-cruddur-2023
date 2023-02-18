# Week 0 — Billing and Architecture

## Required home work
Install Aws CLI
##
I installed aws cli on my computer and saved my credentials in the credential file in my local computer ,in the Gitpod, but
I need to be more comfortable saving credentials in the Gitpod account.
I have mac so I folllowed mac installation instruction in local machine.
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg ./AWSCLIV2.pkg -target /
which aws
aws --version
Also i tried gitpod installation following linux instructions
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
./aws/install -i /usr/local/aws-cli -b /usr/local/bin
aws --version
image
![installing aws cli in in gitpod](Assets/Screenshot%202023-02-19%20at%201.20.55%20am.png)
i tried in cloud shell in us east 1 region.
image
![prrof od working aws cli](Assets/Screenshot 2023-02-19 at 12.16.25 am.png)
###Homework challenge
Created billing alarm using aws management console
image
Created aws budget too
image
