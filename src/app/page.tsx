import Image from "next/image";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1 w-full">
        <div style={{ position: 'relative', background: '#4CA809' }}>
          <Navbar />
          <ImageSlider />
         
        </div>
         {/* Core Values Section */}
          <section className="w-full max-w-5xl mx-auto px-4 pb-12">
            <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-6">
              {/* Row 1: 3 columns */}
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-md p-8 flex flex-col items-center border-l-4 border-green-500 animate-fade-in-up">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🔍</span>
                  <span className="font-bold text-lg text-green-700">Quality</span>
                </div>
                <p className="text-gray-700">We ensure that every product on our shelves meets the highest quality standards.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">😊</span>
                  <span className="font-bold text-lg text-green-700">Customer Focus</span>
                </div>
                <p className="text-gray-700">We prioritize customer satisfaction and aim to offer an enjoyable shopping experience.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start  bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-md p-8 flex flex-col items-center border-l-4 border-green-500 animate-fade-in-up">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🤝</span>
                  <span className="font-bold text-lg text-green-700">Integrity</span>
                </div>
                <p className="text-gray-700">We conduct our business with honesty and transparency.</p>
              </div>
              {/* Row 2: 2 columns, center them by leaving the first cell empty on mobile */}
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start sm:col-span-1">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🌱</span>
                  <span className="font-bold text-lg text-green-700">Sustainability</span>
                </div>
                <p className="text-gray-700">We actively seek to reduce our environmental footprint through sustainable sourcing and waste reduction practices.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-start sm:col-span-1 bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-md p-8 flex flex-col items-center border-l-4 border-green-500 animate-fade-in-up">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🏘️</span>
                  <span className="font-bold text-lg text-green-700">Community</span>
                </div>
                <p className="text-gray-700">We believe in giving back to the communities we serve, through local support and charitable initiatives.</p>
              </div>
            </div>
          </section>
          {/* Products & Services Section */}
          <section className="w-full max-w-5xl mx-auto px-4 pb-12">
          <div
  className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen rounded-xl shadow-md px-6 py-6 mb-8 flex flex-col items-center"
  style={{ backgroundColor: "#4CA809", maxWidth: "100vw" }}
>
  <h2 className="text-2xl font-bold text-white mb-2 text-center">Our Products & Services</h2>
  <div className="w-12 h-[2px] bg-gray-700 mb-3"></div>
  <p className="text-center text-white">
    At Lomyad Supermarket, we offer a wide range of products to cater to the needs of all our customers, including:
  </p>
