import type { Metadata } from 'next';
import './globals.css';
import { inter } from '../config/fonts';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Electro Avenida',
  description:
    'Venta de materiales eléctricos e iluminación LED. Productos de calidad para instalaciones domiciliarias, comerciales e industriales. Asesoramiento técnico y amplia variedad de marcas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
