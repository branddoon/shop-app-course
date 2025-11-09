'use-client';

import { initialData } from "@/seed";
import notFound from "../not-found";
import { titleFont } from "@/app/layout";
import { SizeSelector } from '../../../components/product/size-selector/SizeSelector';
import { Size } from "@/app/interfaces";
import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector } from "@/app/components";

interface Props {
  params: {
    slug: string
  }
}

export default async function({params}: Props) {

  const {slug} = await params;

  const product = initialData.products.find(product => product.slug == slug);

  if ( !product ){
    notFound();
  }

  return (
    <div className="mt-5 mb-20 md:grid-cols-3 gap-3">
        {/* Slideshow */}
        <div className="col-span-1 md:col-span-2">
          
          {/* Mobile */}
          <ProductMobileSlideShow
            title={product?.title as string}
            images={product?.images as string[]}
            className="block md:hidden"
          />
          {/* Desktop */}
          <ProductSlideShow
            title={product?.title as string}
            images={product?.images as string[]}
            className="hidden md:block"
          />

        </div>
        {/* Detalles */}
        <div className="col-span-1 px-5">
          <h1 className={`${titleFont.className} antialiased fond-gold text-xl`}>
            {product?.title}
          </h1>
          <p className="text-lg mb-5">
            ${product?.price}
          </p>
          {/* Selector de tallas */}
          <SizeSelector
            selectedSize={product?.sizes[0] as Size}
            availableSizes={product?.sizes as Size[]}        
          />

          {/* Selector de cantidad*/}
          <QuantitySelector quantity ={3}/>

          {/* button */}
          <button className="btn-primary my-5">
            Agregar al carrito
          </button>

          {/* Descripccion */}
          <h3 className="font-bold text-sm">Descripcción</h3>
          <p>
            {product?.description}
          </p>

        </div>
    </div>
  );
}