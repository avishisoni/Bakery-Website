import React from "react";

const Navbar = () => {
  return (
   <header className="bg-gray-100 shadow-lg relative m-10  h-15 w-300 p-3" >
       <div className="flex justify-between">
       <h1 className="text-2xl font-serif italic">BAKE HEAVEN</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li><a href="#" className="hover:text-gray-900">ABOUT US</a></li>
            <li><a href="#" className="hover:text-gray-900">PRODUCTS</a></li>
            <li><a href="#" className="hover:text-gray-900">RECIPES</a></li>
            <li><a href="#" className="hover:text-gray-900">BLOGS</a></li>
            <li><a href="#" className="hover:text-gray-900">ORDER ONLINE</a></li>
            <li><a href="#" className="hover:text-gray-900">CONTACT US</a></li>
          </ul>
          </nav>
      </div>
      </header>
  );
};
export default Navbar