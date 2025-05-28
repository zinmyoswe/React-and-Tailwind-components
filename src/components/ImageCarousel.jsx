import { useState } from "react";

const slides = [
  {
    image: "https://images.pexels.com/photos/29635023/pexels-photo-29635023.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "First slide label",
    description: "Some representative placeholder content for the first slide.",
  },
  {
    image: "https://images.pexels.com/photos/31737002/pexels-photo-31737002.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Second slide label",
    description: "Some representative placeholder content for the second slide.",
  },
  {
    image: "https://images.pexels.com/videos/5061405/4k-blue-ridge-parkway-nc-drone-footage-drone-video-5061405.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Slide Image */}
      <div className="relative">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-[600px] object-cover sm:h-96"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-md max-w-[90%]">
          <h5 className="text-lg font-semibold">{slides[current].title}</h5>
          <p className="text-sm">{slides[current].description}</p>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 text-white bg-black/30 hover:bg-black/50"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 text-white bg-black/30 hover:bg-black/50"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
