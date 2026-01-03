import Link from 'next/link';
import { LuBox, LuFolderTree } from 'react-icons/lu';
import { MdOutlineDashboard, MdOutlineLogout } from 'react-icons/md';
import { ThemeToggle } from './ThemeToogle';

export const Sidebar = () => {
  return (
    <aside className="bg-gray-400 dark:bg-[#1E1E1E] h-screen w-64 fixed left-0 top-0">
      <div className="flex flex-col h-full">
        <h2 className="text-center mt-2 text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-5">
          <span className="text-yellow-500">ELECTRO</span> <span className="dark:text-white text-black">AVENIDA</span>
        </h2>

        <nav className="mt-5">
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="/admin" className="flex mx-5 text-lg items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer px-3 py-1 text-black dark:text-white">
                <MdOutlineDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="mb-">
              <Link href="/admin/products" className="flex mx-5 text-lg items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer px-3 py-1 text-black dark:text-white">
                <LuBox />
                <span>Productos</span>
              </Link>
            </li>
            <li className="mb-">
              <Link href="/admin/categories" className="flex mx-5 text-lg items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer px-3 py-1 text-black dark:text-white">
                <LuFolderTree />
                <span>Categorias</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto mb-5">
          <ThemeToggle />

          <Link
            href="/"
            className="flex mx-5 text-lg items-center border border-red-500 justify-center gap-2 hover:bg-red-500 hover:text-black dark:hover:bg-gray-700 rounded-lg cursor-pointer px-3 py-1"
          >
            <MdOutlineLogout className="text-red-500 hover:text-black" />
            <span className="text-red-500 hover:text-black">Cerrar Sesion</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};
