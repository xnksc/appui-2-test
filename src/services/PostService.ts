import { IPost } from '@/types/IPost';
import axios from 'axios';

export async function getPostsAsync(): Promise<IPost[]> {
  try {
    const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
