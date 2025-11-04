export default function Menu() {
  const items = [
    {
      name: 'House Latte',
      desc: 'Velvety espresso with steamed milk and a hint of vanilla.',
      price: '$4.50',
      image:
        'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=1200&auto=format&fit=crop',
      tag: 'Best Seller',
    },
    {
      name: 'Cold Brew',
      desc: 'Slow steeped for 16 hours. Smooth, bold, and refreshing.',
      price: '$4.00',
      image:
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop',
      tag: 'Smooth',
    },
    {
      name: 'Matcha Latte',
      desc: 'Ceremonial grade matcha whisked to creamy perfection.',
      price: '$5.00',
      image:
        'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop',
      tag: 'New',
    },
    {
      name: 'Croissant',
      desc: 'Buttery, flaky, baked fresh every morning.',
      price: '$3.25',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop',
      tag: 'Bakery',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Menu Highlights</h2>
            <p className="mt-2 text-gray-600">A few of our favorites. Full menu in-store.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Ask about seasonal specials
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.name} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-full object-cover"
                />
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow">
                  {item.tag}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <span className="font-medium text-amber-700">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.desc}</p>
                <button className="mt-4 w-full rounded-md bg-gray-900 text-white py-2 text-sm font-medium hover:bg-gray-800">
                  Add to order
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
