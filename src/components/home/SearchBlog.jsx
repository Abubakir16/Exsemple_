import React, { useState } from "react";
import CartItem from "./CartItem";

function SearchBlog({ data, setQuantity }) {
  return (
    <div>
      <div className="flex flex-wrap gap-[20px]">
        {
          data?.map((item, index) => (
            <div
              key={item.id}
              className="pt-[20px] flex gap-[10px] justify-between "
            >
              <CartItem
                item={item}
                index={index}
                data={data}
                setQuantity={setQuantity}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SearchBlog;
