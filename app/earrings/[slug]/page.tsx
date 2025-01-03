import React from "react";
import Navbar from "@/app/components/navbar/page";
import { client } from "@/sanity/lib/client";
import EarringDetails from "@/app/components/earringdetails/productdetails";
import Footer from "@/app/components/footer/page";

const ePage = async ({ params }: { params: { slug: string } }) => {
  const earringData = await client.fetch(
    `*[_type == 'earring' && slug.current == $slug]`,
    { slug: params.slug } 
  );

  if (!earringData || earringData.length === 0) {
    return <div>Earrings not found</div>;
  }

  return (
    <>
      <Navbar />
      <EarringDetails data={earringData[0]} /> 
      <Footer />
    </>
  );
};

export default ePage;