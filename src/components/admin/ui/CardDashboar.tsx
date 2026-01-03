interface Props {
  text: string;
  title: string;
  icon: React.ReactNode;
  number: number;
}

export const CardDashboar = ({ text, title, icon, number }: Props) => {
  return (
    <section className="flex flex-col gap-5 border border-gray-200 rounded-lg bg-white p-5 dark:bg-[#1E1E1E] dark:border-gray-700">
      <div className="flex items-center gap-5">
        <h2 className="font-bold text-2xl"> {title}</h2>

        {icon}
      </div>

      <div>
        <p className="text-3xl font-bold text-yellow-500">{number.toFixed(2)}</p>
        <span>{text}</span>
      </div>
    </section>
  );
};
