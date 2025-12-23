import { titleFont } from "@/src/config/fonts";

interface Props {
  title: string;
  subTitle: string;
  className?: string;
}

export const Title = ({ title, subTitle, className }: Props) => {
  return (
    <div className={`${className} mt-3`}>
      <h2
        className={`${titleFont.className} antialiased text-4xl font-semibold my-10`}
      >
        {title}
      </h2>
      <p className="text-xl mb-5 font-semibold">{subTitle}</p>
    </div>
  );
};
