import React from 'react'

const TwoColumnLayout = () => {
  return (
     <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Welcome to Tailwind + React</h2>
          <p className="text-gray-700 mb-4">
            This is a simple two-column layout using Tailwind CSS in a React component.
            On larger screens, text and image appear side by side. On smaller screens, they stack.
          </p>
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-violet-500 to-red-500 text-white rounded transition">
            Learn More
          </button>
        </div>

        {/* Right Column: Image */}
        <div>
          <img
            src="https://www.renthub.in.th/assets/renthub/desktop-hero-bg-3008a68d2551176a8c471fe35be12253.svg"
            alt="Tech"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default TwoColumnLayout