import { create } from "zustand";

interface ProductsState {
  search: string;
  setSearch: (search: string) => void;
}

export const useProductsStore = create<ProductsState>()((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}));
