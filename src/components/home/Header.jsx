import React, { useState } from "react";
import CarsInCart from "../modal/CarsInCart";
import GetQuantity from "../modal/GetQuantity";
import { Link } from "react-router-dom";
import SearchBlog from "./SearchBlog";

export default function Header() {
  let [actiev, setActive] = useState(false);
  let getToken = localStorage.getItem("token") || false;
  let getUser = JSON.parse(localStorage.getItem("admin"));
  return (
    <header className="flex backdrop-blur-md bg-[#00000085] justify-between items-center border-b-2 fixed w-[96.7%] py-[10px] border-[#e5c0b8] z-10">
      <img className="w-[300px]" src="./assets/logo.png" alt="" />

      <div className="flex gap-[30px] items-center">
        <div
          onClick={() => setActive(!actiev)}
          className="flex relative items-center gap-[5px] border-2 border-[#bc53be] px-[30px] py-[5px] rounded-[10px] text-[#e5c0b8] font-[700] hover:bg-[#bc53de] cursor-pointer transition"
        >
          <svg
            className="w-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
          </svg>
          Cart
          <div className="absolute top-[-4px]  text-[13px]  right-[50%]">
            <GetQuantity />
          </div>
        </div>
        {actiev ? <CarsInCart setActive={setActive} actiev={actiev} /> : null}

        {getToken ? (
          <Link to="/admin">
            <div className="flex items-center gap-[5px] border-2 border-[#bc53be] px-[30px] py-[5px] rounded-[10px] text-[#e5c0b8] font-[700] hover:bg-[#bc53de] cursor-pointer transition">
              <svg
                className="w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
              </svg>
              {getUser.first_name + "-" + getUser.last_name}
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="flex items-center gap-[5px] border-2 border-[#bc53be] px-[30px] py-[5px] rounded-[10px] text-[#e5c0b8] font-[700] hover:bg-[#bc53de] cursor-pointer transition">
              <svg
                className="w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
              </svg>
              Login
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}
