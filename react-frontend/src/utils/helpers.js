import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const KEY = import.meta.env.VITE_AWS_S3_KEY;
const SECRET = import.meta.env.VITE_AWS_S3_SECRET;
const S3_BUCKET = 'moto-pics';
const s3 = new S3Client({
    credentials: {
        accessKeyId: KEY,
        secretAccessKey: SECRET
    },
    region: 'us-west-1'
});

/**
 * 
 * @param {*} pictureName this is the key (name) of the object needed to find it in the s3 bucket
 * @returns s3 url for temporary link to the object, link expires in an hour
 */
export const getPictureFromS3 = async (pictureName) => {
    const params = {
        Bucket: S3_BUCKET,
        Key: pictureName
    };
    const command = new GetObjectCommand(params);
    const S3_Url_link = await getSignedUrl(s3, command, { expiresIn: 3600 });
    return S3_Url_link;
};

/**
 * 
 * @param {*} pictureBinaryString this is a binary string image object
 * @param {*} pictureName this is the moto.name will be used as the s3 object key
 * @returns a promise
 */
export const sendBinaryStringObjectToS3 = async (pictureBinaryString, pictureName) => {
    const params = {
        Body: pictureBinaryString,
        Bucket: S3_BUCKET,
        Key: pictureName,
        ACL: 'public-read'
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    return;
};
