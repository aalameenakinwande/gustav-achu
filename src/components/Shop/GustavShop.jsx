
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import PivotBook from "../../images/workbookImages/WorkBookImage.png";
import WealthArchitectPlaybook from "../../images/StoreImages/WealthArchitectPlaybook.png";
import TheSeeker from "../../images/bookImages/Book1.webp";
import CapImage from "../../images/StoreImages/blueandwhite.webp";
import CapTee from "../../images/StoreImages/Tees.webp";
import CapMug from "../../images/StoreImages/blackbluecup.webp";
import MediocreShirt from "../../images/StoreImages/shirt5.jpg";
import { resources, merchandise } from "./ShopData";

function ProductImage({ src, alt, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
    >
      {!imageFailed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.045] sm:p-7"
        />
      )}

      {imageFailed && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-[#777773]">
          <ShoppingBag size={30} strokeWidth={1} />
          <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
            Product image
          </span>
        </div>
      )}
    </div>
  );
}

function ProductLink({ href, children }) {
  return (
    <Link
      to={href}
      className="group/link inline-flex min-h-11 items-center justify-between gap-4 border-b border-red-600 pb-3 text-[10px] font-bold tracking-[0.14em] text-red-600 transition-colors duration-300 hover:border-red-400 hover:text-red-400 sm:text-[11px]"
    >
      <span>{children}</span>

      <ArrowUpRight
        size={16}
        strokeWidth={1.6}
        className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </Link>
  );
}

function ResourceCard({ item }) {
  return (
    <article className="group flex min-w-0 flex-col">
      <div className="relative mb-6 overflow-hidden rounded-sm border border-white/[0.08] bg-[#111116]">
        <div className="flex items-center justify-between px-4 py-4 sm:px-5">
          <span className="text-[9px] font-semibold tracking-[0.2em] text-[#a4a19a]">
            {item.category}
          </span>

          <span className="text-[10px] tabular-nums text-[#777773]">
            {item.number} / 03
          </span>
        </div>

        <div className="relative aspect-[4/4.1] overflow-hidden bg-[#17171c]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(223,113,64,0.10),transparent_65%)]" />

          <ProductImage src={item.image} alt={item.imageAlt} />

          <div className="pointer-events-none absolute inset-0 border-t border-white/[0.04]" />
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-4 sm:px-5">
          <span className="text-[9px] uppercase tracking-[0.16em] text-[#777773]">
            {item.category === "BOOK"
              ? "Paperback / Book"
              : "Digital resource"}
          </span>

          <span className="text-sm font-semibold tracking-tight text-[#f3f0e9]">
            {item.price}
          </span>
        </div>
      </div>

      <h3 className="max-w-md text-[23px] font-medium leading-[1.13] tracking-[-0.055em] text-[#f3f0e9] transition-colors duration-300 group-hover:text-red-500 sm:text-[27px]">
        {item.title}
      </h3>

      <p className="mt-4 max-w-md text-[13px] leading-[1.9] text-[#999891] sm:text-sm">
        {item.description}
      </p>

      <div className="mt-7">
        <ProductLink href={`/shop/${item.slug}`}>
          {item.button}
        </ProductLink>
      </div>
    </article>
  );
}

function MerchandiseCard({ item, index }) {
  return (
    <article className="group flex min-w-0 flex-col">
      <div className="relative mb-5 overflow-hidden border border-[#d7d4cc]/15 bg-[#f0eee8]">
        <div className="absolute left-4 top-4 z-10 text-[9px] font-semibold tracking-[0.18em] text-[#77746c]">
          0{index + 1}
        </div>

        <div className="aspect-[4/4.4]">
          <ProductImage
            src={item.image}
            alt={item.imageAlt}
            className="bg-[radial-gradient(ellipse_at_50%_45%,#ffffff_0%,#f0eee8_72%)]"
          />
        </div>

        {/* Red image button */}
        <Link
          to={`/shop/${item.slug}`}
          aria-label={item.button}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-red-600 text-white transition-colors duration-300 hover:bg-red-700 hover:text-white sm:bottom-4 sm:right-4"
        >
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </Link>
      </div>

      <span className="text-[9px] font-semibold tracking-[0.18em] text-[#999891]">
        {item.category}
      </span>

      <h3 className="mt-2 min-h-[2.7em] text-[17px] font-medium leading-snug tracking-[-0.035em] text-[#f3f0e9] sm:text-[19px]">
        {item.title}
      </h3>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-[#f3f0e9]">
          {item.price}
        </span>

        {/* Red text button */}
        <Link
          to={`/shop/${item.slug}`}
          className="text-[9px] font-bold tracking-[0.12em] text-red-600 transition-colors hover:text-red-400 sm:text-[10px] lg:text-[14px]"
        >
          {item.button}
        </Link>
      </div>
    </article>
  );
}

export default function GustavShop() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0f] text-[#f3f0e9]">
      {/* RESOURCES */}
      <section
        id="resources"
        className="relative px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32 lg:px-16 lg:pb-40 lg:pt-40"
      >
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/[0.07] blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col items-center text-center sm:mb-20 lg:mb-24">
            <h1 className="w-full whitespace-nowrap text-[clamp(2.5rem,7vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.075em]">
              Learn. Reflect.{" "}
              <span className="text-[#D4AF37]">Build.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-[1.95] text-[#aaa8a1] sm:mt-10 sm:text-base">
              Sometimes the next step is simply learning something that changes
              how you see your money, your life or your future.
              <br />
              <br />
              Explore Gustav&apos;s books and practical resources.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-12">
            {resources.map((item) => (
              <ResourceCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* MERCHANDISE */}
      <section
        id="merchandise"
        className="relative border-t border-white/[0.09] bg-[#111114] px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
      >
        <div className="pointer-events-none absolute left-[-200px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/[0.06] blur-[130px]" />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <span className="mb-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                <span className="h-px w-8 bg-[#D4AF37]" />
                WEAR THE MESSAGE
              </span>

              <h2 className="max-w-xl text-2xl font-medium leading-[0.88] tracking-[-0.08em] lg:text-7xl">
                <span className="inline text-[#f3f0e9]">
                  #YouREnough
                </span>
                <span className="inline text-[#D4AF37]">#</span>
              </h2>

              <div className="mt-8 space-y-1 text-[17px] leading-[1.8] text-[#c3c0b8] sm:text-xl">
                <p>You are more than your income.</p>
                <p>More than your setbacks.</p>
                <p>More than your current circumstances.</p>
              </div>

              <p className="mt-7 max-w-lg text-sm leading-[1.95] text-[#999891] sm:text-base">
                The #YouREnough# message is a reminder to live from purpose,
                pursue growth and refuse to let your circumstances define
                your potential.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
              {merchandise.map((item, index) => (
                <MerchandiseCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
