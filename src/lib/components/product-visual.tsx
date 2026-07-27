import Image from "next/image"
import type { Product } from "@/lib/products"
import { getProductImage } from "@/lib/image-assets"

export default function ProductVisual({
  product,
  className = "",
}: {
  product: Pick<Product, "name" | "category">
  className?: string
}) {
  const image = getProductImage(product)

  return (
    <div className={`product-visual group/product relative overflow-hidden bg-[var(--color-deep)] ${className}`}>
      <Image
        src={image}
        alt={product.name}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
        className="object-cover transition duration-700 ease-out group-hover/product:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,51,32,0.04),rgba(28,51,32,0.72))]" />
      <div className="absolute inset-4 border border-[rgba(250,247,240,0.36)] opacity-70 [clip-path:polygon(0_0,78%_0,100%_22%,100%_100%,22%_100%,0_78%)]" />
      <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-[rgba(250,247,240,0.35)] opacity-70" />
      <div className="absolute inset-x-5 bottom-5 bg-[rgba(28,51,32,0.74)] p-4 text-[var(--color-cream)] backdrop-blur-md">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--color-fern)]">
          TREE*STAR
        </p>
        <p className="mt-2 line-clamp-2 font-serif text-2xl leading-tight">{product.name}</p>
      </div>
    </div>
  )
}
