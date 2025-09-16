"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-20 space-y-16">
        {/* Restaurant Story */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Welcome to <span className="font-semibold">Delicious Bites</span>,
            where passion meets flavor. Since 2005, we’ve been serving authentic
            dishes made with love, fresh ingredients, and a touch of creativity.
            Our goal is to give every guest a memorable dining experience.
          </p>
        </div>

        {/* Chef Profile */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="mx-auto w-full max-w-md">
            <Image
              src="/chef.png"
              width={500}
              height={500}
              alt="Our Chef"
              className="rounded-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Meet Our Chef</h3>
            <p className="text-gray-600 leading-relaxed">
              Chef <span className="font-semibold">Rajesh Kumar</span> brings
              over 20 years of culinary expertise to our kitchen. His
              specialties include Indian and Italian cuisine, blending
              traditional flavors with modern presentation.
            </p>
          </div>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Find Us</h3>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1874.6654351191255!2d73.739640581334!3d19.9946234083612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb84d9d5f123%3A0x16e5bedc56a1de5e!2sPointMatrix%20IT%20Services!5e0!3m2!1sen!2sin!4v1757419761627!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-gray-600 text-lg">
            <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
            <li>Saturday: 12:00 PM - 11:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
