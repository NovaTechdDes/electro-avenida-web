import { TopMenu } from "@/src/components";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <TopMenu />
      <div className="px-0  bg-white">{children}</div>
    </main>
  );
};

export default ShopLayout;
