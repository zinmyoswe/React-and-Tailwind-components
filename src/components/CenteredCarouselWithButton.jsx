import { useState } from "react";

const slides = [
  {
    image: "https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/5752964_CAM_Onsite_SS_25_Adicolor_21_May_SEA_Masthead_V2_01_03_1642849ae5.gif",
    title: "Big Sale Today!",
    description: "Get up to 50% off on all items.",
  },
  {
    image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_originals_summer_glow_digital_stories_ss25_launch_men_glp_banner_hero_d_6d40e93040.jpg",
    title: "New Arrivals",
    description: "Explore the latest trends now.",
  },
  {
    image: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_1920,w_1920/global_originals_summer_glow_digital_stories_ss25_launch_women_glp_banner_hero_d_28cec1ca58.jpg",
    title: "Exclusive Deals",
    description: "Only available this weekend.",
  },
];

export default function CenteredCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-full mx-auto md:h-[500px] sm:h-[300px] overflow-hidden rounded-xl shadow-lg">
      {/* Slide */}
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="w-full h-full object-cover"
      />

      {/* Overlay with text and button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-2">
          {slides[currentIndex].title}
        </h2>
        <p className="text-lg mb-4">{slides[currentIndex].description}</p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
        aria-label="Previous"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
        aria-label="Next"
      >
        ❯
      </button>
    </div>
  );
}
