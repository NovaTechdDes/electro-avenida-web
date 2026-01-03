import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, { email, password });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
