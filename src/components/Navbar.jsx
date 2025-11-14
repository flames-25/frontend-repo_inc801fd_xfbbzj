import { ShoppingBag, Search, User } from "lucide-react";

export default function Navbar({ onCartOpen }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-extrabold tracking-tighter">N</div>
            <span className="sr-only">Brand</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a className="hover:text-black transition-colors" href="#men">Men</a>
            <a className="hover:text-black transition-colors" href="#women">Women</a>
            <a className="hover:text-black transition-colors" href="#kids">Kids</a>
            <a className="hover:text-black transition-colors" href="#sale">Sale</a>
            <a className="hover:text-black transition-colors" href="#new">New & Featured</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              placeholder="Search"
              className="bg-transparent text-sm outline-none placeholder:text-gray-500 w-40"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button onClick={onCartOpen} className="relative p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
