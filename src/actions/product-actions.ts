"use server";

export const getProducts = async (page = 1, limit = 10, search = "") => {
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
