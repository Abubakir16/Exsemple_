import React, { useState, useEffect } from "react";
import SearchBlog from "./SearchBlog";
  
export default function Carts({ setQuantity }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://hadzhicars.pythonanywhere.com/api/cars/")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="pt-[60px]">
      {<SearchBlog data={data} setQuantity={setQuantity} />}
    </div>
  );
}
