import React, { useEffect, useState } from "react";
import Header from "../component/Elements/Header/Index";
import CardProduct from "../component/Fragments/CardProduct";

const products = [
  {
    id: 1,
    nama: "Ferrari",
    des: "Mobil Balap dari italian soil dengan khas warna merah dan kuda sebagai icons",
    price: 2000000,
    url: "/img/car-1.jpg",
  },
  {
    id: 2,
    nama: "Redbull",
    des: "Mobil Balap dari italian soil dengan khas warna merah dan kuda sebagai icons",
    price: 3000000,
    url: "/img/car-2.jpg",
  },
  {
    id: 3,
    nama: "William Racing",
    des: "Mobil Balap dari italian soil dengan khas warna merah dan kuda sebagai icons",
    price: 4000000,
    url: "/img/car-3.jpg",
  },
  {
    id: 4,
    nama: "Mclarent",
    des: "Mobil Balap dari italian soil dengan khas warna merah dan kuda sebagai icons",
    price: 1000000,
    url: "/img/car-4.jpg",
  },
  {
    id: 5,
    nama: "HAAS",
    des: "Mobil Balap dari italian soil dengan khas warna merah dan kuda sebagai icons",
    price: 5000000,
    url: "/img/car-5.jpg",
  },
  {
    id: 6,
    nama: "Toyota",
    des: "Mobil Balap dari italian soil dengan khas warna merah dan kuda sebagai icons",
    price: 7000000,
    url: "/img/car-6.jpg",
  },
];

const Products = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotal(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };
  return (
    <div className="mx-4 grid grid-cols-5 gap-4">
      <div className="col-span-3 px-2 bg-[#262626] pb-8">
        <Header text="Products" />
        <div className="flex flex-wrap mt-4 gap-2 justify-center">
          {products.map((item) => {
            return (
              <CardProduct
                key={item.id}
                id={item.id}
                url={item.url}
                nama={item.nama}
                des={item.des}
                price={item.price}
                handleCart={handleCart}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-2 px-2 bg-[#262626]">
        <Header text="Cart" />
        <table className="ml-4 table-auto p-2 w-full text-left text-lg text-white mt-2">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <tr key={product.id}>
                  <th>{product.nama}</th>
                  <th>{item.qty}</th>
                  <th>Rp. {product.price.toLocaleString("id-ID")}</th>
                  <th>
                    Rp. {(product.price * item.qty).toLocaleString("id-ID")}
                  </th>
                </tr>
              );
            })}
            <tr>
              <td colSpan={3}>
                <b>Total Bayar</b>
              </td>
              <td>
                <b>Rp. {total.toLocaleString("id-ID")}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
