import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as process from 'process';


//import will not work for dotenv you have to use require.
const dotenv = require('dotenv');
dotenv.config();

export class ThumbingServerlessCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const uploadsBucketName: string = process.env.UPLOADS_BUCKET_NAME as string;
    const assetsBucketName: string = process.env.ASSETS_BUCKET_NAME as string;
    const folderInput: string = process.env.THUMBING_S3_FOLDER_INPUT as string;
    const folderOutput: string = process.env.THUMBING_S3_FOLDER_OUTPUT as string;
    const webhookUrl: string = process.env.THUMBING_WEBHOOK_URL as string;
    const topicName: string = process.env.THUMBING_TOPIC_NAME as string;
    const functionPath: string = process.env.THUMBING_FUNCTION_PATH as string;
    console.log('uploadBucketName',uploadsBucketName)
    console.log('assetsBucketName',assetsBucketName)
    console.log('folderInput',folderInput)
    console.log('folderOutput',folderOutput)
    console.log('webhookUrl',webhookUrl)
    console.log('topicName',topicName)
    console.log('functionPath',functionPath)

    const uploadsBucket = this.createBucket(uploadsBucketName)
    const assetsBucket = this.importBucket(assetsBucketName)

    const lambda = this.createLambda(folderInput,folderOutput,functionPath,uploadsBucketName,assetsBucketName)

    this.createS3NotifyToLambda(folderInput,lambda,uploadsBucket)


    const snsTopic = this.createSnsTopic(topicName)
    this.createSnsSubscription(snsTopic,webhookUrl)
    this.createS3NotifyToSns(folderOutput,snsTopic,assetsBucket)


    const s3UploadsReadWritePolicy = this.createPolicyBucketAccess(uploadsBucket.bucketArn)
    const s3AssetsBucketReadWritePolicy = this.createPolicyBucketAccess(assetsBucket.bucketArn)
    const snsPublishPolicy = this.createPolicySnSPublish(snsTopic.topicArn)

    // This could be redundent since we have s3ReadWritePolicy?
    uploadsBucket.grantRead(lambda);
    uploadsBucket.grantPut(lambda);


    assetsBucket.grantRead(lambda);
    assetsBucket.grantPut(lambda);


    lambda.addToRolePolicy(s3UploadsReadWritePolicy);
    lambda.addToRolePolicy(s3AssetsBucketReadWritePolicy);
    lambda.addToRolePolicy(snsPublishPolicy);

  }

  createBucket(bucketName: string): s3.IBucket {
    const logicalName: string = 'UploadsBucket';
    const bucket = new s3.Bucket(this, logicalName , {
      bucketName: bucketName,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    return bucket;
  }

  importBucket(bucketName: string): s3.IBucket{
    const bucket = s3.Bucket.fromBucketName(this, "AssetsBucket", bucketName);
    return bucket;
  }

  createLambda(folderIntput: string, folderOutput: string, functionPath: string, uploadsBucketName: string, assetsBucketName: string): lambda.IFunction {
    const logicalName = 'ThumbLambda';
    const code = lambda.Code.fromAsset(functionPath)
    const lambdaFunction = new lambda.Function(this, logicalName, {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: code,
      environment: {
        DEST_BUCKET_NAME: assetsBucketName,
        FOLDER_INPUT: folderIntput,
        FOLDER_OUTPUT: folderOutput,
        PROCESS_WIDTH: '512',
        PROCESS_HEIGHT: '512'
      }
    });
    return lambdaFunction;
  }

  createS3NotifyToLambda(prefix: string, lambda: lambda.IFunction, bucket: s3.IBucket): void {
    const destination = new s3n.LambdaDestination(lambda);
      bucket.addEventNotification(
        s3.EventType.OBJECT_CREATED_PUT,
        destination//,
      //{prefix: prefix} // folder containing the original images
    )
  }

  createSnsTopic(topicName: string): sns.ITopic{
    const logicalName = "ThumbingTopic";
    const snsTopic = new sns.Topic(this, logicalName, {
      topicName: topicName
    });
    return snsTopic;
  }
  
  createSnsSubscription(snsTopic: sns.ITopic, webhookUrl: string): sns.Subscription {
    const snsSubscription = snsTopic.addSubscription(
      new subscriptions.UrlSubscription(webhookUrl)
    )
    return snsSubscription;
  }

  createS3NotifyToSns(prefix: string, snsTopic: sns.ITopic, bucket: s3.IBucket): void {
    const destination = new s3n.SnsDestination(snsTopic)
    bucket.addEventNotification(
      s3.EventType.OBJECT_CREATED_PUT, 
      destination,
      {prefix: prefix}
    );
  }

  createPolicyBucketAccess(bucketArn: string){
    const s3ReadWritePolicy = new iam.PolicyStatement({
      actions: [
        's3:GetObject',
        's3:PutObject',
      ],
      resources: [
        `${bucketArn}/*`,
      ]
    });
    return s3ReadWritePolicy;
  }

  createPolicySnSPublish(topicArn: string){
    const snsPublishPolicy = new iam.PolicyStatement({
      actions: [
        'sns:Publish',
      ],
      resources: [
        topicArn
      ]
    });
    return snsPublishPolicy;
  }

}