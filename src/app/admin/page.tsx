import { CardDashboar } from '@/src/components/admin/ui/CardDashboar';
import { BiBox } from 'react-icons/bi';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { IoPeopleOutline } from 'react-icons/io5';
import { LuFolderTree } from 'react-icons/lu';

const PageAdmin = () => {
  return (
    <div className="p-10">
      <h1 className="my-5 text-4xl font-bold">Dashboard Administracion</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <CardDashboar text="Productos Registrados" title="Total de Productos" icon={<BiBox size={20} className="text-yellow-500" />} number={12} />
        <CardDashboar text="Categorias Activas" title="Total de Categorias" icon={<LuFolderTree size={20} className="text-yellow-500" />} number={12} />
        <CardDashboar text="Ventas Realizadas" title="Total de Ventas" icon={<HiMiniArrowTrendingUp size={20} className="text-yellow-500" />} number={12} />
        <CardDashboar text="Admin y Clientes" title="Total de Usuarios" icon={<IoPeopleOutline size={20} className="text-yellow-500" />} number={1} />
      </div>
    </div>
  );
};

export default PageAdmin;
