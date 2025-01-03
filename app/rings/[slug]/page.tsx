
import React from "react";
import Navbar from "@/app/components/navbar/page";
import { client } from "@/sanity/lib/client";
import RingDetails from "@/app/components/ringdetails/productdetails";
import Footer from "@/app/components/footer/page";

const rPage = async ({ params }: { params: { slug: string } }) => {
  const ringData = await client.fetch(
    `*[_type == 'ring' && slug.current == $slug]`,
    { slug: params.slug } 
  );

  if (!ringData || ringData.length === 0) {
    return <div>Bracelet not found</div>;
  }

  return (
    <>
      <Navbar />
      <RingDetails data={ringData[0]} /> 
      <Footer />
    </>
  );
};

export default rPage;
