```jsx
"use client";

import { useState } from "react";

export default function BagsPage() {
  const [cart, setCart] = useState([]);

  const bags = Array.from({ length: 51 }, (_, i) => ({
    id: i + 1,
    name: `Luxury Bag ${i + 1}`,
    image: `/bag${i + 1}.jpeg`,
  }));

  const addToCart = (bag) => {
    setCart((currentCart) => [...currentCart, bag]);
  };

  return (
    <main className="bags-page">
      <h1>HUSSAFA BAGS</h1>

      <div className="bags-grid">
        {bags.map((bag) => (
          <div className="bag-card" key={bag.id}>
            <img src={bag.image} alt={bag.name} />

            <h2>{bag.name}</h2>

            <button onClick={() => addToCart(bag)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-count">
        Cart: {cart.length}
      </div>
    </main>
  );
}
```
