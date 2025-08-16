import { useState, useRef, useCallback } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { MenuData } from "./MenuData";

const MENU_ITEMS = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const searchQuickLinks = [
  "Buy MacBook",
  "Buy iPhone 16",
  "Get Store",
  "Nearby Store",
];

const cartLinks = [
  "My Profile",
  "Orders",
  "Your Saves",
  "Accounts",
  "Sign In",
];

const CLEAR_TIMEOUTS = (showTimeout, hideTimeout) => {
  clearTimeout(showTimeout.current);
  clearTimeout(hideTimeout.current);
};

const DropdownSection = ({ title, links }) => (
  <div className="flex flex-col gap-2 min-w-[200px]">
    <h3 className="font-semibold mb-2">{title}</h3>
    {links.map((link) => (
      <a key={link} href="#" className="hover:underline text-gray-700">
        {link}
      </a>
    ))}
  </div>
);

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  // visibleDropdown: 'menu', 'search', 'cart', or null
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const showTimeout = useRef(null);
  const hideTimeout = useRef(null);

  // Clear all timers
  const clearAllTimeouts = useCallback(() => {
    clearTimeout(showTimeout.current);
    clearTimeout(hideTimeout.current);
  }, []);

  const handleMouseEnter = useCallback(
    (item) => {
      clearAllTimeouts();
      setVisibleDropdown(null);
      showTimeout.current = setTimeout(() => {
        setActiveMenu(item);
        setVisibleDropdown("menu");
      }, 100);
    },
    [clearAllTimeouts]
  );

  const handleMouseLeaveMenu = useCallback(() => {
    clearTimeout(showTimeout.current);
    hideTimeout.current = setTimeout(() => {
      setVisibleDropdown(null);
      setTimeout(() => setActiveMenu(null), 300);
    }, 100);
  }, []);

  // Common handler for search and cart clicks
  const handleIconClick = useCallback(
    (type) => {
      clearAllTimeouts();
      setActiveMenu(null);
      setVisibleDropdown(type);
    },
    [clearAllTimeouts]
  );

  const handleMouseLeaveDropdown = useCallback(() => {
    hideTimeout.current = setTimeout(() => {
      setVisibleDropdown(null);
    }, 200);
  }, []);

  const handleMouseEnterDropdown = useCallback(() => {
    clearTimeout(hideTimeout.current);
  }, []);

  const isVisible = visibleDropdown !== null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-10 px-4 py-2 text-sm font-light ${
          isVisible ? "bg-grayCustom" : "bg-white/5"
        }`}
      >
        <div className="h-6 w-6">
          <img className="object-contain w-full h-full" src={logo} alt="Logo" />
        </div>
        {MENU_ITEMS.map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:text-gray-700 font-bold"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={() => clearTimeout(showTimeout.current)}
          >
            {item}
          </span>
        ))}
        <div className="flex items-center gap-4">
          <img
            className="h-5 w-5 object-contain cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/128/5636/5636698.png"
            alt="Search"
            onClick={() => handleIconClick("search")}
          />
          <img
            className="h-5 w-5 object-contain cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/128/17137/17137522.png"
            alt="Cart"
            onClick={() => handleIconClick("cart")}
          />
        </div>
      </div>

      <div className="bg-white py-3 flex justify-center items-center text-center text-sm mt-12">
        <p>
          Get up to 6 months of No Cost EMI◊ plus up to ₹10,000 instant cashback‡
          on selected products with eligible cards.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Shop <span>&gt;</span>
          </a>
        </p>
      </div>

      {/* BLUR BACKGROUND */}
      {isVisible && <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40" />}

      {/* DROPDOWN MENU */}
      {visibleDropdown === "menu" && activeMenu && MenuData[activeMenu] && (
        <div
          className={`fixed top-[38px] left-0 w-full h-[70vh] z-50 overflow-auto transition-transform transition-opacity duration-300 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100 bg-grayCustom"
              : "-translate-y-5 opacity-0 pointer-events-none bg-grayCustom"
          }`}
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveMenu}
        >
          <div className="flex ml-36 mt-8 gap-10 px-3 py-2 max-w-full">
            <DropdownSection title={MenuData[activeMenu].title} links={MenuData[activeMenu].items} />
            {MenuData[activeMenu].quickLinks && (
              <DropdownSection title="Quick Links" links={MenuData[activeMenu].quickLinks} />
            )}
            {MenuData[activeMenu].specialStores && (
              <DropdownSection title="Shop Special Stores" links={MenuData[activeMenu].specialStores} />
            )}
          </div>
        </div>
      )}

      {/* SEARCH DROPDOWN */}
      {visibleDropdown === "search" && (
        <div
          className="fixed top-[38px] left-0 w-full h-[60vh] z-50 bg-grayCustom p-8 overflow-auto transition-opacity duration-300 ease-in-out"
          onMouseLeave={handleMouseLeaveDropdown}
          onMouseEnter={handleMouseEnterDropdown}
        >
          <div className="max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search Apple Products"
              className="w-full p-3 rounded-3xl border border-gray-300 mb-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="list-none space-y-2 text-gray-800">
                {searchQuickLinks.map((link) => (
                  <li key={link} className="flex items-center">
                    <span className="mr-2 font-bold">{'->'}</span>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* CART DROPDOWN */}
      {visibleDropdown === "cart" && (
        <div
          className="fixed top-[38px] left-0 w-full h-[60vh] z-50 bg-grayCustom p-8 overflow-auto transition-opacity duration-300 ease-in-out"
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <div className="flex flex-col ml-36 mt-8 gap-2 px-3 py-2 max-w-full">
            <p className="text-lg font-semibold mb-3">Your bag is empty.</p>
            <p className="mb-4 text-gray-700">
              <a href="#" className="text-blue-600">
                Sign in
              </a>{" "}
              to see any item added.
            </p>
            <ul className="list-none space-y-2 text-gray-800">
              {cartLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
