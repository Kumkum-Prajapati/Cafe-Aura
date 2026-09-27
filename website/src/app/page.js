import React from "react";

function Page() {
  return (
    <>

      {/* Hero Section */}
      <section className="min-h-[85vh] bg-[#f8f3eb] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-[#8b5e3c] uppercase tracking-[4px] text-sm font-semibold mb-5">
              Welcome to Café Aura
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-[#3e2723] leading-tight">
              Coffee made
              <span className="block text-[#8b5e3c]">
                with soul.
              </span>
            </h1>

            <p className="mt-6 text-[#6b5549] text-lg leading-8 max-w-lg">
              A cozy corner where freshly brewed coffee, delicious
              treats and beautiful conversations come together.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#3e2723] text-white px-7 py-3 rounded-full hover:bg-[#8b5e3c] transition">
                Explore Menu
              </button>

              <button className="border border-[#3e2723] text-[#3e2723] px-7 py-3 rounded-full hover:bg-[#3e2723] hover:text-white transition">
                Our Story
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Coffee at Café Aura"
              className="w-full h-[500px] object-cover rounded-[40px] shadow-xl"
            />
          </div>

        </div>
      </section>


      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-[#8b5e3c] uppercase tracking-[3px] text-sm font-semibold">
              Our Favorites
            </p>

            <h2 className="text-4xl font-bold text-[#3e2723] mt-3">
              Made for your mood
            </h2>

            <p className="text-[#6b5549] mt-4">
              Some of the favorites our guests keep coming back for.
            </p>
          </div>


          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-[#f8f3eb] rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                alt="Cappuccino"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3e2723]">
                  Cappuccino
                </h3>

                <p className="text-[#6b5549] mt-2">
                  Rich espresso with smooth steamed milk.
                </p>

                <p className="text-[#8b5e3c] font-bold mt-4">
                  ₹180
                </p>
              </div>
            </div>


            {/* Card 2 */}
            <div className="bg-[#f8f3eb] rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307"
                alt="Fresh pastry"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3e2723]">
                  Fresh Pastry
                </h3>

                <p className="text-[#6b5549] mt-2">
                  Freshly baked, buttery and delicious.
                </p>

                <p className="text-[#8b5e3c] font-bold mt-4">
                  ₹120
                </p>
              </div>
            </div>


            {/* Card 3 */}
            <div className="bg-[#f8f3eb] rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
                alt="Chocolate cake"
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3e2723]">
                  Chocolate Cake
                </h3>

                <p className="text-[#6b5549] mt-2">
                  Rich chocolate cake for your sweet cravings.
                </p>

                <p className="text-[#8b5e3c] font-bold mt-4">
                  ₹220
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* About Preview */}
      <section className="bg-[#3e2723] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-[#c89f7b] uppercase tracking-[3px] text-sm font-semibold">
            More than just coffee
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            A place to slow down.
          </h2>

          <p className="text-[#d8c9bd] max-w-2xl mx-auto mt-6 leading-8">
            At Café Aura, we believe coffee tastes better when you
            have the right people, the right music and nowhere else
            you need to be.
          </p>

          <button className="mt-8 border border-[#c89f7b] text-[#c89f7b] px-7 py-3 rounded-full hover:bg-[#c89f7b] hover:text-[#3e2723] transition">
            Discover Our Story
          </button>

        </div>
      </section>

    </>
  );
}

export default Page;