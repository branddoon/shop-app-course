import { Title } from "@/app/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  params: {
    id: string;
  }
}

export default async function({params}: Props) {

    
  const productsInsert = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2]
  ]

  const {id} = await params;
  /* Verificar ID */

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`}>
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500':false,
                  'bg-green-500': true
                }
              )
            }>
              <IoCardOutline size={30}/>
             {/**  <span className="mx-2">Pendiente de pago</span>*/}
                            <span className="mx-2">Orden pagada</span>

            </div>
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
            <div className="mt-5 mb-2 w-full">
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500':false,
                  'bg-green-500': true
                }
              )
            }>
              <IoCardOutline size={30}/>
             {/**  <span className="mx-2">Pendiente de pago</span>*/}
                            <span className="mx-2">Orden pagada</span>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}