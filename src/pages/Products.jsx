import React from "react";
import { products } from "../assets/data";

export default function Products() {
  return (
    <div>
      {products.map((mahsulot) => (
        <div key={mahsulot.id}>
          <h1>{mahsulot.title}</h1>
          <img src={mahsulot.image} alt={mahsulot.title} />
        </div>
      ))}
    </div>
  );
}
