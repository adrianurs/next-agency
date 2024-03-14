'use client';
import { useFormState } from 'react-dom';
import { PrimaryButton, InputBase, InputUpload, TextArea } from '@/components';
import { validationSchema, initialValues, cookData } from './form';
import { FormState } from '../types';
import { PostFormFC } from './types';
import { useFormik } from 'formik';
import styles from './styled.module.css';

export const PostForm: PostFormFC = ({ action, initial, type }) => {
  const [formState, actionFormState] = useFormState<FormState, FormData>(
    (_, formData) => cookData(_, formData, action),
    {}
  );
  const { dirty, errors, isValid, touched, values, handleChange, handleBlur, setFieldValue } =
    useFormik({
      validationSchema,
      initialValues: type === 'update' && initial ? initial : initialValues,
      onSubmit: () => {}
    });

  return (
    <form className={styles.form_wrapper} action={actionFormState}>
      <div className={styles.image_row}>
        <p className={styles.image_title}>
          {values.image &&
            (typeof values.image === 'string' ? 'base64 image loaded.' : values.image.name)}
        </p>
        <InputUpload
          accept='image/*'
          name='image'
          label='Upload image'
          onChange={(file: File) => setFieldValue('image', file)}
        />
      </div>
      <InputBase
        name='title'
        placeholder='Title'
        className={styles.form_input}
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.title && errors.title}
      />
      <TextArea
        name='description'
        placeholder='Description'
        className={styles.form_input}
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.description && errors.description}
        cols={30}
        rows={10}
      />
      <div className={`${styles.action_container}`}>
        {formState?.error && <p className={styles.submission_error}>{formState?.error}</p>}
        <PrimaryButton disabled={!dirty || !isValid} className={`${styles.form_submit}`}>
          Create Post
        </PrimaryButton>
      </div>
    </form>
  );
};
