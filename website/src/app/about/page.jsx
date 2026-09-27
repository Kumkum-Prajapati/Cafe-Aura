import React from "react";

function About() {
  return (
    <main className="bg-[#f8f3eb] min-h-screen">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-[#8b5e3c] uppercase tracking-[4px] text-sm font-semibold">
            Our Story
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#3e2723] mt-4 leading-tight">
            More than just
            <span className="block text-[#8b5e3c]">
              a cup of coffee.
            </span>
          </h1>

          <p className="text-[#6b5549] mt-6 leading-8 text-lg">
            Café Aura was created with a simple idea — to build a place
            where people can slow down, enjoy great coffee, and spend
            meaningful time together.
          </p>

          <p className="text-[#6b5549] mt-4 leading-8">
            From carefully selected coffee beans to freshly baked treats,
            everything at Café Aura is made to create a warm and memorable
            experience.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
            alt="Café Aura interior"
            className="w-full h-[500px] object-cover rounded-[40px] shadow-xl"
          />
        </div>

      </section>


      {/* Our Philosophy */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-[#8b5e3c] uppercase tracking-[3px] text-sm font-semibold">
              What We Believe
            </p>

            <h2 className="text-4xl font-bold text-[#3e2723] mt-3">
              Our Philosophy
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="text-center p-8 rounded-3xl bg-[#f8f3eb]">
              <div className="text-4xl mb-5">☕</div>

              <h3 className="text-xl font-semibold text-[#3e2723]">
                Quality First
              </h3>

              <p className="text-[#6b5549] mt-3 leading-7">
                We believe great coffee starts with quality ingredients
                and careful preparation.
              </p>
            </div>


            {/* Card 2 */}
            <div className="text-center p-8 rounded-3xl bg-[#f8f3eb]">
              <div className="text-4xl mb-5">🤎</div>

              <h3 className="text-xl font-semibold text-[#3e2723]">
                Warm Atmosphere
              </h3>

              <p className="text-[#6b5549] mt-3 leading-7">
                A comfortable space where you can relax, work,
                meet friends or simply enjoy your coffee.
              </p>
            </div>


            {/* Card 3 */}
            <div className="text-center p-8 rounded-3xl bg-[#f8f3eb]">
              <div className="text-4xl mb-5">🌱</div>

              <h3 className="text-xl font-semibold text-[#3e2723]">
                Fresh & Simple
              </h3>

              <p className="text-[#6b5549] mt-3 leading-7">
                Fresh ingredients, honest flavors and simple recipes
                made with attention to every detail.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Numbers */}
      <section className="bg-[#3e2723] text-white py-20">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-4xl font-bold text-[#c89f7b]">
              5+
            </h3>
            <p className="text-[#d8c9bd] mt-2">
              Years of Passion
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#c89f7b]">
              20+
            </h3>
            <p className="text-[#d8c9bd] mt-2">
              Coffee Varieties
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#c89f7b]">
              10K+
            </h3>
            <p className="text-[#d8c9bd] mt-2">
              Happy Guests
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#c89f7b]">
              7 Days
            </h3>
            <p className="text-[#d8c9bd] mt-2">
              Open Every Week
            </p>
          </div>

        </div>

      </section>


      {/* Closing Section */}
      <section className="py-20 text-center px-6">

        <p className="text-[#8b5e3c] uppercase tracking-[3px] text-sm font-semibold">
          Come Say Hello
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#3e2723] mt-4">
          Your table is waiting.
        </h2>

        <p className="text-[#6b5549] max-w-xl mx-auto mt-5 leading-7">
          Whether it's your morning coffee or an evening with friends,
          Café Aura is always ready to welcome you.
        </p>

        <button className="mt-8 bg-[#3e2723] text-white px-8 py-3 rounded-full hover:bg-[#8b5e3c] transition">
          Visit Us
        </button>

      </section>

    </main>
  );
}

export default About;