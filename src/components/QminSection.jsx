import React from "react";

export default function QminSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative w-full h-64 md:h-auto">
              <img
                src="/roof-top.jpeg"
                alt="Qmin Restaurant"
                className="w-full h-full object-cover md:w-[800px] md:h-[600px]"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 relative inline-block leading-tight md:leading-normal">
                  BE RAW <br /> The Roof Top Cafe
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Be Raw is more than just a restaurant; it's a culinary journey
                that brings you the authentic flavors of India right to your
                doorstep. Located in Sector 31, Gurgaon, we offer a diverse menu
                of mouthwatering dishes, crafted with the finest fresh
                ingredients and expert culinary techniques.
              </p>

              <button
                className="bg-[#c8a24d] hover:bg-[#d8b765] text-white font-semibold py-3 px-8 rounded-[10px] transition-colors w-full md:w-fit cursor-pointer text-sm md:text-base"
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
