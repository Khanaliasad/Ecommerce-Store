import React from "react";
import Link from "next/link";
import { urlfor } from "../Lib/client";
const FooterBanner = ({
  footerBanner: {
    buttonText,
    desc,
    discount,
    image,
    largeText1,
    largeText2,
    midText,
    product,
    saleTime,
    smallText,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={'/product/${product}'}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlfor(image)} className="footer-banner-image"></img>
      </div>
    </div>
  );
};

export default FooterBanner;
