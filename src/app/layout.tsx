import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../config/fonts";

export const metadata: Metadata = {
  title: "Electro Avenida",
  description:
    "Venta de materiales eléctricos e iluminación LED. Productos de calidad para instalaciones domiciliarias, comerciales e industriales. Asesoramiento técnico y amplia variedad de marcas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
