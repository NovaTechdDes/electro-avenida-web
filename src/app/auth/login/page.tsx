'use client';

import { login } from '@/src/actions';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="">
      <section className="p-10 rounded-md shadow-md  dark:bg-gray-800">
        <h1 className="text-2xl font-bold dark:text-white">Iniciar Sesion</h1>

        <form action="" className="flex flex-col gap-5 mt-5" onSubmit={handleLogin}>
          <div className="">
            <label htmlFor="email">Correo Electronico</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="algo@gmail.com"
              className="px-2 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2"
            />
          </div>

          <div className="">
            <label htmlFor="password">Contraseña</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              name="password"
              id="password"
              className="px-2 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2"
            />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-400 cursor-pointer">
            Iniciar Sesion
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
