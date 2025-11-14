export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {product.in_stock ? (
          <span className="absolute top-3 left-3 text-xs bg-white/90 backdrop-blur px-2 py-1 rounded-full">In Stock</span>
        ) : (
          <span className="absolute top-3 left-3 text-xs bg-red-500 text-white px-2 py-1 rounded-full">Sold Out</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{product.title}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
