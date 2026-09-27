import React from "react";

function Contact() {
  return (
    <main className="bg-[#f8f3eb] min-h-screen">

      {/* Heading */}
      <section className="text-center px-6 py-20">
        <p className="text-[#8b5e3c] uppercase tracking-[4px] text-sm font-semibold">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-[#3e2723] mt-4">
          We'd love to hear from you.
        </h1>

        <p className="text-[#6b5549] max-w-2xl mx-auto mt-5 leading-7">
          Have a question, feedback, or just want to say hello?
          Drop us a message or visit us at Café Aura.
        </p>
      </section>


      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-[#3e2723] text-white rounded-3xl p-8 md:p-10">

            <p className="text-[#c89f7b] uppercase tracking-[3px] text-sm font-semibold">
              Contact Us
            </p>

            <h2 className="text-3xl font-bold mt-3">
              Come say hello.
            </h2>

            <p className="text-[#d8c9bd] mt-4 leading-7">
              Whether you want to grab a coffee or simply have a question,
              we're always happy to hear from you.
            </p>


            {/* Details */}
            <div className="mt-10 space-y-7">

              <div>
                <p className="text-[#c89f7b] text-sm uppercase tracking-wider">
                  Address
                </p>
                <p className="mt-2 text-[#f8f3eb]">
                  21 Coffee Street, Gwalior, Madhya Pradesh
                </p>
              </div>

              <div>
                <p className="text-[#c89f7b] text-sm uppercase tracking-wider">
                  Phone
                </p>
                <p className="mt-2 text-[#f8f3eb]">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="text-[#c89f7b] text-sm uppercase tracking-wider">
                  Email
                </p>
                <p className="mt-2 text-[#f8f3eb]">
                  hello@cafeaura.com
                </p>
              </div>

            </div>


            {/* Opening Hours */}
            <div className="border-t border-[#65483d] mt-10 pt-8">

              <h3 className="text-xl font-semibold">
                Opening Hours
              </h3>

              <div className="mt-4 space-y-2 text-[#d8c9bd]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8 AM - 10 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>9 AM - 11 PM</span>
                </div>
              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-[#3e2723]">
              Send us a message
            </h2>

            <p className="text-[#6b5549] mt-2">
              Fill out the form and we'll get back to you.
            </p>


            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#3e2723] mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-[#ddd2c8] outline-none focus:border-[#8b5e3c] transition"
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#3e2723] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-[#ddd2c8] outline-none focus:border-[#8b5e3c] transition"
                />
              </div>


              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-[#3e2723] mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-xl border border-[#ddd2c8] outline-none focus:border-[#8b5e3c] transition"
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#3e2723] mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border border-[#ddd2c8] outline-none focus:border-[#8b5e3c] transition resize-none"
                ></textarea>
              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#3e2723] text-white py-3 rounded-xl hover:bg-[#8b5e3c] transition font-medium"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* Location */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <p className="text-[#8b5e3c] uppercase tracking-[3px] text-sm font-semibold">
              Find Us
            </p>

            <h2 className="text-4xl font-bold text-[#3e2723] mt-3">
              Visit Café Aura
            </h2>
          </div>

          <div className="mt-10 h-72 rounded-3xl bg-[#e9dfd5] flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-3">📍</div>

              <h3 className="text-xl font-semibold text-[#3e2723]">
                Café Aura
              </h3>

              <p className="text-[#6b5549] mt-2">
                21 Coffee Street, Gwalior
              </p>

              <button className="mt-5 text-[#8b5e3c] font-semibold hover:underline">
                Get Directions →
              </button>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;