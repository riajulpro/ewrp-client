const Banner = () => {
  return (
    <section className="h-[80vh] bg-gray-200 bg-bannerBG bg-cover bg-center bg-no-repeat absolute bg-fixed inset-0">
      <div className="h-full w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex justify-center items-center">
        <div className="flex-1 z-20">
          <h1 className="text-2xl md:text-5xl font-bold uppercase text-white">
            Your Effort <br />{" "}
            <span className="text-yellow-400">Our Guidelines</span> <br />
            Your Success
          </h1>
          <p className="text-gray-300 text-xs mt-3 md:text-lg uppercase">
            Learn English with Quality and Smartness
          </p>
          <button className="mt-5 bg-green-400 hover:bg-green-500 text-white uppercase text-sm rounded-md hover:shadow-md px-5 py-3">
            Enroll Now
          </button>
        </div>
      </div>
      <div className="overlay absolute inset-0 bg-gradient-to-r from-slate-900/75 to-slate-900/25 z-10"></div>
    </section>
  );
};

export default Banner;
