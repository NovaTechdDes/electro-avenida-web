'use server';
import axios from 'axios';

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);

    return {
      ok: true,
      categories: data.safeCategories,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      categories: [],
      msg: 'No se pudo obtener las categorias',
    };
  }
};
