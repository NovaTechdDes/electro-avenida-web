'use server';

import axios from 'axios';
import { Product } from '../interface';

interface Response {
  ok: boolean;
  products: Product[];
  msg: string;
  totalPages: number;
}

export const getProducts = async (page = 1, limit = 10, search = ''): Promise<Response> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?page=${page}&limit=${limit}&search=${search}`);

    return await res.json();
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      products: [],
      totalPages: 0,
      msg: 'Error al obtener los productos',
    };
  }
};

interface ProductResponse {
  ok: boolean;
  product: Product | null;
  msg: string;
}

export const getProduct = async (id: string): Promise<ProductResponse> => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      product: null,
      msg: 'Error al obtener el producto',
    };
  }
};

export const getProductsByCategory = async (category: string, page: number = 1, limit: number = 10, search: string = ''): Promise<Response> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?category=${category}&page=${page}&limit=${limit}&search=${search}`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      products: [],
      totalPages: 0,
      msg: 'Error al obtener los productos',
    };
  }
};

export const createProduct = async (product: Product): Promise<ProductResponse> => {
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, product);
    return data;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      product: null,
      msg: 'Error al crear el producto',
    };
  }
};

export const verificarId = async (id: string): Promise<ProductResponse> => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      product: null,
      msg: 'Error al verificar el producto',
    };
  }
};
