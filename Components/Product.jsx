import React from "react";
import { urlfor } from "../Lib/client";
import Link from "next/link";

const Product = ({ productData: { details, image, name, price, slug } }) => {
  return (
    <div className="props.children">
      <Link href={"/product/${slug.current}"}>
        <div className="product-card ">
          <img
            src={urlfor(image[0])}
            height={250}
            width={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;

// :{details,image,name,price,slug}
// details: "Awesome headphone"
// image: [{…}]
// name: "headphone1"
// price: 2000
// slug: {_type: 'slug', current: 'headphone1'}
