import { env } from '@/lib/env';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
});

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data);

export default fetcher;
