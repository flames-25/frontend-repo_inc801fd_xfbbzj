import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const url = `${API_BASE}/api/products${filter !== "all" ? `?category=${filter}` : ""}`;
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [filter]);

  const addToCart = (p) => {
    setCart((prev) => {
      const existing = prev.find((i) => i._id === p._id);
      if (existing) {
        return prev.map((i) => (i._id === p._id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  };

  const total = useMemo(() => cart.reduce((s, i) => s + i.price * i.qty, 0), [cart]);

  const checkout = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart.map((i) => ({ product_id: i._id, quantity: i.qty })), total }),
      });
      const data = await res.json();
      alert(`Order ${data.id ? "created" : "failed"}. Total: $${data.total ?? 0}`);
      if (data.id) setCart([]);
    } catch (e) {
      alert("Checkout failed");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main className="pt-16">
        <Hero />

        <section id="shop" className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Shop Featured</h2>
            <div className="flex items-center gap-2 text-sm">
              {[
                { key: "all", label: "All" },
                { key: "running", label: "Running" },
                { key: "lifestyle", label: "Lifestyle" },
                { key: "basketball", label: "Basketball" },
                { key: "trail", label: "Trail" },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-3 py-1.5 rounded-full border text-gray-700 hover:text-black transition ${
                    filter === f.key ? "bg-black text-white border-black" : "border-gray-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="py-16 text-center text-gray-500">Loading products…</div>
          ) : error ? (
            <div className="py-16 text-center text-red-600">{error}</div>
          ) : (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p) => (
                <ProductCard key={p._id} product={p} onAdd={addToCart} />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Cart drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Your Cart</h3>
              <button onClick={() => setCartOpen(false)} className="text-sm">Close</button>
            </div>
            {cart.length === 0 ? (
              <p className="mt-8 text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="mt-4 space-y-4">
                {cart.map((item) => (
                  <div key={item._id} className="flex gap-3">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" />
                    <div className="flex-1">
                      <div className="font-medium line-clamp-1">{item.title}</div>
                      <div className="text-sm text-gray-500">Qty: {item.qty}</div>
                    </div>
                    <div className="font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                  </div>
                ))}
                <div className="pt-4 border-t flex items-center justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>
                <button onClick={checkout} className="w-full rounded-full bg-black text-white py-3 font-semibold hover:bg-gray-800">Checkout</button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
