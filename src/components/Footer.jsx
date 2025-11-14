export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a className="hover:text-black" href="#">Find a Store</a></li>
            <li><a className="hover:text-black" href="#">Become a Member</a></li>
            <li><a className="hover:text-black" href="#">Send Us Feedback</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a className="hover:text-black" href="#">Order Status</a></li>
            <li><a className="hover:text-black" href="#">Delivery</a></li>
            <li><a className="hover:text-black" href="#">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a className="hover:text-black" href="#">News</a></li>
            <li><a className="hover:text-black" href="#">Careers</a></li>
            <li><a className="hover:text-black" href="#">Investors</a></li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="font-semibold mb-3">Join Our Newsletter</h4>
          <p className="text-gray-600">Be the first to know about new drops and exclusive offers.</p>
          <form className="mt-3 flex max-w-md">
            <input placeholder="Email address" className="flex-1 border border-gray-200 rounded-l-lg px-3 py-2 outline-none" />
            <button className="bg-black text-white px-4 rounded-r-lg">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">© 2025 Brand Inc. All rights reserved.</div>
    </footer>
  );
}
