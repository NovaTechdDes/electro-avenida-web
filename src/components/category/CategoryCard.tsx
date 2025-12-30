import { iconsMaps } from "@/src/seed/icons";
import Link from "next/link";

interface Props {
  nombre: string;
  descripcion?: string;
  icon: keyof typeof iconsMaps;
}

export const CategoryCard = ({ nombre, descripcion, icon }: Props) => {
  const Icon = iconsMaps[icon] ?? iconsMaps["GiWireCoil"];
  return (
    <Link
      href={`/categoria/${nombre}`}
      className="flex flex-col items-center justify-center border border-gray-200 p-4 rounded-lg hover:bg-gray-100 transition-colors shadow-2xl hover:dark:bg-gray-700"
    >
      <Icon className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mb-5" />
      <h2 className="text-black text-xl font-bold dark:text-white">{nombre}</h2>
      <p className="text-gray-500 text-center dark:text-gray-00">
        {descripcion}
      </p>
    </Link>
  );
};
