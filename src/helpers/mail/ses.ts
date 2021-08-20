import SES from "aws-sdk/clients/ses";

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

export const send = async (
  to: string,
  subject: string,
  text: string,
  html: string = null,
  from: string = "Claret Nnamocha <devclareo@gmail.com>"
) => {
  try {
    const ses = new SES({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      apiVersion: "2010-12-01",
      region: "ap-south-1",
    });

    const params = {
      Destination: {
        ToAddresses: [to],
      },
      Source: from,
      Message: {
        Body: {
          Text: {
            Data: text,
            Charset: "utf-8",
          },
          Html: {
            Data: html,
            Charset: "utf-8",
          },
        },
        Subject: {
          Data: subject,
        },
      },
    };

    const send = new Promise((resolve, reject) => {
      ses.sendEmail(params, function (err, data) {
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      });
    });

    await send;

    return true;
  } catch (e) {
    return false;
  }
};
