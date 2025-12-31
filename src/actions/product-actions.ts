"use server";

import axios from "axios";
import { Product } from "../interface";

interface Response {
  ok: boolean;
  products: Product[];
  msg: string;
}

export const getProducts = async (
  page = 1,
  limit = 10,
  search = ""
): Promise<Response> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products?page=${page}&limit=${limit}&search=${search}`
    );

    return await res.json();
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      products: [],
      msg: "Error al obtener los productos",
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
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      product: null,
      msg: "Error al obtener el producto",
    };
  }
};
