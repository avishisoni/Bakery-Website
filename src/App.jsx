import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background";
import Description from "./Components/Description";
import Ourproduct from "./Components/Ourproduct";
import Experience from "./Components/Experience";
import More from "./Components/More";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
 
      <Navbar />
      <Background />
      <Description/>
      <Ourproduct/>
      <More/>
      <Experience/>
      
      <Footer/>
    </>
  );
}
export default App