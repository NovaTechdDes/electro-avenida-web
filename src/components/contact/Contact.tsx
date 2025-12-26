import { DataContact } from "./DataContact";
import { FormContact } from "./FormContact";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="text-black flex justify-center flex-col pb-10"
    >
      <h2 className="text-4xl font-bold text-center mt-5">
        Solicita tu Cotizacion
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Estamos listos para atenderte. Contactanos y recibe una cotizacion
        personalizada
      </p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 w-[80vw] mx-auto">
        <FormContact />
        <DataContact />
      </div>
    </section>
  );
};
