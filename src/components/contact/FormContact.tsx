export const FormContact = () => {
  return (
    <div className="border border-gray-300 p-5 rounded-lg">
      <h2 className="text-xl font-bold">Envianos un mensaje</h2>

      <form action="" className="space-y-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nombre</label>
          <input
            className="border border-gray-400 rounded-lg px-2 py-1 focus:border-gray-500 outline-none"
            type="text"
            placeholder="Tu Nombre"
            name="name"
            id="name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-400 rounded-lg px-2 py-1 focus:border-gray-500 outline-none"
            type="email"
            placeholder="tu@email.com"
            name="email"
            id="email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Telefono</label>
          <input
            className="border border-gray-400 rounded-lg px-2 py-1 focus:border-gray-500 outline-none"
            type="tel"
            placeholder="(555) 123-4567"
            name="phone"
            id="phone"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            id="message"
            placeholder="Describre los productos que necesitas..."
            cols={30}
            className="border border-gray-400 rounded-lg px-2 py-1 focus:border-gray-500 outline-none"
            rows={5}
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-black font-semibold bg-yellow-500 px-5 py-2 rounded-lg w-full hover:bg-yellow-600 transition-colors duration-300 cursor-pointer"
        >
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
};
