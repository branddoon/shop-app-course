
export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="main-h-screen bg-gray-500">
        {children}
    </main>
  );
}