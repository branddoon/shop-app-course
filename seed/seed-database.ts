import { PrismaClient } from "../prisma/generated/prisma/client";
import { initialData } from "./seed";

const prisma = new PrismaClient();

async function main() {
  console.log( 'Starting seed...' );
  // 1. Borrar registros previos
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;
  const categoriesData = categories.map( (name) => ({ name }));
  
  // 2. Crear registros de categoria 
  await prisma.category.createMany({
    data: categoriesData
  });

  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce( (map, category) => {
    map[ category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  // 4. Crear registros de productos 
  products.forEach( async(product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type]
      }
    })


  // 5. Crear registros de imagenes 
  const imagesData = images.map( image => ({
    url: image,
    productId: dbProduct.id
  }));
  await prisma.productImage.createMany({
    data: imagesData
  });

  });

  console.log( 'Seed finished...' );
}


( async()=> {
  main();
} )();