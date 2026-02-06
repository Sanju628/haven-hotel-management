import React from "react";

export default function QminSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto">
              <img
                src="/roof-top.jpeg"
                alt="Qmin Restaurant"
                className="w-[800px] h-[600px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="relative">
                <h2 className="text-5xl font-bold mb-6 relative inline-block">
                  BE RAW <br /> The Roof Top Cafe
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-base">
                Be Raw is more than just a restaurant; it's a culinary journey
                that brings you the authentic flavors of India right to your
                doorstep. Located in Sector 31, Gurgaon, we offer a diverse menu
                of mouthwatering dishes, crafted with the finest fresh
                ingredients and expert culinary techniques.
              </p>

              <button
                className="bg-[#c8a24d] hover:bg-[#d8b765] text-white font-semibold py-3 px-8 rounded-[10px] transition-colors w-fit cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.beraw.in/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Feel the buzz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
