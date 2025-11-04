import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Story</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At Roast & Bloom, we source beans from small farms and roast in tiny batches
              to bring out their unique character. Every cup is crafted by baristas who
              love the ritual as much as the result.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
              <li>Ethically sourced beans</li>
              <li>Daily baked pastries</li>
              <li>Plant-based milks available</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1280&auto=format&fit=crop"
              alt="Pour over coffee setup"
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <Menu />

      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
