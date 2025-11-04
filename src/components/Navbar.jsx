import { useState } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
              <Coffee size={20} />
            </div>
            <span className="font-semibold tracking-tight text-gray-800">Roast & Bloom</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-amber-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-amber-700 transition-colors"
            >
              Order Ahead
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 bg-amber-600 text-white text-center"
            >
              Order Ahead
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
