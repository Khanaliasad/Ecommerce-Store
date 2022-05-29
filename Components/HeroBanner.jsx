import Link from "next/link";
import React from "react";
import propTypes from "prop-types";
import { urlfor } from "../Lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div>
      <div className="hero-banner-container">
        {/* {console.log(heroBanner} */}
        <div>
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h1>{heroBanner.midText}</h1>
          <h3>{heroBanner.largeText1}</h3>
          <img
            src={urlfor(heroBanner.image)}
            alt="Headphones"
            className=" hero-banner-image"
          />
        </div>
        <div>
          <Link href="/product/ID">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Discription</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// {_createdAt, _id, _rev, _type,
//  _updatedAt, buttonText, desc, discount,
//   image, largeText1, largeText2,
//    midText, product, saleTime, smallText})

export default HeroBanner;

HeroBanner.propTypes = {
  smallText: propTypes.string,
  midText: propTypes.string,
  largeText1: propTypes.string,
  largeText2: propTypes.string,
  buttonText: propTypes.string,

  desc: propTypes.string,
  discount: propTypes.number,
  image: propTypes.array,
  product: propTypes.string,
  // saleTime: "20/2/23",
};
