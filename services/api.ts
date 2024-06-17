import { axiosInstance } from './fetcher';

export async function createProduct(url: string, { arg }: { arg: { title: string } }) {
  try {
    const response = await axiosInstance.post(
      url,
      {
        title: arg.title,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}
