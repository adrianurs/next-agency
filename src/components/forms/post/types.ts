import { PostType } from '@/lib';
import { FormFC, FormProps } from '../types';
import { FC } from 'react';

export interface CreatePost extends Omit<PostType, '_id' | 'createdAt' | 'image' | 'author'> {
  image?: File;
  type?: PostFormType;
}

export interface PostFormProps extends FormProps {
  initial?: PostType;
  type?: PostFormType;
}

export type PostFormFC = FC<PostFormProps>;

export type PostFormType = 'create' | 'update';
