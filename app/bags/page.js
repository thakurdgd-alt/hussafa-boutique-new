"use client";

import { useState } from "react";

const bagImages = Array.from(
  { length: 51 },
  (_, index) => `/bag${index + 1}.jpeg`
);

export default function BagsPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (itemNumber) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.number === itemNumber
      );

      if (existing) {
        return currentCart.map((item) =>
          item.number === itemNumber
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentCart,
        {
          number: itemNumber,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (itemNumber) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.number === itemNumber
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemNumber) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.number === itemNumber
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemNumber) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.number !== itemNumber)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const orderOnWhatsApp = () => {
    if (cart.length === 0) return;

    const items = cart
      .map(
        (item) =>
          `Luxury Bag ${item.number} x ${item.quantity}`
      )
      .join("\n");

    const message =
      `Hello HUSSAFA BOUTIQUE,\n\n` +
      `I would like to order the following bags:\n\n` +
      `${items}\n\n` +
      `Please provide the prices and further details.`;

    const whatsappUrl =
      `https://wa.me/447388454498?text=${encodeURIComponent(
        message
      )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f5ef",
        color: "#2b2723",
        fontFamily: "Arial, sans-serif",
        paddingBottom: "100px",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          padding: "22px 5%",
          backgroundColor: "#fffdf9",
          borderBottom: "1px solid #e6ded2",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <a
          href="/"
          style={{
            color: "#b08a45",
            fontSize: "25px",
            fontWeight: "bold",
            letterSpacing: "4px",
            textDecoration: "none",
          }}
        >
          HUSSAFA
        </a>

        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              color: "#2b2723",
              textDecoration: "none",
            }}
          >
            Home
          </a>

          <a
            href="/shop"
            style={{
              color: "#2b2723",
              textDecoration: "none",
            }}
          >
            Shop
          </a>

          <a
            href="#cart"
            style={{
              color: "#fff",
              backgroundColor: "#b08a45",
              padding: "10px 18px",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      {/* Header */}
      <section
        style={{
          textAlign: "center",
          padding: "65px 20px 45px",
        }}
      >
        <p
          style={{
            color: "#b08a45",
            letterSpacing: "5px",
            fontSize: "13px",
          }}
        >
          HUSSAFA BOUTIQUE
        </p>

        <h1
          style={{
            color: "#2b2723",
            fontSize: "clamp(40px, 7vw, 65px)",
            fontWeight: "500",
            margin: "15px 0",
          }}
        >
          Luxury Hand Bags
        </h1>

        <p
          style={{
            color: "#70685f",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Discover our elegant luxury handbag collection.
          Select your favourite bags and add them to your
          shopping cart.
        </p>
      </section>

      {/* Bags Grid */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px",
          }}
        >
          {bagImages.map((image, index) => {
            const itemNumber = index + 1;

            const inCart = cart.find(
              (item) => item.number === itemNumber
            );

            return (
              <article
                key={image}
                style={{
                  backgroundColor: "#fffdf9",
                  border: inCart
                    ? "2px solid #b08a45"
                    : "1px solid #e6ded2",
                  padding: "12px",
                  boxShadow: inCart
                    ? "0 8px 25px rgba(176,138,69,0.18)"
                    : "none",
                  transition: "0.2s",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    src={image}
                    alt={`HUSSAFA Luxury Bag ${itemNumber}`}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {inCart && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        backgroundColor: "#b08a45",
                        color: "#fff",
                        padding: "7px 12px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      IN CART
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div
                  style={{
                    textAlign: "center",
                    padding: "18px 5px 8px",
                  }}
                >
                  <h2
                    style={{
                      color: "#2b2723",
                      fontSize: "18px",
                      fontWeight: "500",
                      margin: "0 0 10px",
                    }}
                  >
                    Luxury Bag {itemNumber}
                  </h2>

                  <p
                    style={{
                      color: "#70685f",
                      fontSize: "14px",
                      marginBottom: "15px",
                    }}
                  >
                    Price available on WhatsApp
                  </p>

                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(itemNumber)}
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: inCart
                        ? "#8d6d35"
                        : "#b08a45",
                      color: "#fff",
                      padding: "13px 10px",
                      borderRadius: "25px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {inCart
                      ? "✓ Add Another"
                      : "🛒 Add to Cart"}
                  </button>

                  {/* WhatsApp individual */}
                  <a
                    href={`https://wa.me/447388454498?text=${encodeURIComponent(
                      `Hello HUSSAFA BOUTIQUE, I am interested in Luxury Bag ${itemNumber}. Please provide the price and details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      marginTop: "10px",
                      backgroundColor: "#16a34a",
                      color: "#fff",
                      padding: "11px 10px",
                      borderRadius: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    WhatsApp Price
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Cart Section */}
      <section
        id="cart"
        style={{
          maxWidth: "900px",
          margin: "80px auto 0",
          padding: "35px 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fffdf9",
            border: "1px solid #e6ded2",
            padding: "30px",
          }}
        >
          <h2
            style={{
              color: "#b08a45",
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "500",
              marginBottom: "25px",
            }}
          >
            Your Cart
          </h2>

          {cart.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#70685f",
                padding: "20px",
              }}
            >
              Your cart is empty. Select bags above to add
              them here.
            </p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.number}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "15px",
                    padding: "15px 0",
                    borderBottom: "1px solid #e6ded2",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <strong
                      style={{
                        color: "#2b2723",
                      }}
                    >
                      Luxury Bag {item.number}
                    </strong>

                    <p
                      style={{
                        color: "#70685f",
                        margin: "5px 0 0",
                        fontSize: "13px",
                      }}
                    >
                      Price: Contact on WhatsApp
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <button
                      onClick={() =>
                        decreaseQuantity(item.number)
                      }
                      style={{
                        width: "34px",
                        height: "34px",
                        border: "1px solid #d8cdbf",
                        backgroundColor: "#f8f5ef",
                        cursor: "pointer",
                        fontSize: "18px",
                      }}
                    >
                      −
                    </button>

                    <strong>{item.quantity}</strong>

                    <button
                      onClick={() =>
                        increaseQuantity(item.number)
                      }
                      style={{
                        width: "34px",
                        height: "34px",
                        border: "1px solid #d8cdbf",
                        backgroundColor: "#f8f5ef",
                        cursor: "pointer",
                        fontSize: "18px",
                      }}
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(item.number)
                      }
                      style={{
                        marginLeft: "8px",
                        border: "none",
                        backgroundColor: "#b42318",
                        color: "#fff",
                        padding: "8px 12px",
                        cursor: "pointer",
                        borderRadius: "5px",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* WhatsApp Cart Order */}
              <button
                onClick={orderOnWhatsApp}
                style={{
                  width: "100%",
                  marginTop: "25px",
                  border: "none",
                  backgroundColor: "#16a34a",
                  color: "#fff",
                  padding: "16px 20px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                💬 Order Selected Bags on WhatsApp
              </button>
            </>
          )}
        </div>
      </section>

      {/* Back to Shop */}
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <a
          href="/shop"
          style={{
            display: "inline-block",
            backgroundColor: "#b08a45",
            color: "#fff",
            padding: "15px 35px",
            textDecoration: "none",
          }}
        >
          ← Back To Shop
        </a>
      </div>
    </main>
  );
}
