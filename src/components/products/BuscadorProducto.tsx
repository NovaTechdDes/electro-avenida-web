import { CiSearch } from "react-icons/ci";
import { useProductsStore } from "@/src/store";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const BuscadorProducto = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { search, setSearch } = useProductsStore();

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("a");
      const params = new URLSearchParams(searchParams);
      params.set("search", search.toString());
      router.push(`${pathName}?${params.toString()}`);
    }
  };

  return (
    <div className="flex items-center w-full mt-7 justify-center ">
      <div className="relative w-[90%] max-w-2xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUpCapture={(e) => handleKeyUp(e)}
          placeholder="Buscar productos por nombre, marca, categoria"
          className="border border-gray-300 w-full py-2 pl-10 pr-12 rounded-lg outline-none focus:border-yellow-500"
        />
        <CiSearch className="absolute left-2  top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
      </div>
    </div>
  );
};
