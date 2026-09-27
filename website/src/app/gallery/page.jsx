import React from "react";

function Gallery() {
  const images = [
    {
      image:
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
      title: "Our Cozy Space",
      category: "Interior",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      title: "Freshly Brewed",
      category: "Coffee",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      title: "Coffee & Conversations",
      category: "Atmosphere",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      title: "Freshly Baked",
      category: "Bakery",
    },
    {
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      title: "Sweet Moments",
      category: "Desserts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      title: "Morning Coffee",
      category: "Coffee",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      title: "Meet & Relax",
      category: "Interior",
    },
    {
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
      title: "Coffee Time",
      category: "Atmosphere",
    },
  ];

  return (
    <main className="bg-[#f8f3eb] min-h-screen">

      {/* Heading */}
      <section className="text-center px-6 py-20">
        <p className="text-[#8b5e3c] uppercase tracking-[4px] text-sm font-semibold">
          Our Gallery
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-[#3e2723] mt-4">
          Moments at Café Aura
        </h1>

        <p className="text-[#6b5549] max-w-2xl mx-auto mt-5 leading-7">
          A glimpse into our coffee, food, people and the little moments
          that make Café Aura special.
        </p>
      </section>


      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-80"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500 flex items-end">

                <div className="p-6 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                  <p className="text-[#c89f7b] text-sm uppercase tracking-widest">
                    {item.category}
                  </p>

                  <h2 className="text-white text-2xl font-semibold mt-1">
                    {item.title}
                  </h2>

                </div>

              </div>
            </div>
          ))}

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="bg-[#3e2723] text-white text-center py-20 px-6">

        <p className="text-[#c89f7b] uppercase tracking-[3px] text-sm font-semibold">
          Experience It Yourself
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Come create your own moment.
        </h2>

        <p className="text-[#d8c9bd] max-w-xl mx-auto mt-5 leading-7">
          Great coffee, warm conversations and a place that feels like home.
        </p>

        <button className="mt-8 border border-[#c89f7b] text-[#c89f7b] px-8 py-3 rounded-full hover:bg-[#c89f7b] hover:text-[#3e2723] transition">
          Visit Café Aura
        </button>

      </section>

    </main>
  );
}

export default Gallery;