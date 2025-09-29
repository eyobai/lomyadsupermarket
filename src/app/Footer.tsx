"use client";
import { useState } from "react";
export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | { type: "success" | "error"; text: string }>(null);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    if (loading) return; // guard against double submit
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send");
      setStatus({ type: "success", text: "Message sent successfully! We'll get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      setStatus({ type: "error", text: "Sorry, we couldn't send your message. Please try again later." });
    }
    setLoading(false);
  }
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
              <li>Frozen foods</li>
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

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-3">
              <div>
                <label className="block text-sm mb-1" htmlFor="cf-name">Your Name</label>
                <input
  id="cf-name"
  type="text"
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[#1b1b1b] placeholder-gray-500 focus:outline-none"
  placeholder="Enter your name"
/>

              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="cf-email">Your Email</label>
                <input
                  id="cf-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-[#1b1b1b] placeholder-gray-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               className="w-full rounded-md border border-gray-300 px-3 py-2 text-[#1b1b1b] placeholder-gray-500 focus:outline-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
  type="submit"
  disabled={loading}
  className={`inline-flex items-center justify-center bg-white text-[#4CA809] font-semibold px-4 py-2 rounded-md transition-colors ${
    loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-50"
  }`}
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5 mr-2 text-[#4CA809]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      Sending...
    </>
  ) : (
    "Send Message"
  )}
</button>

              {status && (
                <p className={`${status.type === "success" ? "text-white" : "text-red-200"} text-sm`}>
                  {status.text}
                </p>
              )}
              <p className="text-xs text-green-100/80">The message will be sent to info@lomyadsupermarket.com</p>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white-600 mt-8 pt-8 text-center">
          <p>&copy; 2024 Lomyad Supermarket. All rights reserved.</p>
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-6 right-6 z-[60]">
          <div className="flex items-center gap-3 rounded-lg bg-white/95 text-[#1b1b1b] shadow-xl px-4 py-3 ring-1 ring-black/5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4CA809] text-white text-sm">✓</span>
            <div className="text-sm">
              <p className="font-semibold text-[#2a2a2a]">Message sent</p>
              <p className="text-[#3a3a3a]">We'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}