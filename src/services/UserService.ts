import { IUser } from '@/types/IUser';
import axios from 'axios';

export async function getUsersAsync(): Promise<IUser[]> {
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getUserByIdAsync(id: number): Promise<IUser> {
  try {
    const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
