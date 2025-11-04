import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-rose-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Crafted Coffee, Cozy Vibes
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Welcome to Roast & Bloom — your neighborhood spot for specialty brews,
              fresh pastries, and a warm place to slow down.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="inline-flex items-center rounded-md bg-amber-600 text-white px-6 py-3 font-medium shadow hover:bg-amber-700"
              >
                Explore Menu
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
              >
                Find Us
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="text-amber-500" size={18} />
                <span>4.9 on Local Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Open Daily 7am–7pm</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100 blur-3xl opacity-40 rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1280&auto=format&fit=crop"
              alt="Latte art in a ceramic cup"
              className="relative w-full h-[360px] md:h-[480px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
