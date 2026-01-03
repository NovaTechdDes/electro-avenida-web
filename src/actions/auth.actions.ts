import axios from 'axios';

export const login = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, { email, password });
    if (!data.ok) {
      console.log(data.message);
      return {
        ok: false,
        message: data.message,
      };
    }

    return data;
  } catch (error: any) {
    return {
      ok: false,
      message: error.response.data.error,
    };
  }
};
