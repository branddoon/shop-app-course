import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  }
}

export default async function Page({params}: Props){

  const {id}  = await params;

  if ( id === 'kid' ) {
    notFound();
  }

  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
}
