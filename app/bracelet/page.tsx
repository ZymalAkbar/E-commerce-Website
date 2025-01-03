import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Navbar from "../components/navbar/page";
import Footer from "../components/footer/page";

interface Ibracelet {
  price: number;
  name: string;
  image: { asset: { _ref: string } }[];
  description: string;
  slug:{current:string};
}

async function Bracelet() {
  const xyz: Ibracelet[] = await client.fetch(`*[_type == 'bracelet']`);

  return (
    <>
    <Navbar />
      {/* HERO SECTION */}
      <div className="relative h-[500px] bg-transparent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp"
            alt="All Earring"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">All Bracelets</h1>
          </div>
        </div>
      </div>

      {/* SANITY SECTION */}
      {/* EARRINGS */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {xyz.map((data: Ibracelet, index: number) => {
            return (
              <div key={index} className="bg-pink-50 p-6 sm:p-8 lg:p-10 rounded-lg">
                <Link href={`/bracelets/${data.slug.current}`}>
                <h1 className="text-xl font-semibold pb-4 text-center">{data.name}</h1>
                <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                  <Image
                    src={urlFor(data.image[0]).url()}
                    alt="img"
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                </div>
                
                <h2 className="text-lg font-bold pt-4 text-center">${data.price}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bracelet;
