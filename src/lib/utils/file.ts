export const BASE64_MARKER = ';base64,';

export function convertDataURIToBinary(dataURI: string): Uint8Array {
  const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  const base64 = dataURI.substring(base64Index);
  const raw = atob(base64);
  const rawLength = raw.length;
  const array = new Uint8Array(new ArrayBuffer(rawLength));

  for (let i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }

  return array;
}

export async function blobToBase64(blob: Blob): Promise<string> {
  return await new Promise((res, rej) => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      res(reader.result as string);
    };
    reader.onerror = () => {
      rej('Failed reading file!');
    };
  });
}
