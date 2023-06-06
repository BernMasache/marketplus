import Image from "next/image";
import { Inter } from "next/font/google";
import ProductsComponent from "@/components/pages/products";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

let data = [];
export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    data.push(product);
    setCartItems(data);
  };
  return (
    <main className={`flex min-h-screen flex-col`}>
      <ProductsComponent addToCart={addToCart} cartItems={data} />
    </main>
  );
}
