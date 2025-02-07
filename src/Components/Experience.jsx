import React from "react";
import "@fontsource/ephesis";

const Experience = () => {
    return (
        <section >
            <div className="  h-15 mt-15 mb-12 p-2">
                <h1 className="text-4xl  flex items-center justify-center italics ">EXPERIENCE FLAVOUR</h1>
            </div>
            <div className="flex m-10 ml-20 mr-20">
                <div style={{ backgroundColor: "rgba(130, 91, 87, 0.5)" }} className=" border-none m-2 rounded-3xl h-30 w-1/2 " >
                    <div className="flex">
                        <img src="/chocolate.jpg" className="w-30 ml-5 h-30 "></img>
                        <a className="grid place-items-center text-4xl ml-10 cursor-pointer font-serif italic hover:underline">Chocolate</a>
                    </div>
                </div>

                <div style={{ backgroundColor: "rgba(240, 101, 110, 0.59)" }} className=" border-none m-2 ml-35 rounded-3xl h-30 w-1/2 " >
                    <div className="flex justify-end">

                        <a className="grid place-items-center text-4xl mr-10  cursor-pointer font-serif italic hover:underline">Strawberry</a>
                        <img src="/Strawberry.jpg" className="w-30  mr-10 h-30 "></img>
                    </div>
                </div>



            </div>

            <div className="flex m-10 ml-20 mr-20">
                <div style={{ backgroundColor: "rgba(219, 184, 67, 0.46)" }} className=" border-none m-2 rounded-3xl h-30 w-1/2 " >
                    <div className="flex">
                        <img src="/pineapple.jpeg" className="w-30 ml-5 h-30 "></img>
                        <a className="grid place-items-center text-4xl ml-10  cursor-pointer font-serif italic hover:underline">Pineapple</a>
                    </div>
                </div>

                <div style={{ backgroundColor: "rgba(191, 128, 34, 0.53)" }} className=" border-none m-2 ml-35  rounded-3xl h-30 w-1/2 " >
                    <div className="flex justify-end">

                        <a className="grid place-items-center text-4xl mr-10  cursor-pointer font-serif italic hover:underline">Butterscotch</a>
                        <img src="/Butterscotch.png" className="w-30  mr-10 h-30 "></img>
                    </div>
                </div>



            </div>
            <div>
    <div className="flex justify-between m-30">
        <div>
        <img className="w-25 h-25" src="express-delivery.png"></img>
        <p className="font-bold"> Free Delivery</p>
        </div>
        <div>
        <img className="w-25 h-25" src="24-7.png"></img>
        <p className="font-bold">24/07 Support</p>
        </div>
        <div>
        <img className="w-25 h-25" src="payment-protection.png"></img>
        <p className="font-bold">Secure Payment</p>
        </div>
    </div>
</div>
        </section>
        
    );
};

export default Experience;