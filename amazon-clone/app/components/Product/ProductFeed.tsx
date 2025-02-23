import ProductCard from "./ProductCard";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Apple MacBook Pro M2",
    price: 158000,
    description:
      "最新のM2チップを搭載した13インチMacBook Pro。より高速なパフォーマンスと長時間のバッテリー駆動を実現。",
    category: "Electronics",
    image: "/product-images/macbook.jpg",
    rating: 5,
    hasPrime: true,
  },
  {
    id: 2,
    title: "Sony WH-1000XM4",
    price: 35000,
    description:
      "業界最高クラスのノイズキャンセリング機能を搭載したワイヤレスヘッドホン。",
    category: "Electronics",
    image: "/product-images/headphones.jpg",
    rating: 4,
    hasPrime: true,
  },
  // さらに商品を追加...
];

export default function ProductFeed() {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {DUMMY_PRODUCTS.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
