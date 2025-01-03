import React, { useContext } from "react";
import { CartContext } from "@/app/cartcontext/CartContext";
import { IoChevronBackSharp } from "react-icons/io5";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Product } from "@/app/cartcontext/CartContext";

function Cart() {
  const context = useContext(CartContext);
  const cartItems = context?.cartItems ?? [];
  const showCart = context?.showCart ?? false;
  const setshowCart = context?.setshowCart;
  const totalPrice = context?.totalPrice ?? 0;

  const handleClose = () => {
    if (setshowCart) {
      setshowCart(!showCart);
    }
  };

  return (
    <div
      className={`w-full h-full bg-black bg-opacity-50 fixed top-0 right-0 z-10 ${showCart ? "block" : "hidden"}`}
    >
      <div className="border h-full w-full sm:w-[600px] bg-white float-right px-4 sm:px-[40px] py-[20px] sm:py-[50px] relative">
        <button className="flex items-center justify-start" onClick={handleClose}>
          <IoChevronBackSharp size={20} />
          <span className="pl-3 text-md font-medium">Your Cart</span>
        </button>
        
        <div className="mt-4 overflow-auto max-h-[70vh] px-2 sm:px-[20px] py-4 sm:py-[10px]">
          {cartItems.length > 0 ? (
            cartItems.map((data: Product, index: number) => (
              <div className="flex gap-4 sm:gap-[15px] p-4 sm:p-[20px] items-center" key={`${data._id}-${index}`}>
                {data.image && data.image[0] ? (
                  <Image
                    loader={() => urlFor(data.image[0].asset).url()}
                    src={urlFor(data.image[0].asset).url()}
                    alt={data.image[0]?.alt || "Product Image"}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-[150px] h-[150px] bg-gray-200"></div>
                )}
                
                <div className="flex flex-col justify-between">
                  <h2 className="text-lg sm:text-xl font-medium">{data.name}</h2>
                  <h2 className="mt-2 text-md sm:text-lg">${data.price}</h2>
                </div>

                <div className="flex justify-end items-center ml-auto">
                  <button
                    type="button"
                    className="text-red-700"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}

          <div className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Total Amount: 
              <span className="text-xl sm:text-2xl ml-4 font-bold">${totalPrice}</span>
            </h2>
          </div>

          <button className="w-full sm:w-auto p-4 text-2xl bg-pink-200 my-4 hover:bg-slate-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;



