"use client";

import { useState } from "react";

export default function BagsPage() {
  const [cart, setCart] = useState([]);

  const bags = Array.from({ length: 51 }, function (_, i) {
    return {
      id: i + 1,
      name: "Luxury Bag " + (i + 1),
      image: "/bag" + (i + 1) + ".jpeg",
    };
  });

  function addToCart(bag) {
    setCart(function (currentCart) {
      return [...currentCart, bag];
    });
  }

  return (
    <main className="bags-page">
      <h1>HUSSAFA BAGS</h1>

      <div className="bags-grid">
        {bags.map(function (bag) {
          return (
            <div className="bag-card" key={bag.id}>
              <img src={bag.image} alt={bag.name} />

              <h2>{bag.name}</h2>

              <button onClick={() => addToCart(bag)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <p>Cart: {cart.length}</p>
    </main>
  );
}
