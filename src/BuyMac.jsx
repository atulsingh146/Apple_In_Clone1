const BuyMac = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <video
        src="src/assets/macmini.mp4" 
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 md:py-24 min-h-screen bg-black/50 text-white">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Buy Mac <br /> or iPad <br /> for college
          </h1>
          <p className="text-lg font-medium">
            With education savings*
          </p>
          <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold leading-snug">
            Choose <br /> AirPods or <br /> an eligible <br /> accessory
          </h2>
          <div className="flex justify-center mt-4">
            <button className="px-6 py-2 text-bblue font-semibold rounded-full border border-bblue bg-white hover:bg-gray-100 transition">
              Shop
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BuyMac;
