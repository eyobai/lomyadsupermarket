import Navbar from "../Navbar";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-4">
        <section className="bg-white rounded-2xl shadow-lg p-10 mb-12 border-t-8 border-green-600 animate-fade-in">
          <h1 className="text-4xl font-extrabold text-green-800 mb-4 text-center tracking-tight drop-shadow-sm">About Us</h1>
          <div className="w-16 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
            Lomyad supermarket is a leading supermarket chain offering a wide variety of high-quality food, fresh produce, and everyday essentials. Established in 2012, we are dedicated to providing our customers with the best shopping experience, combining convenience, affordability, and exceptional customer service.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
            Our stores are designed to offer a comfortable and efficient shopping environment, ensuring our customers can find everything they need under one roof. We are committed to sourcing the freshest products, supporting local suppliers, and maintaining sustainable business practices to contribute to a healthier planet.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            With multiple locations across <span className="font-semibold text-green-700">Addis Ababa</span>, we aim to provide value to families, individuals, and communities by making quality groceries accessible to everyone.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-md p-8 flex flex-col items-center border-l-4 border-green-500 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
              <span className="inline-block text-3xl">🎯</span> Our Mission
            </h2>
            <p className="text-gray-700 text-center">
              At Lomyad Supermarket, our mission is to enhance the lives of our customers by providing a diverse range of quality products at competitive prices, delivered with outstanding service. We strive to be the supermarket of choice in our communities, offering both convenience and a personalized shopping experience.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl shadow-md p-8 flex flex-col items-center border-l-4 border-green-500 animate-fade-in-up delay-100">
            <h2 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
              <span className="inline-block text-3xl">🌟</span> Our Vision
            </h2>
            <p className="text-gray-700 text-center">
              To be the go-to destination for all grocery needs, known for innovation, quality, and community engagement. We envision expanding our presence both locally and regionally, while continuing to evolve with the changing needs of our customers.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 