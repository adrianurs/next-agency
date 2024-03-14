'use client';
import { useFormState } from 'react-dom';
import { PrimaryButton, InputBase, InputUpload, TextArea, LoaderWrapper } from '@/components';
import { validationSchema, initialValues, cookData, cookDataOnUpdate } from './form';
import { FormState } from '../types';
import { PostFormFC } from './types';
import { useFormik } from 'formik';
import styles from './styled.module.css';
import { PostType } from '@/lib';

export const PostForm: PostFormFC = ({ action, initial, type }) => {
  const [formState, actionFormState] = useFormState<FormState, FormData>(
    (_, formData) =>
      (type === 'update' ? cookDataOnUpdate : cookData)(_, formData, action, values as PostType),
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
        <p
          className={styles.image_title}
          onClick={
            values.image && typeof values.image === 'string'
              ? () => window.open(values.image as string, '_blank')
              : undefined
          }
        >
          {values.image && (typeof values.image === 'string' ? values.image : values.image.name)}
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
          {type === 'update' ? 'Update post' : 'Create post'}
        </PrimaryButton>
      </div>
    </form>
  );
};
