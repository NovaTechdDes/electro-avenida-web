import { iconsMaps } from "@/src/seed/icons";
import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  icon: keyof typeof iconsMaps;
}

export const CategoryCard = ({ title, description, icon }: Props) => {
  const Icon = iconsMaps[icon];
  console.log(Icon);
  return (
    <Link
      href={`/categoria/${title}`}
      className="flex flex-col items-center justify-center border border-gray-200 p-4 rounded-lg hover:bg-gray-100 transition-colors shadow-2xl hover:dark:bg-gray-700"
    >
      <Icon size={35} className="text-yellow-500 mb-5" />
      <h2 className="text-black text-xl font-bold dark:text-white">{title}</h2>
      <p className="text-gray-500 text-center dark:text-gray-300">
        {description}
      </p>
    </Link>
  );
};
