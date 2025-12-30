import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#171717]">
      <div className="flex justify-between p-10">
        <div>
          <Image
            src="/imagenes/EA.webp"
            alt="EA"
            className="w-auto h-auto"
            width={100}
            height={100}
          />
          <p className="text-white w-[300px] text-xs mt-5">
            Tu provedor confiable de materiales electricos con mas de 15 años de
            experiencia.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-yellow-500">Enlaces Rapidos</h2>
          <nav className="flex flex-col gap-2">
            <Link
              className="text-sm cursor-pointer hover:text-yellow-500"
              href="/productos"
            >
              Productos
            </Link>
            <Link
              className="text-sm cursor-pointer hover:text-yellow-500"
              href="/categorias"
            >
              Categorias
            </Link>
            <Link
              className="text-sm cursor-pointer hover:text-yellow-500"
              href="/nosotros"
            >
              Nosotros
            </Link>
            <Link
              className="text-sm cursor-pointer hover:text-yellow-500"
              href="/contacto"
            >
              Contacto
            </Link>
          </nav>
        </div>

        <div className="space-y-2">
          <h2 className="text-yellow-500">Contacto</h2>
          <div className="flex gap-2 items-center">
            <BiPhone size={15} className="text-white" />
            <p className="text-white">(3456) 478657</p>
          </div>
          <div className="flex gap-2 items-center">
            <CiMail size={15} className="text-white" />
            <p className="text-white">electroavenidachajari@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-yellow-500">Siguenos</h2>

          <div className="mt-5 flex items-center justify-center">
            <div className="rounded-full bg-gray-600 p-2">
              <Link
                href="https://www.instagram.com/electroavenida_chajari/"
                target="_blank"
              >
                <FaInstagram size={25} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10 border-t border-gray-600 pt-5">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Electro Avenida. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};
