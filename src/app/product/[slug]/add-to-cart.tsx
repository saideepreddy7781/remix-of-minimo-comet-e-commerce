"use client";

import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/products";
import Link from "next/link";

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="mt-6 flex gap-3">
      <button
        type="button"
        onClick={() => add(product, 1)}
        className="h-12 px-6 rounded-full bg-foreground text-background"
      >
        Add to cart
      </button>
      <Link
        href="/checkout"
        className="h-12 px-6 rounded-full border border-border/70 bg-background/60 flex items-center"
      >
        Buy now
      </Link>
    </div>
  );
}