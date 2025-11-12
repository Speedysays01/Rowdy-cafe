import { useState } from "react";
import { X, Menu } from "lucide-react";
import rowdyman from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Menu", href: "#about" },
    { name: "Founder's message", href: "#founder" },
    { name: "Franchise model", href: "#minds-together" },
    { name: "Social Media", href: "#services" },
    { name: "Contact us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black  border-b border-yellow-500/30 z-50">
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <h1 className="text-2xl font-extrabold text-yellow-400 tracking-widest font-mono select-none">
            ROWDY CAFE
          </h1> */}

          <img src={rowdyman} alt="Rowdyman" className="w-[3rem] h-auto" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex justify-around w-200 ml-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-semibold hover:text-yellow-300 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-99 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative z-100 h-full w-64 bg-black text-yellow-400 p-6 shadow-xl border-r border-yellow-500/40">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6 text-yellow-400" />
            </button>

            <div className="mt-12 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
