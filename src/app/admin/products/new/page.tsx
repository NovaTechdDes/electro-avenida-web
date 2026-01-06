'use client';
import { createProduct, getCategories, verificarId } from '@/src/actions';
import { uploadImagesCloudinary } from '@/src/actions/productImage.actions';
import { useForm } from '@/src/hooks/useForm';
import { Category, Product } from '@/src/interface';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosAdd } from 'react-icons/io';

const initialData: Product = {
  _id: '',
  descripcion: '',
  marca: '',
  rubro: '',
  imagenes: [],
  web: true,
};

const NewProductPage = () => {
  const router = useRouter();
  const { formState, onInputChange, _id, descripcion, marca, rubro } = useForm(initialData);
  const [categorias, setCategorias] = useState<Category[]>([]);
  const [urlImagen, setUrlImagen] = useState<File[]>([]);

  const [datos, setDatos] = useState<string[]>([]);
  const [datoAux, setDatoAux] = useState<string>('');

  const [error, setError] = useState<boolean>(false);

  //Cargamos las categorias
  const cargarDatos = async () => {
    const { categories, ok } = await getCategories();

    if (!ok) return null;
    setCategorias(categories);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!_id) return setError(true);
    if (!descripcion) return setError(true);
    if (!marca) return setError(true);
    if (!rubro) return setError(true);

    const { ok: okId } = await verificarId(_id);

    if (okId) return setError(true);

    //Cargamos las imagenes primero
    const { ok: okUpload, urls } = await uploadImagesCloudinary(urlImagen, _id);

    if (!okUpload) return;

    //CArgamos los porductos con las urls de las imagenes
    const { ok } = await createProduct({ ...formState, imagenes: urls, datos });
    if (!ok) return;

    setError(false);
    router.push('/admin/products');
  };

  const handleDatos = (dato: string, accion: string) => {
    if (accion === 'agregar') {
      setDatos([...datos, dato]);
      setDatoAux('');
    } else {
      setDatos(datos.filter((item) => item !== dato));
    }
  };

  return (
    <section className="p-5">
      <div className="border border-gray-300 p-5 min-h-[calc(100vh-50px)] rounded-md bg-slate-800 flex flex-col gap-5">
        <h1 className="text-3xl text-black dark:text-white mb-2 font-bold text-center">Nuevo Producto</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-2 text-center">Completa la informacion del producto nuevo</p>

        <form onSubmit={handleSubmit} className="grid  grid-cols-1 md:grid-cols-2 gap-5 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="_id">
              Codigo del producto *
            </label>
            <input
              onChange={onInputChange}
              value={_id}
              type="text"
              name="_id"
              id="_id"
              className="px-2 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:text-white text-black dark:placeholder:text-gray-400 placeholder:text-gray-800 "
              placeholder="035-019"
            />
            {error && !_id && <p className="text-red-500">El codigo es obligatorio</p>}
            {error && _id && <p className="text-red-500">El codigo ya existe</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="descripcion">
              Decripcion del producto *
            </label>
            <input
              onChange={onInputChange}
              value={descripcion}
              type="text"
              name="descripcion"
              id="descripcion"
              className="px-2 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:text-white text-black dark:placeholder:text-gray-400 placeholder:text-gray-800 "
              placeholder="Descripcion del producto"
            />
            {error && !descripcion && <p className="text-red-500">La descripcion es obligatoria</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="marca">
              Marca del producto *
            </label>
            <input
              onChange={onInputChange}
              value={marca}
              type="text"
              name="marca"
              id="marca"
              className="px-2 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:text-white text-black dark:placeholder:text-gray-400 placeholder:text-gray-800 "
              placeholder="Marca del producto"
            />
            {error && !marca && <p className="text-red-500">La marca es obligatoria</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="rubro">
              Categoria del producto *
            </label>
            <select
              onChange={onInputChange}
              value={rubro}
              name="rubro"
              id="rubro"
              className="px-2 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:text-white text-black dark:placeholder:text-gray-400 placeholder:text-gray-800 "
            >
              <option value="">Seleccione una categoria</option>
              {categorias.map((category) => (
                <option key={category.codigo} value={category.codigo} className="dark:text-white text-black dark:bg-gray-600 bg-gray-100">
                  {category.nombre}
                </option>
              ))}
            </select>
            {error && !rubro && <p className="text-red-500">La categoria es obligatoria</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="imagenes">URL Imagenes</label>

            <input
              onChange={(e) => setUrlImagen(Array.from(e.target.files ?? []))}
              type="file"
              multiple
              accept="image/*"
              name="urlImagen"
              id="urlImagen"
              className="px-2 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:text-white text-black dark:placeholder:text-gray-400 placeholder:text-gray-800 "
              placeholder="URL de la imagen"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dato">Caracteristicas</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="dato"
                id="dato"
                value={datoAux}
                onChange={(e) => setDatoAux(e.target.value)}
                className="px-2 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:text-white text-black dark:placeholder:text-gray-400 placeholder:text-gray-800 "
              />
              <button
                type="button"
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 dark:text-white text-black dark:placeholder:text-gray-400 placeholder:text-gray-800 bg-yellow-600 hover:bg-yellow-700 transition-colors cursor-pointer"
                onClick={() => handleDatos(datoAux, 'agregar')}
              >
                Agregar
              </button>
            </div>
            <ul>
              {datos.map(
                (dato, index) =>
                  dato !== '' && (
                    <li key={index} className="border rounded-lg p-2 hover:bg-red-500 cursor-pointer transition-colors" onClick={() => handleDatos(dato, 'eliminar')}>
                      {dato}
                    </li>
                  )
              )}
            </ul>
          </div>

          <div className="flex gap-5 mt-auto w-full justify-end col-span-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="bg-red-600 mt-auto text-white px-5 py-2 rounded-md flex gap-2 items-center cursor-pointer hover:bg-red-700 transition-colors"
            >
              Cancelar
            </button>
            <button type="submit" className="bg-yellow-600 mt-auto text-white px-5 py-2 rounded-md flex gap-2 items-center cursor-pointer hover:bg-yellow-700 transition-colors">
              <IoIosAdd size={20} /> Agregar Producto
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewProductPage;
