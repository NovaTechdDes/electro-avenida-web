import React from "react";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";

export const DataContact = () => {
  return (
    <div className=" border border-gray-300 p-5 rounded-lg">
      <h2 className="text-xl font-bold">Informacion de contacto</h2>

      <div className="flex gap-2 mt-2">
        <BiPhone size={25} className="text-yellow-500" />
        <div>
          <h3 className="text-lg font-bold">Telefono</h3>
          <p className="text-gray-600">(3456) 478657 (Whatsapp)</p>
          <p className="text-gray-600">(3456) 421421 (Fijo)</p>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <CiMail size={25} className="text-yellow-500" />
        <div>
          <h3 className="text-lg font-bold">Email</h3>
          <p className="text-gray-600">electroavenidachajari@gmail.com</p>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <CiLocationOn size={25} className="text-yellow-500" />
        <div>
          <h3 className="text-lg font-bold">Direccion</h3>
          <p className="text-gray-600">Av. 9 De Julio 3380</p>
        </div>
      </div>

      <div className="flex gap-2 mt-10 flex-col">
        <h2 className="text-lg font-bold">Horarios de Atencion</h2>

        <p className="text-gray-500 text-sm">
          Lunes a Viernes: 8:00 AM - 12:00 PM y 16:00 PM a 20:00 PM
        </p>
        <p className="text-gray-500 text-sm">Sabados: 8:00 AM - 12:30 PM</p>
        <p className="text-gray-500 text-sm">Domingos: Cerrado</p>
      </div>
    </div>
  );
};
