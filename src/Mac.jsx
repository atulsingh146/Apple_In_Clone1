const Mac = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6 space-y-2 bg-custom-gradient">
      <h1 className="text-4xl font-bold">MacBook Air</h1>
      <h3 className="text-xl text-gray-700">Sky blue colour. <br /> Sky high performance with M4.</h3>
      <div className="flex justify-center gap-4">
        <button className="px-5 py-2  bg-bblue hover:bg-blue-600 text-white rounded-3xl ">
          Learn more
        </button>
        <button className="px-5 py-2 text-bblue rounded-3xl border border-bblue hover:bg-bblue hover:text-white ">
          Buy
        </button>
      </div>
      <img src="src/assets/mac_second.png"  className ="h-64 object-contain" alt="mac" />
      <h3 className=" font-bold text-lg  text-gray-600 bg-gradient-to-r from-[#148BF7] via-[#BB62FC] to-[#F3493F] bg-clip-text text-transparent">Built for Apple Intelligence.</h3>
    </div>
  );
};

export default Mac;
