import Image from "next/image";
import { StarIcon } from "lucide-react";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  hasPrime: boolean;
}

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}: ProductCardProps) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        alt={title}
        className="object-contain h-48 w-48 mx-auto"
      />

      <h4 className="my-3 line-clamp-2">{title}</h4>

      <div className="flex">
        {[...Array(rating)]
          .map((_, i) => ({ id: `${id}-star-${i + 1}` }))
          .map((star) => (
            <StarIcon key={star.id} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <p className="font-bold">¥{price.toLocaleString()}</p>
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            src="/prime-tag.png"
            alt="Prime"
            width={48}
            height={48}
            className="w-12"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button type="button" className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}
