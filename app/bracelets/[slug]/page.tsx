
import React from "react";
import Navbar from "@/app/components/navbar/page";
import BraceletDetails from "@/app/components/braceletdetails/productdetails";
import { client } from "@/sanity/lib/client";
import Footer from "@/app/components/footer/page";

const Page = async ({ params }: { params: { slug: string } }) => {
  const braceletData = await client.fetch(
    `*[_type == 'bracelet' && slug.current == $slug]`,
    { slug: params.slug } 
  );

  if (!braceletData || braceletData.length === 0) {
    return <div>Bracelet not found</div>;
  }

  return (
    <>
      <Navbar />
      <BraceletDetails data={braceletData[0]} /> 
      <Footer />
    </>
  );
};

export default Page;


