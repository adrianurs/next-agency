import { PostType, auth, blobToBase64 } from '@/lib';
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

    console.log(Object.fromEntries(formData));
    if (image) {
      base64 = await blobToBase64(image);
    }
    formData.set('image', base64 ?? '');

    return await action(_, formData);
  } catch (e) {
    console.error(e);
    return { error: 'Failed parsing image' };
  }
}

export async function cookDataOnUpdate(
  _: FormState,
  formData: FormData,
  action: (_: FormState, formData: FormData) => Promise<FormState>,
  values: PostType
) {
  try {
    const image = Object.fromEntries(formData).image as File;
    let base64: string | undefined;

    if (image) {
      base64 = await blobToBase64(image);
    }

    formData.set('image', base64 ?? values.image ?? '');
    formData.set('title', values.title);
    formData.set('description', values.description);
    formData.set('author', values.author);

    return await action(_, formData);
  } catch (e) {
    console.error(e);
    return { error: 'Failed parsing image' };
  }
}
