import React from "react";

export default function GetQuantity() {
  let get = JSON.parse(localStorage.getItem("cars")) || false;
  return (
    <div>
      <div>{get.length || "0"}</div>
    </div>
  );
}
