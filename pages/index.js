import React from "react";
import { Product, FooterBanner, HeroBanner } from "../Components";
import { client } from "../Lib/client";

const index = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]} />
      <br></br>
      <div className="products-heading">
        <h2>best selling product</h2>
        <p>Speakers Of Many Variations</p>
      </div>
      <br />
      {/* <div className="products-container"> */}
      {/* <Product
        className="product-container,product-detail-container,product-detail-container"
        productData={products}
      /> */}
      {/* {console.log(products.map((params) => {
        return params.slug.current
      }
      ))} */}
      {products?.map((params) =>  <Product key={params.slug.current}
        className="products-container,product-detail-container,product-detail-container"
        productData={params}
      />) }

      <FooterBanner footerBanner={bannerData&&bannerData[0]} />
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};
