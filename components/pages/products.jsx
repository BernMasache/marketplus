import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MagnifyingGlassCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
const products = [
  {
    id: 1,
    name: "Dawn",
    color: "For men",
    href: "#",
    imageSrc: "./assets/products/dawn.png",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "3200",
  },
  {
    id: 2,
    name: "Sugar",
    color: "Brown",
    href: "#",
    imageSrc: "./assets/products/brown sugar.png",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "MK1300",
  },
  {
    id: 3,
    name: "Peanut",
    color: "Butter",
    href: "#",
    imageSrc: "./assets/products/peanut.jpeg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "MK2500",
  },
  {
    id: 4,
    name: "Chicken",
    color: "local",
    href: "#",
    imageSrc: "./assets/products/Local-Chicken.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "MK6500",
  },
  {
    id: 5,
    name: "Soya pieces",
    color: "TopSoy",
    href: "#",
    imageSrc: "./assets/products/TastySoyaPieces-k8_685x.webp",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "MK200",
  },
  {
    id: 6,
    name: "Table salt",
    color: "Iodised 2Kg",
    href: "#",
    imageSrc: "./assets/products/Fine-Salt.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "MK1700",
  },
  {
    id: 7,
    name: "Matemba",
    color: "Aminga umodzi",
    href: "#",
    imageSrc: "./assets/products/Matemba.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "MK400",
  },
  {
    id: 8,
    name: "Sunshine",
    color: "Cream of maize 10Kg",
    href: "#",
    imageSrc: "./assets/products/cream of maize.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "MK12500",
  },
];

export default function ProductsComponent(props) {
  const [filteredData, setFilteredData] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    setFilteredData(products);
  }, []);

  const filtered = (e) => {
    const filtered =
      products &&
      products.filter((item) => {
        return item.name.toLowerCase().includes(e.toLowerCase());
      });
    setFilteredData(filtered);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <h2 className="text-xl font-bold text-gray-900">
            New Items in stock
          </h2>
          <div className="p-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-end space-x-4">
            <div className="col-span-2">
              <label
                htmlFor="account-number"
                className="block sr-only text-sm font-medium leading-6 text-gray-900"
              >
                Search item
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  className="block w-full rounded-md pl-2 col-span-3 border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="search item(s)"
                  value={q}
                  onChange={(e) => {
                    setQ(e.target.value);
                    filtered(e.target.value);
                  }}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <MagnifyingGlassCircleIcon
                    className="h-7 w-7 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <Link
                href="/cart-items"
                className="group -m-2 flex items-center p-2"
              >
                <ShoppingCartIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {props?.cartItems?.length}
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {filteredData.length > 0 ? (
            filteredData.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {product.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => props.addToCart(product)}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Add to basket
                    <span className="sr-only">, {product.name}</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="relative flex items-center justify-center">
              <p className="text-center bg-gray-400 p-2 text-white">
                No item(s) match your search...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
