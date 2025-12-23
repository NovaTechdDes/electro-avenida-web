import { Footer, TopMenu } from "@/src/components";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <TopMenu />
      <div className="px-0 py-5 bg-white">{children}</div>
      <Footer />
    </main>
  );
};

export default ShopLayout;
