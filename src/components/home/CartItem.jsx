import React from "react";
import GetQuantity from "../modal/GetQuantity";
import { Link } from "react-router-dom";

export default function CartItem({ item, index, data, setQuantity }) {
  function toLoacal(id) {
    let oneCar = data.find((item) => item.id == id);
    let carLocal = JSON.parse(localStorage.getItem("cars")) || [];
    let carIndex = carLocal.findIndex((item) => item.id == id);

    if (carIndex == -1) {
      carLocal.push(oneCar);
    }

    localStorage.setItem("cars", JSON.stringify(carLocal));
    <GetQuantity />;
  }

  return (
    <div className="w-[420px] border-2 cursor-pointer transition hover:bg-[red]">
      <Link to={`/${item.id}`}>
        <img
          className="h-[280px] object-cover w-[100%] hover:scale-1"
          src={item?.image || 'https://www.shutterstock.com/image-vector/internet-network-warning-404-error-260nw-2009801198.jpg'}
          alt=""
        />
      </Link>
      <div className="px-[20px] py-[10px] mt-[20px]">
        <p>{item.model}</p>

        <div className="flex  justify-between">
          <p>{item.price}</p>

          <div
            onClick={() => {
              toLoacal(data[index].id);
              setQuantity((prev) => !prev);
            }}
            className="bg-[#bc53de] px-[10px] rounded-[10px] flex justify-center cursor-pointer"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}
