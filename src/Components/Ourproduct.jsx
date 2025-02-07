import React from "react";


const Ourproduct = () => {
  return (<section>
    <div className="bg-gray-200  h-15 mt-15 mb-15 p-2">
      <h1 className="text-4xl  flex items-center justify-center">OUR PRODUCTS</h1>
    </div>
    <div className="flex m-8">
      <div className="border-none rounded-lg shadow-2xl m-10 p-5 w-55 h-60 cursor-pointer">
        <img src="/cake.webp" className="w-45 h-45 align-centre hover:opacity-75" />
        <a href="#" className="grid place-items-center m-1 font-medium text-xl hover:underline">CAKE</a>
      </div>
      <div className="border-none rounded-lg shadow-2xl m-10 p-5 w-55 h-60 cursor-pointer">
        <img src="/brownie.webp" className="w-45 h-45 align-centre hover:opacity-75" />
        <a href="#" className="grid place-items-center m-1 font-medium text-xl hover:underline">BROWNIE</a>
      </div>
      <div className="border-none rounded-lg shadow-2xl m-10 p-5 w-55 h-60 cursor-pointer">
        <img src="/breadimg.jpg" className="w-45 h-45 align-centre hover:opacity-75" />
        <a href="#" className="grid place-items-center m-1 font-medium text-xl hover:underline">BREAD</a>
      </div>
      <div className="border-none rounded-lg shadow-2xl m-10 p-5 w-55 h-60 cursor-pointer">
        <img src="/cupcake.jpg" className="w-full h-45 align-centre hover:opacity-75" />
        <a href="#" className="grid place-items-center m-1 font-medium text-xl hover:underline">CUP CAKE</a>
      </div>
    </div>

    <div className="flex m-8 ">
      <div className="border-none rounded-lg shadow-2xl m-10 p-5 w-55 h-60 cursor-pointer ">
        <img src="/pastry.jpg" className="w-45 h-45 align-centre hover:opacity-75" />
        <a href="#" className="grid place-items-center m-1 font-medium text-xl hover:underline">PASTRY</a>
      </div>
      <div className="border-none rounded-lg shadow-2xl m-10 p-5 w-55 h-60 cursor-pointer">
        <img src="/cookie.jpg" className="w-45 h-45 align-centre hover:opacity-75" />
        <a href="#" className="grid place-items-center m-1 font-medium text-xl hover:underline">COOKIES</a>
      </div>
      <div className="border-none rounded-lg shadow-2xl m-10 p-5 w-55 h-60 cursor-pointer">
        <img src="/croissant.jpg" className="w-45 h-45 align-centre hover:opacity-75" />
        <a href="#" className="grid place-items-center m-1 font-medium text-xl hover:underline">CROISSANT</a>
      </div>
      <div className="border-none rounded-lg shadow-2xl m-10 p-5 w-55 h-60 cursor-pointer">
        <img src="/coffee.jpg" className="w-full h-45 align-centre hover:opacity-75" />
        <a href="#" className="grid place-items-center m-1 font-medium text-xl hover:underline">COFFEE</a>
      </div>

    </div>
  </section>
  );
}

export default Ourproduct;