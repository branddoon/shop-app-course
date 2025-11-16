import { QuantitySelector, Title } from "@/app/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

export default function() {
  
  const productsInsert = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
  ]
  
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden">
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link
              href="/cart"
              className="underline mb-5"
            >
              Continúa comprando
            </Link>
          {/* Items */}
          {
            productsInsert.map(
              product => (
                <div key={product.slug} className="flex">
                  <Image 
                  src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    style={{
                      width:'100px',
                      height:'100px'
                    }}
                    alt={product.title}
                    className="mr-5 rounded"
                  ></Image>
                  <div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p className="font-bold">Subtotal: ${product.price * 3 }</p>
                  </div>
                </div>
              )
            )
          }
          </div>
          {/* Resumen de la orden - */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl font-bold mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Luis Garcia</p>
              <p>Av. Siempre viva 1234</p>
              <p>Col. centro</p>
              <p>CDMX</p>
              <p>CP. 23556</p>
            </div>
            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. de productos</span>
              <span className="text-right">3 artículos</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100</span>
              <span>Impuestos</span>
              <span className="text-right">$15</span>
              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$200</span>
            </div>
            <div>
              <Link href="/orders/1234" className="flex btn-primary justify-center">
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}