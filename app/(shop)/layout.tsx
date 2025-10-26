import { TopMenu } from "../components";

export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="main-h-screen">
      <TopMenu>
      </TopMenu>
        {children}
    </main>
  );
}