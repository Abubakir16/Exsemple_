import React, { useState } from "react";
import Header from "./Header";
import Swip from "./Swip";
import Carts from "./Carts";
import Footer from "./Footer";

export default function Home() {
  const [quan, setQuantity] = useState(false);

  return (
    <div>
      <Header />
      <Swip />
      <Carts setQuantity={setQuantity} />
      <Footer />
    </div>
  );
}
