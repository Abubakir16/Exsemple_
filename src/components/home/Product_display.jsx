import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Product_display() {
  let { id } = useParams();
  let [dataForm, setDataForm] = useState(null);
  useEffect(() => {
    const getProductById = async () => {
      let response = await axios.get(
        `https://hadzhicars.pythonanywhere.com/api/cars/${id}/`
      );
      setDataForm(response.data);
      console.log(response);
    };

    getProductById();
  }, []);
  return (
    <div>
      <div className="pt-[100px]  relative">
        <Link
          to="/"
          className="absolute top-[90px] left-[-10px] bg-[red] rounded-[50px]"
        >
          <svg
            className="w-[30px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
        </Link>
        <div className="border-2 border-[#bc53be] p-[20px] flex gap-[30px] items-center">
          <img
            className="w-[600px] rounded-[10px] object-cover"
            src={dataForm?.image}
            alt=""
          />
          <div>
            <h1 className="text-[32px] text-[#bc53be] font-[400]">
              Model:{" "}
              <span className="text-[#fff] font-[700]">{dataForm?.model}</span>
            </h1>
            <h1 className="text-[20px] text-[#bc53be] font-[400]">
              Year:{" "}
              <span className="text-[#fff] font-[700]">{dataForm?.year}</span>
            </h1>
            <h1 className="text-[14px] text-[#bc53be] font-[500]">
              Description:{" "}
              <span className="text-[#fff] font-[400]">
                {dataForm?.overview}
              </span>
            </h1>
            <h1 className="text-[17px] text-[#bc53be] font-[400]">
              Price:{" "}
              <span className="text-[#fff] font-[700]">{dataForm?.price}$</span>
            </h1>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
