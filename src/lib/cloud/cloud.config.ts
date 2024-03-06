'use server';
import { Storage } from '@google-cloud/storage';
import { BASE64_MARKER, convertDataURIToBinary } from '../utils';
import { v4 as unique } from 'uuid';
import { _env } from '../env';

const storage = new Storage({
  projectId: _env.gcs_project_id,
  credentials: {
    client_email: _env.gcs_client_mail,
    private_key: _env.gcs_private_key.split(String.raw`\n`).join('\n')
  }
});

const bucket = storage.bucket(_env.gcs_bucket);

function createWriteStream(filename: string, contentType?: string) {
  const ref = bucket.file(filename);

  const stream = ref.createWriteStream({
    contentType: contentType,
    metadata: {
      contentType
    }
  });

  return stream;
}

export async function uploadToCloud(dataURL: string): Promise<string> {
  // TODO: encapsulate the below in another function
  const binary = convertDataURIToBinary(dataURL);
  const fileName = unique();
  const mimeType = dataURL.split(BASE64_MARKER)[0].replace('data:', '');
  const stream = createWriteStream(fileName, mimeType);

  return await new Promise((res, rej) => {
    stream.on('error', rej);
    stream.on('finish', () => {
      res(`https://storage.googleapis.com/${bucket.name}/${fileName}`);
    });

    stream.end(binary);
  });
}
