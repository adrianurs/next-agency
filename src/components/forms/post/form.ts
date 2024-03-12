import { auth, blobToBase64 } from '@/lib';
import * as Yup from 'yup';
import { CreatePost } from './types';
import { FormState } from '../types';

export const validationSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required()
});

export const initialValues: CreatePost = {
  title: '',
  description: ''
};

export async function cookData(
  _: FormState,
  formData: FormData,
  action: (_: FormState, formData: FormData) => Promise<FormState>
): Promise<FormState> {
  try {
    const image = Object.fromEntries(formData).image as File;
    let base64: string | undefined;

    if (image) {
      base64 = await blobToBase64(image);
    }
    formData.set('image', base64 ?? '');

    return await action(_, formData);
  } catch (e) {
    console.error(e);
    return { error: 'Failed parsing avatar' };
  }
}
