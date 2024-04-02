import React, { useState } from "react";

export default function CarItem({ item }) {
  let [count, setCount] = useState(1);
  return (
    <div className="flex justify-between items-center mb-[20px]">
      <img
        className="w-[120px] h-[120px] object-cover rounded-[50%]"
        src={item.image}
        alt=""
      />
      <div className="font-[700]">
        <p>{item.model}</p>
        <p>{item.price}</p>
      </div>

      <div className="flex items-center gap-[10px] border-2 border-[#bc53be] px-[10px] py-[3px] rounded-[10px]">
        <button
          onClick={() => (count >= 1 ? setCount(count--) : count)}
          className="bg-[#000]  text-[#fff] rounded-[50%] w-[30px] h-[30px] border-2 border-[#bc53be] active:bg-[#bc53be]"
        >
          -
        </button>
        <div>{count}</div>
        <button
          onClick={() => setCount(count++)}
          className="bg-[#000]  text-[#fff] rounded-[50%] w-[30px] h-[30px] border-2 border-[#bc53be] active:bg-[#bc53be]"
        >
          +
        </button>
      </div>

      <div className=" text-[38px] border-2 border-[#bc53be] rounded-[50%] w-[40px] h-[40px] flex ">
        <button>
          <svg
            className="w-[100%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
