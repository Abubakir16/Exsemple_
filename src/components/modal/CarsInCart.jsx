import React from "react";
import CarItem from "./CarItem";

export default function CarsInCart({ setActive, actiev }) {
  let getCArs = JSON.parse(localStorage.getItem("cars"));
  return (
    <div
      onClick={() => setActive((actiev = false))}
      className="fixed top-0 left-0 w-[100vw] h-[100vh]  bg-[#000000b0] flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] h-[500px] overflow-auto text-[#000000] bg-[#fff] rounded-[20px] px-[30px] py-[10px]"
      >
        {getCArs &&
          getCArs.map((item) => <CarItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}
