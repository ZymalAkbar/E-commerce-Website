import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { PiCurrencyDollar } from "react-icons/pi";
import { BiSolidPlaneAlt } from "react-icons/bi";
import Card from "../components/card/page";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

function Home() {
  return (
    <>
    <Navbar />
      {/* HERO SECTION */}
      <div className="relative h-[500px] bg-pink-100 overflow-hidden">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Classic Jewellery<br />Collection<br />
          <p className="text-sm sm:text-base md:text-lg font-mono pt-8 px-4 sm:px-10 md:px-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos possimus eos itaque. Quas, quam, nesciunt maxime eum quibusdam omnis dignissimos, repudiandae sit tenetur doloremque rerum! Ullam rem atque architecto.
          </p>
        </h1>
      </div>
      
      <Card />

      {/* TERMS AND CONDITION */}
      <div className="flex flex-col md:flex-row justify-center items-center my-20 px-4">
        <div className="bg-pink-100 p-6 sm:p-8 md:p-11 flex flex-wrap items-center justify-evenly space-y-8 md:space-y-0 md:space-x-10 w-full max-w-6xl">
          {/* Logo 1 */}
          <div className="text-center w-full sm:w-auto">
            <IoDiamondOutline size={80} className="mx-auto" />
            <h1 className="text-center mt-4 text-sm sm:text-base md:text-lg">Excellent Quality<br />On all orders</h1>
          </div>
          {/* Logo 2 */}
          <div className="text-center w-full sm:w-auto">
            <FaCheck size={80} className="mx-auto" />
            <h1 className="text-center mt-4 text-sm sm:text-base md:text-lg">Risk Free<br />On all orders</h1>
          </div>
          {/* Logo 3 */}
          <div className="text-center w-full sm:w-auto">
            <PiCurrencyDollar size={80} className="mx-auto" />
            <h1 className="text-center mt-4 text-sm sm:text-base md:text-lg">Buyer&apos;s Discount<br />On all orders</h1>
          </div>
          {/* Logo 4 */}
          <div className="text-center w-full sm:w-auto">
            <BiSolidPlaneAlt size={80} className="mx-auto" />
            <h1 className="text-center mt-4 text-sm sm:text-base md:text-lg">Free Shipping<br />On all orders</h1>
          </div>
        </div>
      </div>

      <Card />
      <Footer />
    </>
  );
}

export default Home;
