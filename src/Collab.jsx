import watchLogo from "./assets/watch_logo.png";
import watchImg from "./assets/watch.png";
import airImg from "./assets/air.png";
import tabsImg from "./assets/tabs.png";
import mobImg from "./assets/mob.png";
import tradeInImg from "./assets/tradein.png";
import handImg from "./assets/hand.png";

const Collab = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-1">
        <div className="min-h-screen flex flex-col items-center text-center p-6 space-y-2 bg-customGrey">
          <img src={watchLogo} alt="Apple Watch logo" />
          <h2 className="text-xl text-gray-700">Thinstant classic.</h2>
          <div className="flex justify-center gap-4">
            <button className="px-5 py-2 bg-bblue hover:bg-blue-600 text-white rounded-3xl">
              Learn more
            </button>
            <button className="px-5 py-2 text-bblue rounded-3xl border border-bblue hover:bg-bblue hover:text-white">
              Buy
            </button>
          </div>
          <div className="w-[calc(100%+48px)] -mx-6 mt-6 aspect-video">
            <img src={watchImg} alt="Apple Watch" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-1">
        <div className="min-h-screen flex flex-col items-center text-center p-6 space-y-2 bg-custom-gradient">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
            iPad <img src={airImg} alt="Air" />
          </h1>
          <h2 className="text-xl text-gray-700">Now supercharged by the M3 chip.</h2>
          <div className="flex justify-center gap-4">
            <button className="px-5 py-2 bg-bblue hover:bg-blue-600 text-white rounded-3xl">
              Learn more
            </button>
            <button className="px-5 py-2 text-bblue rounded-3xl border border-bblue hover:bg-bblue hover:text-white">
              Buy
            </button>
          </div>
          <img src={tabsImg} alt="iPad tabs" />
          <h3 className="font-bold  text-lg  text-gray-600 bg-gradient-to-r from-[#148BF7] via-[#BB62FC] to-[#F3493F] bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </h3>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-1">
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('https://static.digit.in/Untitled-design-134.jpg')",
          }}
        >
          <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-2 justify-end min-h-screen text-white">
            <div className="flex justify-center gap-4">
              <button className="px-5 py-2 bg-white text-black rounded-3xl">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-1">
        <div className="min-h-screen flex flex-col items-center text-center p-6 space-y-2 bg-black">
          <h1 className="text-4xl font-semibold text-white">iPad Pro</h1>
          <h2 className="text-xl text-white px-2">unbelievably thin. Incredibly powerful.</h2>
          <div className="flex justify-center gap-4">
            <button className="px-5 py-2 bg-bblue hover:bg-blue-600 text-white rounded-3xl">
              Learn more
            </button>
            <button className="px-5 py-2 text-bblue rounded-3xl border border-bblue hover:bg-bblue hover:text-white">
              Buy
            </button>
          </div>
          <img src={mobImg} alt="iPad Pro mobile" />
          <h3 className="font-bold text-lg  text-gray-600 bg-gradient-to-r from-[#148BF7] via-[#BB62FC] to-[#F3493F] bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </h3>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-1">
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.apple.com/v/airpods/x/images/overview/hero__gb4d3fd8jnu6_large.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-2 justify-end min-h-screen text-white">
            <h1 className="text-4xl font-bold">AirPods 4</h1>
            <h2 className="text-xl">
              Iconic. Now supersonic. Available with Active Noise Cancellation.
            </h2>
            <div className="flex justify-center gap-4">
              <button className="px-5 py-2 bg-bblue hover:bg-blue-600 text-white rounded-3xl">
                Learn more
              </button>
              <button className="px-5 py-2 text-bblue rounded-3xl border border-bblue hover:bg-bblue hover:text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-1">
        <div className="min-h-screen flex flex-col items-center text-center p-6 space-y-2 bg-customGrey">
          <h1 className="text-4xl">
            <img src={tradeInImg} alt="Trade-in" />
          </h1>
          <h2 className="text-xl text-gray-700">Upgrade and save. It’s that easy.</h2>
          <div className="flex justify-center gap-4">
            <button className="px-5 py-2 bg-bblue hover:bg-blue-600 text-white rounded-3xl">
              Get your estimate
            </button>
          </div>
          <div className="-mx-6 mt-6 aspect-video">
            <img src={handImg} alt="Hand" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collab;
