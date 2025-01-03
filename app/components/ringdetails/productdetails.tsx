'use client';
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import React, { useState, useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { HiMinusSm } from "react-icons/hi";
import { CartContext,CartContextType } from "@/app/cartcontext/CartContext";
import { Product } from "@/app/cartcontext/CartContext"; 

interface RingDetailsProps {
  data: Product;
}

const RingDetails = ({ data }: RingDetailsProps) => {
  const [index, setIndex] = useState(0);
  const { qty, decQty, incQty, addProduct } = useContext(CartContext) as CartContextType;

  return (
    <div className="w-full py-8 md:py-16">
      <div className="gap-8 max-w-[1024px] m-auto px-4 sm:px-6 md:px-0 grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Section */}
        <div className="flex flex-col items-center">
          {/* Top Image */}
          <div className="h-[450px] flex items-center mb-8">
            {data.image && data.image[index] ? (
              <Image
                loader={() => urlFor(data.image[index]?.asset).url()}
                src={urlFor(data.image[index]?.asset).url()}
                alt={data.image[index]?.alt || 'Ring Image'}
                height={450}
                width={450}
                className="mx-auto object-cover"
              />
            ) : (
              <div className="w-full h-[450px] bg-gray-200 flex items-center justify-center">
                <p>No image available</p>
              </div>
            )}
          </div>

          {/* Bottom Images */}
          <div className="flex gap-3 justify-center flex-wrap">
            {data.image?.slice(1).map((img, i) => (
              <div key={i} className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4">
                <Image
                  loader={() => urlFor(img?.asset).url()}
                  src={urlFor(img?.asset).url()}
                  alt={img?.alt || 'Earring Image'}
                  height={500}
                  width={500}
                  className="mx-auto object-cover rounded-lg hover:cursor-pointer"
                  onClick={() => setIndex(i + 1)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-semibold">{data.name}</div>
          <div className="text-2xl font-semibold text-black">${data.price}</div>
          <div className="text-lg font-thin text-gray-700">{data.description}</div>

          {/* Quantity Section */}
          <div className="flex gap-3 items-center mt-8">
            <p className="flex items-center border p-3 px-6 text-2xl border-black hover:cursor-pointer">
              <span onClick={decQty}>
                <HiMinusSm size={30} />
              </span>
              <span className="px-3">{qty}</span>
              <span onClick={incQty}>
                <FaPlus size={20} />
              </span>
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full sm:w-auto p-4 mt-8 text-2xl font-semibold bg-pink-200 hover:bg-slate-200 hover:cursor-pointer"
            onClick={() => addProduct(data, qty)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RingDetails;


