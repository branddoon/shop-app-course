import { ProductGrid, Sidebar, Title } from "@/app/components";
import { Category } from "@/app/interfaces";
import { initialData } from "@/seed";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default async function Page({params}: Props){

  const {id}  = await params;

  const products = seedProducts.filter ( product => product.gender == id);

  const labels : Record<Category, String> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos'
  }

  /*
  if ( id === 'kid' ) {
    notFound();
  }
  */

  return (
    <div>
      <Title
      title={`Articulos de ${labels[id]}`}
      subtitle="Todos los productos"
      className="mb-2"
      />
      <ProductGrid products={products}/>
      <Sidebar></Sidebar>
    </div>
  );
}
