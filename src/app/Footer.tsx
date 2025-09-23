export default function Footer() {
  return (
    <footer id="contact" className="bg-[#4CA809] text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Menu Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-200 transition-colors">Home</a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-green-200 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="/aboutus" className="hover:text-green-200 transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-200 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Products & Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products & Services</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Fresh Produce</li>
              <li>Meat & Seafood</li>
              <li>Dairy & Bakery</li>
              <li>Pantry Essentials</li>
              <li>Health & Wellness</li>
              <li>Frozen Foods</li>
              <li>Beverages</li>
              <li>Household & Personal Care</li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+251985890987" className="hover:text-green-200 transition-colors">
                  +251 985 890 987
                </a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto: lomyadsupermarket@gmail.com" className="hover:text-green-200 transition-colors">
                lomyadsupermarket@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
                <a 
                  href="https://web.facebook.com/p/Lomyad-Supermarket-and-Daily-Fresh-100057578584176/?_rdc=1&_rdr#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-200 transition-colors"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white-600 mt-8 pt-8 text-center">
          <p>&copy; 2024 Lomyad Supermarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 