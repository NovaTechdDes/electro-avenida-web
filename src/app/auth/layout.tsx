const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-screen flex items-center bg-white dark:bg-[#171717] justify-center">
      <div className="px-0 py-5 bg-white dark:bg-[#171717]">{children}</div>
    </main>
  );
};

export default AuthLayout;
