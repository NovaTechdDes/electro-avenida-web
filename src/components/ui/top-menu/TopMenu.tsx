import React from "react";
import Image from "next/image";
import Link from "next/link";

export const TopMenu = () => {
  return (
    <header className="bg-white flex justify-between items-center px-10 py-2 fixed border-b border-gray-200 w-full">
      <Link href="/">
        <Image
          src="/imagenes/EA.webp"
          alt="Electro Avenida"
          width={200}
          height={200}
        />
      </Link>

      <nav className="hidden md:flex text-black">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-500 hover:text-yellow-500"
          href="/productos"
        >
          Productos
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-500 hover:text-yellow-500"
          href="/categorias"
        >
          Categorias
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-500 hover:text-yellow-500"
          href="#nosotros"
        >
          Nosotros
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-500 hover:text-yellow-500"
          href="/contacto"
        >
          Contacto
        </Link>
      </nav>

      <button className="bg-yellow-500 text-black px-5 py-2 rounded-md hover:bg-yellow-400 cursor-pointer">
        Solicitar Cotizacion
      </button>
    </header>
  );
};
