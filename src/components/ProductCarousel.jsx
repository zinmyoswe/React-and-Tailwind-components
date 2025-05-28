import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Classic T-Shirt",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
  {
    id: 2,
    title: "Formal Shirt",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
  {
    id: 3,
    title: "Denim Pants",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
  {
    id: 4,
    title: "Pleated Skirt",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
  {
    id: 5,
    title: "Graphic Tee",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
  {
    id: 6,
    title: "Casual Shirt",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
  {
    id: 7,
    title: "Chino Pants",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
  {
    id: 8,
    title: "Mini Skirt",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50de8b3a-e709-4575-b877-ba3aa5660003/AS+W+NSW+NK+CHLL+KNT+MD+CRP.png",
  },
];

export default function ProductCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full max-w-full mx-auto my-8">
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Scrollable thumbnails */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-8"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] bg-white rounded-lg shadow p-2 flex-shrink-0"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover rounded-md"
            />
            <h4 className="mt-2 text-sm text-center font-medium">
              {product.title}
            </h4>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
