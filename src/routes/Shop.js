import React, { useContext } from "react";


import { ProductContext } from "../contexts/productContext";
import ProductCard from "../components/ProductCard";
import '../styles/shop.styles.scss'


export default function Shop() {
    const {products} = useContext(ProductContext)
  return (
    <div className="products-container">
     
      {products.map((product) => (
       <ProductCard key ={product.id} product={product} />
      ))}
    </div>
  );
}
