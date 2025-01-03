'use client';
import React, { useContext, useState } from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa"; 
import Image from "next/image";
import Cart from "../cart/cart";
import { CartContext } from "@/app/cartcontext/CartContext"; 
import { CartContextType } from "@/app/cartcontext/CartContext"; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { showCart, setshowCart } = useContext(CartContext) as CartContextType;

  const handleClick = () => {
    setshowCart(!showCart);
  };

  return (
    <>
      {/* TOPBAR */}
      <div className="p-5 bg-slate-200 w-full flex items-center justify-center">
        <p className="animate-pulse font-semibold text-xl">FREE SHIPPING ON ORDERS ABOVE 1500</p>
      </div>

      {/* NAVBAR */}
      <nav className="bg-pink-200 text-2xl font-mono flex items-center justify-between p-5 sm:p-8 lg:p-11 relative">
        <div className="flex items-center justify-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            height={90}
            width={90}
          />
          <h1 className="text-3xl sm:text-2xl font-semibold">Divine</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={"/home"} className="hover:text-slate-200" onClick={closeMenu}>Home</Link>
          <Link href={"/ring"} className="hover:text-slate-200" onClick={closeMenu}>Rings</Link>
          <Link href={"/bracelet"} className="hover:text-slate-200" onClick={closeMenu}>Bracelet</Link>
          <Link href={"/earring"} className="hover:text-slate-200" onClick={closeMenu}>Earrings</Link>
          
          <div className="flex items-center gap-6">
            <GoSearch />
            <button onClick={handleClick} >
              <IoCartOutline className="hover:text-slate-200 hover:cursor-pointer"/>
            </button>
          </div>
        </div>
        {showCart && <Cart />}

        {/* Mobile Menu) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={30} />  
            ) : (
              <FaBars size={30} />   
            )}
          </button>
        </div>

        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
              onClick={closeMenu} 
            ></div>

            {/* Mobile Menu */}
            <div className="absolute top-0 left-0 w-full h-screen bg-pink-200 flex flex-col items-center justify-center gap-8 p-5 md:hidden z-50">
              <Link href={"/home"} className="hover:text-slate-200" onClick={closeMenu}>Home</Link>
              <Link href={"/ring"} className="hover:text-slate-200" onClick={closeMenu}>Rings</Link>
              <Link href={"/bracelet"} className="hover:text-slate-200" onClick={closeMenu}>Bracelet</Link>
              <Link href={"/earring"} className="hover:text-slate-200" onClick={closeMenu}>Earrings</Link>

              <div className="flex items-center gap-6">
                <GoSearch />
                <button onClick={handleClick} >
                  <IoCartOutline className="hover:text-slate-200 hover:cursor-pointer"/>
                </button>
              </div>
            </div>
            {showCart && <Cart />}
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;

