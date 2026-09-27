import React from "react";

function Menu() {
  const menuItems = [
    {
      name: "Cappuccino",
      description: "Rich espresso with smooth steamed milk.",
      price: "₹180",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
      category: "Coffee",
    },
    {
      name: "Café Latte",
      description: "Smooth espresso blended with creamy milk.",
      price: "₹160",
      image:
        "https://images.unsplash.com/photo-1561882468-9110e03e0f78",
      category: "Coffee",
    },
    {
      name: "Iced Coffee",
      description: "Cold, refreshing coffee with a smooth finish.",
      price: "₹190",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
      category: "Coffee",
    },
    {
      name: "Chocolate Cake",
      description: "Rich chocolate cake with a soft creamy layer.",
      price: "₹220",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      category: "Desserts",
    },
    {
      name: "Blueberry Cheesecake",
      description: "Creamy cheesecake topped with fresh blueberries.",
      price: "₹240",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
      category: "Desserts",
    },
    {
      name: "Fresh Croissant",
      description: "Buttery, flaky and freshly baked every morning.",
      price: "₹120",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      category: "Bakery",
    },
  ];

  return (
    <main className="bg-[#f8f3eb] min-h-screen">

      {/* Page Heading */}
      <section className="text-center px-6 py-20">
        <p className="text-[#8b5e3c] uppercase tracking-[4px] text-sm font-semibold">
          Our Menu
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-[#3e2723] mt-4">
          Something for every mood.
        </h1>

        <p className="text-[#6b5549] max-w-2xl mx-auto mt-5 leading-7">
          From freshly brewed coffee to delicious desserts,
          discover your next Café Aura favorite.
        </p>
      </section>

      {/* Menu */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-xl font-semibold text-[#3e2723]">
                    {item.name}
                  </h2>

                  <span className="text-[#8b5e3c] font-bold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>

                <p className="text-[#6b5549] mt-3 leading-6">
                  {item.description}
                </p>

                <span className="inline-block mt-5 px-4 py-1.5 bg-[#f8f3eb] text-[#8b5e3c] text-sm rounded-full">
                  {item.category}
                </span>

              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}

export default Menu;