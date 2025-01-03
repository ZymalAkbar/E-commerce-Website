import React from "react";
import Image from "next/image";

function Card() {
  return (
    <>
      {/* CARD SECTION */}
      <div className="flex flex-wrap justify-center items-center gap-8 my-16">
        {/* Card 1 */}
        <div className="w-full sm:w-72 md:w-80 lg:w-96 xl:w-96 h-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
            <Image
              src="/ring.webp" 
              alt="ring"
              width={1000}  
              height={1000} 
              layout="responsive" 
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Elegant Ring</h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-72 md:w-80 lg:w-96 xl:w-96 h-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
            <Image
              src="/earring.webp" 
              alt="earring"
              width={1000}  
              height={1000} 
              layout="responsive" 
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Sahara Earring</h2>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" w-full sm:w-72 md:w-80 lg:w-96 xl:w-96 h-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
            <Image
              src="/brc.webp"
              alt="bracelet"
              width={1000}  
              height={1000} 
              layout="responsive"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Timeless Bracelet</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;


