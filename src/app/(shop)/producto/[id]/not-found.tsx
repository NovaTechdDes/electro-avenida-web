import Link from "next/link";
import { BiPackage } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <BiPackage className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Producto no encontrado</h2>
        <p className="text-muted-foreground mb-6">
          El producto que buscas no existe o ha sido removido.
        </p>
        <button>
          <Link href="/productos">
            <BsArrowLeft className="mr-2 h-4 w-4" />
            Ver todos los productos
          </Link>
        </button>
      </div>
    </div>
  );
}
