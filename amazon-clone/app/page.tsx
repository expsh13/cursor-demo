import Header from "./components/Header/Header";
import ProductFeed from "./components/Product/ProductFeed";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <div className="relative">
          <Image
            src="/banner.jpg"
            alt="Amazon Banner"
            width={1500}
            height={300}
            className="w-full object-cover"
          />
        </div>

        <ProductFeed />
      </main>
    </div>
  );
}
