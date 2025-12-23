import { DataContact } from "./DataContact";

export const Contact = () => {
  return (
    <div className="text-black justify-center flex items-center flex-col pb-10">
      <h2 className="text-4xl font-bold mt-5">Solicita tu Cotizacion</h2>
      <p className="text-gray-500 mt-2">
        Estamos listos para atenderte. Contactanos y recibe una cotizacion
        personalizada
      </p>

      <DataContact />
    </div>
  );
};
