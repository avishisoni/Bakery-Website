import React from "react";


const Description= () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl text-centre font-sans mb-4 custom-font" >Freshly Baked, Deliciously Tasty!</h1>
        <p className="">Since 2010, we have been delighting our guests with premium-quality treats, crafted with love 
          </p>
            <p>  and served with heartfelt care.</p>
            <button className="border-1 rounded-full m-4 p-2 pl-7 pr-7 bg-opacity-50 " style={{ backgroundColor: "#A7734A" }}>KNOW MORE</button>
    </div>
  );
}

export default Description;