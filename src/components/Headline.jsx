import React from "react";

function Headline() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-4">
      {/* card */}
      <div className="relative rounded-full">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70 text-white  px-3 rounded-xl">
          <p className="font-bold pt-4 text-2xl">Sun's Out, BOGO's Out</p>
          <p className="font-bold">Through 8/26</p>
          <button className=" font-bold hover:bg-black hover:border-black hover:text-white duration-200 px-2 absolute bottom-4 border-white bg-white text-black">
            Order Now
          </button>
        </div>
        <img
          className="max-h-168px md:max-h-[200px] rounded-xl w-full"
          src="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg"
          alt=""
        />
      </div>
      {/* card */}
      <div className="relative rounded-full">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70 text-white  px-3 rounded-xl">
          <p className="font-bold pt-4 text-2xl">New Restaurunts</p>
          <p className="font-bold">Addede Daily</p>
          <button className=" font-bold hover:bg-black hover:border-black hover:text-white duration-200 px-2 absolute bottom-4 border-white bg-white text-black">
            Order Now
          </button>
        </div>
        <img
          className="max-h-168px md:max-h-[200px] rounded-xl w-full"
          src="https://cdn.pixabay.com/photo/2024/05/06/17/02/burgers-8743798_1280.jpg"
          alt=""
        />
      </div>
      {/* card */}
      <div className="relative rounded-full">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70 text-white  px-3 rounded-xl">
          <p className="font-bold pt-4 text-2xl">We Deliver Deserts Too</p>
          <p className="font-bold">Tasty Treats</p>
          <button className=" font-bold hover:bg-black hover:border-black hover:text-white duration-200 px-2 absolute bottom-4 border-white bg-white text-black">
            Order Now
          </button>
        </div>
        <img
          className="max-h-168px md:max-h-[200px] rounded-xl w-full"
          src="https://cdn.pixabay.com/photo/2024/05/06/17/24/salchipapas-8743826_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Headline;