</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Fresh Produce */}
              <div className="relative rounded-lg shadow overflow-hidden group min-h-[180px] flex items-end" style={{backgroundImage: 'url(/file.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80"></div>
                <div className="relative z-10 p-6 w-full">
                  <span className="font-bold text-lg text-white mb-2 block">Fresh Produce</span>
                  <p className="text-gray-100">Locally sourced fruits, vegetables, and herbs.</p>
                </div>
              </div>
              {/* Meat & Seafood */}
              <div className="relative rounded-lg shadow overflow-hidden group min-h-[180px] flex items-end" style={{backgroundImage: 'url(/window.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80"></div>
                <div className="relative z-10 p-6 w-full">
                  <span className="font-bold text-lg text-white mb-2 block">Meat & Seafood</span>
                  <p className="text-gray-100">A variety of fresh, frozen, and organic meats and seafood options.</p>
                </div>
              </div>
              {/* Dairy & Bakery */}
              <div className="relative rounded-lg shadow overflow-hidden group min-h-[180px] flex items-end" style={{backgroundImage: 'url(/globe.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80"></div>
                <div className="relative z-10 p-6 w-full">
                  <span className="font-bold text-lg text-white mb-2 block">Dairy & Bakery</span>
                  <p className="text-gray-100">Fresh dairy products, cheeses, yogurts, freshly baked bread, and pastries.</p>
                </div>
              </div>
              {/* Pantry Essentials */}
              <div className="relative rounded-lg shadow overflow-hidden group min-h-[180px] flex items-end" style={{backgroundImage: 'url(/vercel.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80"></div>
                <div className="relative z-10 p-6 w-full">
                  <span className="font-bold text-lg text-white mb-2 block">Pantry Essentials</span>
                  <p className="text-gray-100">Canned goods, grains, oils, condiments, and specialty items.</p>
                </div>
              </div>
              {/* Health & Wellness */}
              <div className="relative rounded-lg shadow overflow-hidden group min-h-[180px] flex items-end" style={{backgroundImage: 'url(/next.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80"></div>
                <div className="relative z-10 p-6 w-full">
                  <span className="font-bold text-lg text-white mb-2 block">Health & Wellness</span>
                  <p className="text-gray-100">Organic and gluten-free products, as well as supplements and health foods.</p>
                </div>
              </div>
              {/* Frozen Foods */}
              <div className="relative rounded-lg shadow overflow-hidden group min-h-[180px] flex items-end" style={{backgroundImage: 'url(/file.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80"></div>
                <div className="relative z-10 p-6 w-full">
                  <span className="font-bold text-lg text-white mb-2 block">Frozen Foods</span>
                  <p className="text-gray-100">A wide selection of frozen meals, snacks, and vegetables.</p>
                </div>
              </div>
              {/* Beverages */}
              <div className="relative rounded-lg shadow overflow-hidden group min-h-[180px] flex items-end" style={{backgroundImage: 'url(/window.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80"></div>
                <div className="relative z-10 p-6 w-full">
                  <span className="font-bold text-lg text-white mb-2 block">Beverages</span>
                  <p className="text-gray-100">A full range of sodas, juices, water, alcoholic beverages, and specialty drinks.</p>
                </div>
              </div>
              {/* Household & Personal Care */}
              <div className="relative rounded-lg shadow overflow-hidden group min-h-[180px] flex items-end" style={{backgroundImage: 'url(/globe.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80"></div>
                <div className="relative z-10 p-6 w-full">
                  <span className="font-bold text-lg text-white mb-2 block">Household & Personal Care</span>
                  <p className="text-gray-100">Cleaning products, toiletries, and home essentials.</p>
                </div>
              </div>
              {/* Empty cell for symmetry */}
              <div className=""></div>
            </div>
          </section>

          {/* Why Choose Us Section */}
<section className="w-full max-w-5xl mx-auto px-4 pb-16">
<div
  className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen rounded-xl shadow-md px-9 py-6 mb-8 flex flex-col items-center bg-gradient-to-r from-green-600 via-green-500 to-green-700"
  style={{ maxWidth: "100vw" }}
>
  <h2 className="text-2xl font-bold text-white mb-2 text-center">Why Choose Us?</h2>
  <div className="w-12 h-[2px] bg-gray-100 opacity-50 mb-3"></div>
  <p className="text-center text-white max-w-2xl">
    Discover what makes Lomyad Supermarket stand out from the rest.
  </p>
</div>

 

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start gap-4">
      <span className="text-green-600 text-3xl">💲</span>
      <div>
        <h3 className="font-semibold text-lg text-green-800">Competitive Pricing</h3>
        <p className="text-gray-700">We offer affordable pricing without compromising on quality.</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start gap-4">
      <span className="text-green-600 text-3xl">📍</span>
      <div>
        <h3 className="font-semibold text-lg text-green-800">Convenient Locations</h3>
        <p className="text-gray-700">With multiple locations across [Region/Area], we make it easy for you to access everything you need.</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start gap-4">
      <span className="text-green-600 text-3xl">🎁</span>
      <div>
        <h3 className="font-semibold text-lg text-green-800">Customer Loyalty Program</h3>
        <p className="text-gray-700">Earn rewards with every purchase, giving you great discounts and exclusive offers.</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start gap-4">
      <span className="text-green-600 text-3xl">🌍</span>
      <div>
        <h3 className="font-semibold text-lg text-green-800">Sustainability Initiatives</h3>
        <p className="text-gray-700">We actively reduce waste, recycle, and partner with sustainable suppliers to minimize our environmental impact.</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start gap-4 sm:col-span-2">
      <span className="text-green-600 text-3xl">🌟</span>
      <div>
        <h3 className="font-semibold text-lg text-green-800">Exceptional Service</h3>
        <p className="text-gray-700">Our staff is trained to offer friendly, helpful, and knowledgeable assistance to ensure an enjoyable shopping experience.</p>
      </div>
    </div>
  </div>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
    {/* Store 1 */}
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      <h3 className="font-semibold text-lg text-green-800 mb-2">Lomyad Supermarket - 2RCQ+F9F, Addis Ababa</h3>
      <div className="w-full aspect-video rounded-lg overflow-hidden mb-2 border border-green-200">
        <iframe
          src="https://www.google.com/maps?q=2RCQ%2BF9F,+Addis+Ababa&output=embed"
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lomyad Supermarket 1"
        ></iframe>
      </div>
      <a href="https://www.google.com/maps?s=web&sca_esv=f7156635f6e9a261&lqi=ChJsb215YWQgc3VwZXJtYXJrZXRIhKqanN2BgIAIWhwQABABGAAYASISbG9teWFkIHN1cGVybWFya2V0kgELc3VwZXJtYXJrZXSqATsQATIfEAEiG5N0MVqWpQIXFZ47fyyXwcsrhwBZTg_zyf91ujIWEAIiEmxvbXlhZCBzdXBlcm1hcmtldA&phdesc=TyRItVlOamk&vet=12ahUKEwicmefa1q-OAxVwnf0HHd8JNqwQ1YkKegQIGxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=et&sa=X&geocode=KTVgyEmhmksWMTIIwpkByX2s&daddr=2RCQ%2BF9F,+Addis+Ababa" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm">View on Google Maps</a>
    </div>
    {/* Store 2 */}
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      <h3 className="font-semibold text-lg text-green-800 mb-2">Lomyad Supermarket - 2VGH+57G, A2, Addis Ababa</h3>
      <div className="w-full aspect-video rounded-lg overflow-hidden mb-2 border border-green-200">
        <iframe
          src="https://www.google.com/maps?q=2VGH%2B57G,+A2,+Addis+Ababa&output=embed"
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lomyad Supermarket 2"
        ></iframe>
      </div>
      <a href="https://www.google.com/maps?s=web&sca_esv=f7156635f6e9a261&lqi=ChJsb215YWQgc3VwZXJtYXJrZXRIvY6FuMCtgIAIWhwQABABGAAYASISbG9teWFkIHN1cGVybWFya2V0kgELc3VwZXJtYXJrZXSqATsQATIfEAEiG5N0MVqWpQIXFZ47fyyXwcsrhwBZTg_zyf91ujIWEAIiEmxvbXlhZCBzdXBlcm1hcmtldA&phdesc=x64nvjgaBHk&vet=12ahUKEwicmefa1q-OAxVwnf0HHd8JNqwQ1YkKegQIHxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=et&sa=X&geocode=Kem_YD59kUsWMSRe_60THKDt&daddr=2VGH%2B57G,+A2,+Addis+Ababa" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm">View on Google Maps</a>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
