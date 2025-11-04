import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Visit Us</h2>
            <p className="mt-3 text-gray-600">
              We’re right on the corner of Maple & 3rd. Come by for a cup or order ahead for quick pickup.
            </p>

            <dl className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-600 mt-1" />
                <div>
                  <dt className="font-medium text-gray-900">Address</dt>
                  <dd className="text-gray-600">123 Maple Street, Springfield</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-amber-600 mt-1" />
                <div>
                  <dt className="font-medium text-gray-900">Phone</dt>
                  <dd className="text-gray-600">(555) 123-4567</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-amber-600 mt-1" />
                <div>
                  <dt className="font-medium text-gray-900">Email</dt>
                  <dd className="text-gray-600">hello@roastandbloom.cafe</dd>
                </div>
              </div>
            </dl>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="sm:col-span-2 rounded-md border-gray-300 focus:border-amber-600 focus:ring-amber-600"
                required
              />
              <button
                type="submit"
                className="sm:col-span-2 inline-flex justify-center rounded-md bg-amber-600 px-4 py-2 font-medium text-white hover:bg-amber-700"
              >
                Send Message
              </button>
              <p className="sm:col-span-2 text-xs text-gray-500">
                This is a demo form. For real orders, please call or visit in-store.
              </p>
            </form>

            <p className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} Roast & Bloom Coffee. All rights reserved.</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <img
              src="https://images.unsplash.com/photo-1507138451611-3001135909f3?q=80&w=1400&auto=format&fit=crop"
              alt="Coffee shop interior with warm lighting"
              className="w-full h-80 md:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
