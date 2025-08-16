import './App.css';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-10 px-4 py-1 text-sm font-light bg-white/5">
        <div className="h-6 w-6">
          <img
            className="object-contain w-full h-full"
            src="src/assets/logo.png"
            alt="Logo"
          />
        </div>
        {[
          'Store',
          'Mac',
          'iPad',
          'iPhone',
          'Watch',
          'AirPods',
          'TV & Home',
          'Entertainment',
          'Accessories',
          'Support',
        ].map((item) => (
          <span key={item} className="cursor-pointer hover:text-gray-700 font-bold">
            {item}
          </span>
        ))}
        <div className="flex items-center gap-4">
          <img
            className="h-5 w-5 object-contain"
            src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png"
            alt="Search"
          />
          <img
            className="h-5 w-5 object-contain"
            src="https://cdn-icons-png.flaticon.com/128/17137/17137522.png"
            alt="Cart"
          />
        </div>
      </div>
      <div className="bg-white py-3 flex justify-center items-center text-center text-sm mt-12">
        <p>
          Get up to 6 months of No Cost EMI◊ plus up to ₹10,000 instant cashback‡ on selected products with eligible cards.{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Shop <span>&gt;</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Header;
