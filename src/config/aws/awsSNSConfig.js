// import AWS from 'aws-sdk';
// const { Config } = AWS
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns'

export class SNSConfig {
  // constructor() {
  //   const config = new Config()
  //   config.accessKeyId = process.env.AWS_REGION;
  //   config.secretAccessKey = process.env.AWS_USER_SECRET_ACCESS_KEY;
  //   config.region = process.env.AWS_REGION;
  // }

  configCredentials() {
    const config = new Config()
    config.accessKeyId = process.env.AWS_USER_ACCESS_KEY;
    config.secretAccessKey = process.env.AWS_USER_SECRET_ACCESS_KEY;
    config.region = process.env.AWS_REGION;

    return config
  }

  async publishToSNS(message) {
    const client = new SNSClient({
      credentials: {
        accessKeyId: process.env.AWS_USER_ACCESS_KEY,
        secretAccessKey: process.env.AWS_USER_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    }});
    return await client.send(
      new PublishCommand({
        Message: message,
        TopicArn: process.env.AWS_TOPIC_SNS_ARN,
    })) 
  }
}