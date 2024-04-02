import React, { useState } from "react";
import CartItem from "./CartItem";

function SearchBlog({ data, setQuantity }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredData = data.filter((item) =>
    item.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div>
      <div className="flex gap-[10px]">
        <div className="border-2 px-[20px] mx-auto  w-[700px] border-[#bc53be] rounded-[20px] flex justify-between py-[5px] items-center">
          <input
            value={searchTerm}
            onChange={handleChange}
            className="bg-transparent outline-none w-full"
            type="search"
            placeholder="Search..."
          />
          <button>
            <svg
              className="w-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </button>
        </div>
        <button
          onClick={handleSort}
          className="bg-[red] px-[20px] py-[3px] rounded focus:bg-[yellow] focus:text-[#000]"
        >
          low to high
        </button>
        <button
          onClick={handleSort}
          className="bg-[red] px-[20px] py-[3px] rounded focus:bg-[yellow] focus:text-[#000]"
        >
          high to low
        </button>
      </div>

      <div className="flex flex-wrap gap-[20px]">
        {sortedData[0] ? (
          sortedData.map((item, index) => (
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
        ) : (
          <p className="text-[red] text-[40px]">Not Found</p>
        )}
      </div>
    </div>
  );
}

export default SearchBlog;
