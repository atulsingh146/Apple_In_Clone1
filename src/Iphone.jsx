const Iphone = () => {
  return (
    <div className="relative bg-customGrey min-h-screen flex flex-col items-center text-center px-4">
      <div className="pt-10 pb-40 space-y-2 max-w-2xl z-10">
        <h1 className="text-5xl font-bold">iPhone</h1>
        <h2 className="text-2xl text-gray-700">Meet the iPhone 16 family.</h2>
        <div className="flex flex-row justify-center gap-6">
          <button className="px-5 py-2 bg-bblue hover:bg-blue-600 text-white rounded-3xl">
            Learn more
          </button>
          <button className="px-5 py-2 text-bblue rounded-3xl border border-bblue hover:bg-bblue hover:text-white">
            Shop iPhone
          </button>
        </div>
        <h3 className="text-lg font-bold  text-gray-600 bg-gradient-to-r from-[#148BF7] via-[#BB62FC] to-[#F3493F] bg-clip-text text-transparent">
          Built for Apple Intelligence.
        </h3>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl">
        <img
          src="src/assets/iphone_top.png"
          alt="iPhone"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Iphone;
