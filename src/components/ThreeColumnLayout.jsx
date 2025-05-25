export default function ThreeColumnLayout() {
  const items = [
    {
      title: "React Development",
      image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Build dynamic UIs with reusable components and powerful hooks.",
    },
    {
      title: "Tailwind Styling",
      image: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Utility-first CSS for fast and consistent design implementation.",
    },
    {
      title: "Responsive Layout",
      image: "https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Create layouts that adapt to every screen size seamlessly.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
