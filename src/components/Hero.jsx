export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1974&auto=format&fit=crop"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-xl text-white">
          <p className="uppercase tracking-widest text-sm">New & Featured</p>
          <h1 className="mt-3 text-5xl sm:text-6xl font-black leading-tight">
            Elevate Your Every Move
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Performance-engineered footwear and apparel designed for athletes and everyday movers.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold hover:scale-[1.02] transition">Shop Now</a>
            <a href="#new" className="inline-flex items-center justify-center rounded-full bg-black/40 border border-white/30 text-white px-6 py-3 font-semibold hover:bg-black/60 transition">Explore</a>
          </div>
        </div>
      </div>
    </section>
  );
}
