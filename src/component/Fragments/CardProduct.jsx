import React from "react";
import Button from "../Elements/Button/Index";

const CardProduct = (props) => {
  const { url, nama, des, price, handleCart, id } = props;
  return (
    <>
      <div className="px-4 py-4 max-w-[230px] bg-gradient-to-r from-fuchsia-600 to-purple-600 flex flex-col gap-3 rounded">
        <a href="">
          <img
            src={url}
            alt="car-1"
            className="rounded-t-lg w-full bg-cover h-60"
          />
        </a>
        <div className="h-full">
          <h1 className="font-bold text-3xl text-white">
            {nama.substring(0, 20)}
          </h1>
          <span className="text-white h-full">{des.substring(0, 100)}</span>
        </div>
        <div className="flex justify-between mt-2 items-center">
          <span className="font-semibold text-white text-md">
            Rp {price.toLocaleString("id-ID")}
          </span>
          <Button text="Add to Cart" onclick={() => handleCart(id)} />
        </div>
      </div>
    </>
  );
};

export default CardProduct;
