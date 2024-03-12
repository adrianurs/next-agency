import { _env } from '../env';
import { RequestOptions } from './types';

const baseURL = _env.next_public_api_url;

const request = {
  async get<T = unknown>(path: string, options?: Omit<RequestInit, 'method'>) {
    const response = await fetch(baseURL + path, {
      method: 'GET',
      ...options,
      cache: options?.cache || 'no-cache'
    });
    return (await response.json()) as T;
  },
  async post<T = unknown>(path: string, options?: RequestOptions) {
    const body = options?.body ? JSON.stringify(options.body) : undefined;
    const response = await fetch(baseURL + path, { method: 'POST', ...options, body });
    return (await response.json()) as T;
  },
  async patch<T = unknown>(path: string, options?: RequestOptions) {
    const body = options?.body ? JSON.stringify(options.body) : undefined;
    const response = await fetch(baseURL + path, { method: 'PATCH', ...options, body });
    return (await response.json()) as T;
  },
  async delete<T = unknown>(path: string, options?: Omit<RequestInit, 'method'>) {
    const response = await fetch(baseURL + path, { method: 'DELETE', ...options });
    return (await response.json()) as T;
  }
};

export { request };
