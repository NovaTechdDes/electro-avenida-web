"use client";
import { CiSearch } from "react-icons/ci";
import { useProductsStore } from "@/src/store";

export const BuscadorProducto = () => {
  const { search, setSearch } = useProductsStore();

  return (
    <div className="flex items-center w-full mt-7 justify-center ">
      <div className="relative w-[90%] max-w-2xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar productos por nombre, marca, categoria"
          className="border border-gray-300 w-full py-2 pl-10 pr-12 rounded-lg outline-none focus:border-yellow-500"
        />
        <CiSearch className="absolute left-2  top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
      </div>
    </div>
  );
};
