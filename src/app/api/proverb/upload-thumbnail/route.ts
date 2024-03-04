import { NextResponse } from "next/server";
import S3 from "aws-sdk/clients/s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";

export async function POST(request: Request) {
  console.log(11111111, request.body);
  const { contentType, slug, uuid, fileExt } = await request.json();
  console.log({ contentType, slug, uuid, fileExt });
  const client = new S3Client({
    region: "ap-northeast-2",
    credentials: {
      accessKeyId: process.env.AWS_S3_ACCESS_KEY as string,
      secretAccessKey: process.env.AWS_S3_SECRET_KEY as string,
    },
  });
  const { url, fields } = await createPresignedPost(client, {
    Bucket: "storage.fmawo.com",
    Key: "proverb/thumbnail/" + slug + "/" + uuid + "." + fileExt,
    Conditions: [
      ["content-length-range", 0, 10485760],
      ["starts-with", "$Content-Type", contentType],
    ],
    Fields: {
      acl: "public-read",
      "Content-Type": contentType,
    },
    Expires: 600,
  });

  return Response.json({ url, fields });
}
