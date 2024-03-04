import axios from 'axios';
import { _env } from '../env';

const request = axios.create({
  baseURL: _env.next_public_api_url
});

export { request };
