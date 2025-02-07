import React from "react";


const More= () => {
  return (
   <section>
    <div className="h-120 " style={{ backgroundColor: "rgba(40, 30, 31, 0.95)" }}>
    <div className="flex justify-evenly mt-40 pt-5">
        <div className="  h-100 w-1/2 grid place-items-center" >
            <h1 className="text-4xl mb-5 text-gray-50 custom-font">Tea Delights</h1>
            <img src="/Tea.webp " className=" w-70 h-70 hover:opacity-75 cursor-pointer"></img>
            <a className="w-70 shadow-2xl h-22 text-center grid place-items-center bg-gray-100 rounded-br-xl rounded-bl-xl cursor-pointer ">Discover the harmony of flavors with our exquisite tea cakes, designed to enhance your tea or coffee experience</a>
        </div>
        <div className="  h-100 w-1/2 grid place-items-center">
            <h1 className="text-4xl mb-5 text-gray-50 custom-font">Explore Hampers</h1>
            <img src="/Hamper.jpg" className=" w-70 h-70 hover:opacity-75 cursor-pointer"></img>
            <a className="w-70 shadow-2xl  h-22 text-center grid place-items-center bg-gray-100 rounded-br-xl rounded-bl-xl cursor-pointer">Express your affection with a truly special gift: our hampers brimming with our most beloved creations</a>
        </div>
    </div>
    </div>




   </section>
  );
}
export default More;
