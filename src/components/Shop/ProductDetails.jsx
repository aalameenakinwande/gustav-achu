
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";
import { resources, merchandise } from "./ShopData";

export default function ProductDetails() {
  const { slug } = useParams();

  const product = [...resources, ...merchandise].find(
    (item) => item.slug === slug
  );

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0b0f] px-5 text-center text-[#f3f0e9]">
        <ShoppingBag
          size={38}
          strokeWidth={1.2}
          className="mb-5 text-[#D4AF37]"
        />

        <h1 className="text-3xl font-medium tracking-tight">
          Product not found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#999891]">
          This product may have moved or is no longer available.
        </p>

        <Link
          to="/shop"
          className="mt-8 border-b border-[#D4AF37] pb-2 text-xs font-semibold tracking-widest text-[#D4AF37] transition hover:text-[#f3f0e9]"
        >
          RETURN TO SHOP
        </Link>
      </main>
    );
  }

  const variants = product.variants ?? [];

  const activeVariant = variants[selectedVariant];

  const activeImage = activeVariant?.image ?? product.image;

  const activeAlt = activeVariant
    ? `${product.title} - ${activeVariant.name}`
    : product.imageAlt;

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0f] px-5 pb-24 pt-28 text-[#f3f0e9] sm:px-8 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-36">
      {/* Background accent */}
      <div className="pointer-events-none fixed right-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Back navigation */}
        <Link
          to="/shop"
          className="mb-9 inline-flex min-h-11 items-center gap-3 text-[10px] font-semibold tracking-[0.18em] text-[#999891] transition-colors hover:text-[#D4AF37] sm:mb-12"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          BACK TO SHOP
        </Link>

        <div className="grid grid-cols-1 items-start gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* =====================================
              PRODUCT IMAGE
          ====================================== */}
          <div>
            <div className="group relative flex aspect-[4/4.5] items-center justify-center overflow-hidden border border-white/[0.08] bg-[#141418] p-6 sm:p-10 lg:sticky lg:top-10">
              {/* Gold glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(212,175,55,0.10),transparent_68%)]" />

              <img
                key={activeImage}
                src={activeImage}
                alt={activeAlt}
                className="relative z-10 max-h-full max-w-full object-contain transition-opacity duration-300"
              />

              {/* <span className="absolute bottom-5 left-5 z-20 text-[9px] font-semibold tracking-[0.2em] text-[#777773]">
                {product.category}
              </span> */}

              <span className="absolute bottom-5 right-5 z-20 text-[9px] tracking-widest text-[#777773]">
                {String(selectedVariant + 1).padStart(2, "0")}
                {variants.length > 0 &&
                  ` / ${String(variants.length).padStart(2, "0")}`}
              </span>
            </div>

            {/* =====================================
                VARIATION THUMBNAILS
            ====================================== */}
            {variants.length > 0 && (
              <div className="mt-4 sm:mt-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-[9px] font-semibold tracking-[0.18em] text-[#999891]">
                    AVAILABLE VARIATIONS
                  </span>

                  <span className="text-[10px] text-[#D4AF37]">
                    {activeVariant?.name}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 sm:gap-3">
                  {variants.map((variant, index) => {
                    const isSelected = selectedVariant === index;

                    return (
                      <button
                        key={variant.name}
                        type="button"
                        onClick={() => setSelectedVariant(index)}
                        aria-label={`Select ${variant.name}`}
                        aria-pressed={isSelected}
                        title={variant.name}
                        className={`group/thumb relative aspect-square overflow-hidden border bg-[#17171c] transition-all duration-200 ${
                          isSelected
                            ? "border-[#D4AF37] ring-1 ring-[#D4AF37]"
                            : "border-white/[0.10] hover:border-white/40"
                        }`}
                      >
                        <img
                          src={variant.image}
                          alt=""
                          loading="lazy"
                          className={`h-full w-full object-contain p-1.5 transition-transform duration-300 group-hover/thumb:scale-105 sm:p-2 ${
                            isSelected ? "opacity-100" : "opacity-75"
                          }`}
                        />

                        {isSelected && (
                          <span className="absolute inset-x-0 bottom-0 bg-[#D4AF37] px-1 py-1 text-center text-[7px] font-bold tracking-wider text-[#0b0b0f] sm:text-[8px]">
                            SELECTED
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* =====================================
              PRODUCT DETAILS
          ====================================== */}
          <div className="min-w-0 lg:pt-4">
            {/* <span className="inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-[#D4AF37]">
              <span className="h-px w-7 bg-[#D4AF37]" />
              {product.category}
            </span> */}

            <h1 className="mt-6 max-w-xl text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.065em]">
              {product.title}
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="text-2xl font-medium tracking-tight text-[#D4AF37] sm:text-3xl">
                {product.price}
              </span>

              {activeVariant && (
                <span className="border-l border-white/15 pl-5 text-xs text-[#999891]">
                  {activeVariant.name}
                </span>
              )}
            </div>

            <p className="mt-7 max-w-lg text-sm leading-[1.95] text-[#aaa8a1] sm:text-base">
              {product.description}
            </p>

            <div className="my-8 border-t border-white/[0.10] sm:my-10" />

            {/* =====================================
                OTHER PRODUCT OPTIONS
            ====================================== */}
            {(product.options ?? []).map((option) => (
              <div key={option.name} className="mb-7">
                <p className="mb-4 text-[10px] font-semibold tracking-[0.16em]">
                  {option.name.toUpperCase()}
                </p>

                <div className="flex flex-wrap gap-2">
                  {option.values.map((value) => (
                    <span
                      key={value}
                      className="border border-white/15 px-4 py-3 text-xs text-[#aaa8a1]"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* =====================================
                QUANTITY
            ====================================== */}
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-[0.16em]">
                QUANTITY
              </span>

              <div className="flex items-center border border-white/15">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="flex h-11 w-11 items-center justify-center text-xl text-[#f3f0e9] transition hover:text-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  −
                </button>

                <span className="w-10 text-center text-sm tabular-nums">
                  {quantity}
                </span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  disabled={quantity >= 99}
                  onClick={() =>
                    setQuantity((current) =>
                      Math.min(99, current + 1)
                    )
                  }
                  className="flex h-11 w-11 items-center justify-center text-xl text-[#f3f0e9] transition hover:text-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>

            {/* =====================================
                CHECKOUT
            ====================================== */}
           <a
  href={product.href}
  target="_blank"
  rel="noopener noreferrer"
  className="group flex min-h-14 w-full items-center justify-between gap-4 bg-[#ff5653] px-5 py-4 text-[10px] font-bold tracking-[0.13em] text-[#0b0b0f] transition-colors duration-300 hover:bg-[#ff7772] sm:px-6 sm:text-xs"
>
  <span>{product.button}</span>

  <ArrowUpRight
    size={19}
    strokeWidth={1.5}
    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</a>

            <p className="mt-4 text-center text-[10px] leading-relaxed text-[#777773]">
              Secure checkout via Stripe.
            </p>

            {/* Return link */}
            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.12em] text-[#999891] transition hover:text-[#D4AF37]"
            >
              <ArrowLeft size={14} />
              CONTINUE EXPLORING THE SHOP
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
