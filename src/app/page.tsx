import Image from "next/image";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-full">
        <div style={{ position: 'relative', background: '#4CA809' }}>
          <Navbar />
          <ImageSlider />
        </div>

        {/* Products & Services Section */}
<section className="w-full py-16 bg-gradient-to-br from-[#4CA809]/10 via-white to-[#4CA809]/20">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4CA809] mb-2 text-center tracking-tight">
      Our Products & Services
    </h2>
    <div className="flex justify-center mb-10">
      <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#4CA809] via-[#4CA809]/80 to-[#4CA809]"></span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div
  className="relative group rounded-2xl shadow-xl overflow-hidden border border-[#4CA809]/20 min-h-[220px] flex items-end transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
  style={{ backgroundImage: "url('/assets/lom1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
>
  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
  <div className="relative z-10 w-full p-6 bg-black/40 rounded-b-2xl">
    <span className="font-bold text-lg text-white mb-2 block drop-shadow">Fresh Produce</span>
    <p className="text-gray-100 text-base drop-shadow">Locally sourced fruits, vegetables, and herbs.</p>
  </div>
</div>
      {/* Card 2 */}
      <div
        className="relative group rounded-2xl shadow-xl overflow-hidden border border-[#4CA809]/20 min-h-[220px] flex items-end transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        style={{ backgroundImage: "url('/assets/meat.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="relative z-10 w-full p-6 bg-black/40 rounded-b-2xl">
          <span className="font-bold text-lg text-white mb-2 block drop-shadow">Meat & Seafood</span>
          <p className="text-gray-100 text-base drop-shadow">A variety of fresh, frozen, and organic meats and seafood options.</p>
        </div>
      </div>
      {/* Card 3 */}
      <div
        className="relative group rounded-2xl shadow-xl overflow-hidden border border-[#4CA809]/20 min-h-[220px] flex items-end transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        style={{ backgroundImage: "url('/assets/bakery.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="relative z-10 w-full p-6 bg-black/40 rounded-b-2xl">
          <span className="font-bold text-lg text-white mb-2 block drop-shadow">Dairy & Bakery</span>
          <p className="text-gray-100 text-base drop-shadow">Fresh dairy products, cheeses, yogurts, freshly baked bread, and pastries.</p>
        </div>
      </div>
      {/* Card 4 */}
      <div
        className="relative group rounded-2xl shadow-xl overflow-hidden border border-[#4CA809]/20 min-h-[220px] flex items-end transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        style={{ backgroundImage: "url('/assets/essentials.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="relative z-10 w-full p-6 bg-black/40 rounded-b-2xl">
          <span className="font-bold text-lg text-white mb-2 block drop-shadow">Pantry Essentials</span>
          <p className="text-gray-100 text-base drop-shadow">Canned goods, grains, oils, condiments, and specialty items.</p>
        </div>
      </div>
      {/* Card 5 */}
      <div
        className="relative group rounded-2xl shadow-xl overflow-hidden border border-[#4CA809]/20 min-h-[220px] flex items-end transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        style={{ backgroundImage: "url('/assets/health.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="relative z-10 w-full p-6 bg-black/40 rounded-b-2xl">
          <span className="font-bold text-lg text-white mb-2 block drop-shadow">Health & Wellness</span>
          <p className="text-gray-100 text-base drop-shadow">Organic and gluten-free products, as well as supplements and health foods.</p>
        </div>
      </div>
      {/* Card 6 */}
      <div
        className="relative group rounded-2xl shadow-xl overflow-hidden border border-[#4CA809]/20 min-h-[220px] flex items-end transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        style={{ backgroundImage: "url('/assets/meat.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="relative z-10 w-full p-6 bg-black/40 rounded-b-2xl">
          <span className="font-bold text-lg text-white mb-2 block drop-shadow">Frozen Foods</span>
          <p className="text-gray-100 text-base drop-shadow">A wide selection of frozen meals, snacks, and vegetables.</p>
        </div>
      </div>
      {/* Card 7 */}
      <div
        className="relative group rounded-2xl shadow-xl overflow-hidden border border-[#4CA809]/20 min-h-[220px] flex items-end transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        style={{ backgroundImage: "url('/assets/beverage.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="relative z-10 w-full p-6 bg-black/40 rounded-b-2xl">
          <span className="font-bold text-lg text-white mb-2 block drop-shadow">Beverages</span>
          <p className="text-gray-100 text-base drop-shadow">A full range of sodas, juices, water, alcoholic beverages, and specialty drinks.</p>
        </div>
      </div>
      {/* Card 8 */}
      <div
        className="relative group rounded-2xl shadow-xl overflow-hidden border border-[#4CA809]/20 min-h-[220px] flex items-end transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        style={{ backgroundImage: "url('/assets/personal.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
        <div className="relative z-10 w-full p-6 bg-black/40 rounded-b-2xl">
          <span className="font-bold text-lg text-white mb-2 block drop-shadow">Household & Personal Care</span>
          <p className="text-gray-100 text-base drop-shadow">Cleaning products, toiletries, and home essentials.</p>
        </div>
      </div>
    </div>
  </div>
</section>
                     {/* Our Core Values Section */}
<section className="w-full py-16 bg-gradient-to-br from-[#4CA809]/5 via-white to-[#4CA809]/10">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4CA809] mb-2 text-center tracking-tight">
      Our Core Values
    </h2>
    <div className="flex justify-center mb-10">
      <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#4CA809] via-[#4CA809]/80 to-[#4CA809]"></span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Quality */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow">
          <span className="text-3xl text-[#4CA809]">🔍</span>
        </div>
        <h3 className="font-bold text-lg text-[#4CA809] mb-2">Quality</h3>
        <p className="text-gray-600 text-center text-base">
          We ensure that every product on our shelves meets the highest quality standards.
        </p>
      </div>
      {/* Customer Focus */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow">
          <span className="text-3xl text-[#4CA809]">😊</span>
        </div>
        <h3 className="font-bold text-lg text-[#4CA809] mb-2">Customer Focus</h3>
        <p className="text-gray-600 text-center text-base">
          We prioritize customer satisfaction and aim to offer an enjoyable shopping experience.
        </p>
      </div>
      {/* Integrity */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow">
          <span className="text-3xl text-[#4CA809]">🤝</span>
        </div>
        <h3 className="font-bold text-lg text-[#4CA809] mb-2">Integrity</h3>
        <p className="text-gray-600 text-center text-base">
          We conduct our business with honesty and transparency.
        </p>
      </div>
      {/* Sustainability */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow">
          <span className="text-3xl text-[#4CA809]">🌱</span>
        </div>
        <h3 className="font-bold text-lg text-[#4CA809] mb-2">Sustainability</h3>
        <p className="text-gray-600 text-center text-base">
          We actively seek to reduce our environmental footprint through sustainable sourcing and waste reduction practices.
        </p>
      </div>
      {/* Community */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow">
          <span className="text-3xl text-[#4CA809]">🏘️</span>
        </div>
        <h3 className="font-bold text-lg text-[#4CA809] mb-2">Community</h3>
        <p className="text-gray-600 text-center text-base">
          We believe in giving back to the communities we serve, through local support and charitable initiatives.
        </p>
      </div>
    </div>
  </div>
</section>
      

{/* Video Section */}
{/* Store Tour / About Video Section */}
<section className="w-full bg-gradient-to-br from-[#4CA809]/5 via-white to-[#4CA809]/10 py-8">
  <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#4CA809] mb-2 text-center">Take a Tour of Our Supermarket</h2>
    <p className="text-[#4CA809] text-center mb-6 max-w-2xl">
      Discover the Lomyad experience! Watch our short video to see our modern aisles, fresh products, and welcoming atmosphere.
    </p>
    <div className="w-full rounded-xl overflow-hidden shadow-lg border border-[#4CA809]/20">
      <video
        src="/assets/video.mp4" // or "/assets/VID_20250704_153533_362.mp4"
        controls
        className="w-full h-[260px] sm:h-[380px] md:h-[480px] object-cover bg-black"
        poster="/assets/home.jpg" // Optional: preview image before play
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>

                     {/* Why Choose Us Section */}
{/* Why Choose Us Section */}
<section className="w-full py-16 bg-gradient-to-br from-[#4CA809]/15 via-white to-[#4CA809]/10">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4CA809] mb-2 text-center tracking-tight">
      Why Choose Us?
    </h2>
    <div className="flex justify-center mb-10">
      <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#4CA809] via-[#4CA809]/80 to-[#4CA809]"></span>
    </div>
    <p className="text-center text-[#4CA809] max-w-2xl text-base sm:text-lg px-2 mb-12">
      Discover what makes Lomyad Supermarket stand out from the rest.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="relative group rounded-2xl shadow-xl overflow-hidden bg-white/70 backdrop-blur-md border border-[#4CA809]/20 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow-lg">
          <span className="text-3xl">💲</span>
        </div>
        <h3 className="font-semibold text-lg text-[#4CA809] mb-2">Competitive Pricing</h3>
        <p className="text-gray-700 text-center">We offer affordable pricing without compromising on quality.</p>
      </div>
      {/* Card 2 */}
      <div className="relative group rounded-2xl shadow-xl overflow-hidden bg-white/70 backdrop-blur-md border border-[#4CA809]/20 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow-lg">
          <span className="text-3xl">📍</span>
        </div>
        <h3 className="font-semibold text-lg text-[#4CA809] mb-2">Convenient Locations</h3>
        <p className="text-gray-700 text-center">With multiple locations across [Region/Area], we make it easy for you to access everything you need.</p>
      </div>
      {/* Card 3 */}
      <div className="relative group rounded-2xl shadow-xl overflow-hidden bg-white/70 backdrop-blur-md border border-[#4CA809]/20 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow-lg">
          <span className="text-3xl">🎁</span>
        </div>
        <h3 className="font-semibold text-lg text-[#4CA809] mb-2">Customer Loyalty Program</h3>
        <p className="text-gray-700 text-center">Earn rewards with every purchase, giving you great discounts and exclusive offers.</p>
      </div>
      {/* Card 4 */}
      <div className="relative group rounded-2xl shadow-xl overflow-hidden bg-white/70 backdrop-blur-md border border-[#4CA809]/20 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow-lg">
          <span className="text-3xl">🌍</span>
        </div>
        <h3 className="font-semibold text-lg text-[#4CA809] mb-2">Sustainability Initiatives</h3>
        <p className="text-gray-700 text-center">We actively reduce waste, recycle, and partner with sustainable suppliers to minimize our environmental impact.</p>
      </div>
      {/* Card 5 (full width on large screens) */}
      <div className="relative group rounded-2xl shadow-xl overflow-hidden bg-white/70 backdrop-blur-md border border-[#4CA809]/20 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl sm:col-span-2">
        <div className="bg-[#4CA809]/10 p-4 rounded-full mb-4 shadow-lg">
          <span className="text-3xl">🌟</span>
        </div>
        <h3 className="font-semibold text-lg text-[#4CA809] mb-2">Exceptional Service</h3>
        <p className="text-gray-700 text-center">Our staff is trained to offer friendly, helpful, and knowledgeable assistance to ensure an enjoyable shopping experience.</p>
      </div>
    </div>
  </div>
</section>

  {/* Client Testimonials Section */}
  <section className="w-full py-16 bg-gradient-to-br from-[#4CA809]/5 via-white to-[#4CA809]/10">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4CA809] mb-2 text-center tracking-tight">
        What Our Customers Say
      </h2>
      <div className="flex justify-center mb-10">
        <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#4CA809] via-[#4CA809]/80 to-[#4CA809]"></span>
      </div>
      <p className="text-center text-[#4CA809] max-w-2xl mx-auto text-base sm:text-lg mb-12">
        Don't just take our word for it. Here's what our valued customers have to say about their shopping experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20 group">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4CA809] to-[#4CA809]/80 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-xl font-bold">ST</span>
          </div>
          <div className="flex text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-4 italic">"Lomyad Supermarket always has the freshest produce and the staff are incredibly friendly. Shopping here is a pleasure!"</p>
          <h3 className="font-bold text-[#4CA809] text-lg">Sara T.</h3>
          <p className="text-[#4CA809] text-sm">Regular Customer</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20 group">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4CA809] to-[#4CA809]/80 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-xl font-bold">MB</span>
          </div>
          <div className="flex text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-4 italic">"Great selection, competitive prices, and a clean environment. I highly recommend Lomyad to everyone in Addis!"</p>
          <h3 className="font-bold text-[#4CA809] text-lg">Michael B.</h3>
          <p className="text-[#4CA809] text-sm">Local Resident</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20 group">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4CA809] to-[#4CA809]/80 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-xl font-bold">HM</span>
          </div>
          <div className="flex text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-4 italic">"I love the variety and the customer service is top-notch. The loyalty program is a great bonus!"</p>
          <h3 className="font-bold text-[#4CA809] text-lg">Helen M.</h3>
          <p className="text-[#4CA809] text-sm">Loyalty Member</p>
        </div>

        {/* Testimonial 4 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20 group">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4CA809] to-[#4CA809]/80 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-xl font-bold">SK</span>
          </div>
          <div className="flex text-yellow-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-4 italic">"Convenient locations and always well-stocked. Lomyad is my go-to supermarket!"</p>
          <h3 className="font-bold text-[#4CA809] text-lg">Samuel K.</h3>
          <p className="text-[#4CA809] text-sm">Frequent Shopper</p>
        </div>
      </div>
    </div>
  </section>

  {/* Our Locations Section */}
  <section className="w-full py-16 bg-gradient-to-br from-[#4CA809]/15 via-white to-[#4CA809]/10">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4CA809] mb-2 text-center tracking-tight">
        Visit Our Locations
      </h2>
      <div className="flex justify-center mb-10">
        <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-[#4CA809] via-[#4CA809]/80 to-[#4CA809]"></span>
      </div>
      <p className="text-center text-[#4CA809] max-w-2xl mx-auto text-base sm:text-lg mb-12">
        Find us at our convenient locations across Addis Ababa. We're here to serve you with quality products and exceptional service.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Store 1 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20 group">
          <div className="relative overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-[#4CA809] to-[#4CA809]/80 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">🛒</div>
                <h3 className="font-bold text-xl">CMC Branch</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl text-[#4CA809] mb-3">Lomyad Supermarket - Main Branch</h3>
            <p className="text-gray-600 mb-4">📍 2RCQ+F9F, Addis Ababa, Ethiopia</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-[#4CA809] rounded-full mr-2"></span>
                Fresh produce daily
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-[#4CA809] rounded-full mr-2"></span>
                Extended hours
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-[#4CA809] rounded-full mr-2"></span>
                Parking available
              </div>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4 border border-[#4CA809]/20">
              <iframe
                src="https://www.google.com/maps?q=2RCQ%2BF9F,+Addis+Ababa&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lomyad Supermarket Main Branch"
                className="w-full h-full"
              ></iframe>
            </div>
            <a 
              href="https://www.google.com/maps?s=web&sca_esv=f7156635f6e9a261&lqi=ChJsb215YWQgc3VwZXJtYXJrZXRIhKqanN2BgIAIWhwQABABGAAYASISbG9teWFkIHN1cGVybWFya2V0kgELc3VwZXJtYXJrZXSqATsQATIfEAEiG5N0MVqWpQIXFZ47fyyXwcsrhwBZTg_zyf91ujIWEAIiEmxvbXlhZCBzdXBlcm1hcmtldA&phdesc=TyRItVlOamk&vet=12ahUKEwicmefa1q-OAxVwnf0HHd8JNqwQ1YkKegQIGxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=et&sa=X&geocode=KTVgyEmhmksWMTIIwpkByX2s&daddr=2RCQ%2BF9F,+Addis+Ababa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full bg-[#4CA809] hover:bg-[#4CA809]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 group-hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Store 2 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-[#4CA809]/20 group">
          <div className="relative overflow-hidden">
            <div className="w-full h-48 bg-gradient-to-br from-[#4CA809]/90 to-[#4CA809]/70 flex items-center justify-center">
              <div className="text-white text-center">
              <div className="text-4xl mb-2">🛒</div>
                <h3 className="font-bold text-xl">Ayat Branch</h3>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl text-[#4CA809] mb-3">Lomyad Supermarket - Ayat Branch</h3>
            <p className="text-gray-600 mb-4">📍 2VGH+57G, A2, Addis Ababa, Ethiopia</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-[#4CA809] rounded-full mr-2"></span>
                Full grocery selection
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-[#4CA809] rounded-full mr-2"></span>
                Friendly staff
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-[#4CA809] rounded-full mr-2"></span>
                Easy access location
              </div>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4 border border-[#4CA809]/20">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.883169012267!2d38.8781876!3d9.0254368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b917d3e60bfe9%3A0xeda01c13adff5e24!2sLomyad%20Supermarket%20%7C%20Ayat%20Branch%20%7C%20%E1%88%8E%E1%88%9A%E1%8B%AB%E1%8B%B5%20%E1%88%B1%E1%8D%90%E1%88%AD%E1%88%9B%E1%88%AD%E1%8A%AC%E1%89%B5%20%7C%20%E1%8A%A0%E1%8B%AB%E1%89%B5!5e0!3m2!1sen!2set!4v1719700000000!5m2!1sen!2set"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Lomyad Supermarket Main Branch"
  className="w-full h-full"
></iframe>
            </div>
            <a 
              href="https://www.google.com/maps?s=web&sca_esv=f7156635f6e9a261&lqi=ChJsb215YWQgc3VwZXJtYXJrZXRIvY6FuMCtgIAIWhwQABABGAAYASISbG9teWFkIHN1cGVybWFya2V0kgELc3VwZXJtYXJrZXSqATsQATIfEAEiG5N0MVqWpQIXFZ47fyyXwcsrhwBZTg_zyf91ujIWEAIiEmxvbXlhZCBzdXBlcm1hcmtldA&phdesc=x64nvjgaBHk&vet=12ahUKEwicmefa1q-OAxVwnf0HHd8JNqwQ1YkKegQIHxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=et&sa=X&geocode=Kem_YD59kUsWMSRe_60THKDt&daddr=2VGH%2B57G,+A2,+Addis+Ababa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full bg-[#4CA809] hover:bg-[#4CA809]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 group-hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
      </div>
    </div>
  );
}
