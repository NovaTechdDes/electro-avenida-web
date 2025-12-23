import { iconsMaps } from "@/src/seed/icons";

interface Props {
  title: string;
  description?: string;
  icon: keyof typeof iconsMaps;
}

export const CategoryCard = ({ title, description, icon }: Props) => {
  const Icon = iconsMaps[icon];
  return (
    <div className="flex flex-col items-center justify-center border border-gray-200 p-4 rounded-lg hover:bg-gray-100 transition-colors shadow-2xl">
      <Icon size={35} className="text-yellow-500 mb-5" />
      <h2 className="text-black text-xl font-bold">{title}</h2>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};
