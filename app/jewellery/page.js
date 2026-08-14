"use client";

import { useState } from "react";

const jewelleryImages = [
  "/jew01.jpg",
  ...Array.from({ length: 166 }, (_, index) => `/jew${index + 2}.jpg`),
];

export default function JewelleryPage() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    country: "",
  });

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

  const handleCustomerChange = (field, value) => {
    setCustomer((currentCustomer) => ({
      ...currentCustomer,
      [field]: value,
    }));
  };

  const placeOrder = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Please add at least one jewellery item to your cart.");
      return;
    }

    const items = cart
      .map(
        (item) =>
          `Jewellery Item ${item.number} x ${item.quantity}`
      )
      .join("\n");

    const message =
      `Hello HUSSAFA BOUTIQUE,\n\n` +
      `NEW WEBSITE ORDER\n\n` +
      `CUSTOMER DETAILS\n` +
      `Name: ${customer.name}\n` +
      `Contact: ${customer.phone}\n` +
      `Email: ${customer.email}\n` +
      `Address: ${customer.address}\n` +
      `City: ${customer.city}\n` +
      `Postcode: ${customer.postcode}\n` +
      `Country: ${customer.country}\n\n` +
      `ORDER DETAILS\n` +
      `${items}\n\n` +
      `Please provide the prices and further details.\n` +
      `Payment has not been made online.`;

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
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/hussafa-logo.png"
            alt="HUSSAFA BOUTIQUE"
            style={{
              width: "95px",
              height: "auto",
              display: "block",
            }}
          />
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
          Premium Jewellery
        </h1>

        <p
          style={{
            color: "#70685f",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Discover our elegant jewellery collection.
          Select your favourite pieces and add them to your
          shopping cart.
        </p>
      </section>

      {/* Jewellery Grid */}
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
          {jewelleryImages.map((image, index) => {
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
                    alt={`HUSSAFA Jewellery Item ${itemNumber}`}
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
                    Jewellery Item {itemNumber}
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
                      `Hello HUSSAFA BOUTIQUE, I am interested in Jewellery Item ${itemNumber}. Please provide the price and details.`
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
              Your cart is empty. Select jewellery items
              above to add them here.
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
                      Jewellery Item {item.number}
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

              {/* Checkout Button */}
              <button
                onClick={() => setShowCheckout(true)}
                style={{
                  width: "100%",
                  marginTop: "25px",
                  border: "none",
                  backgroundColor: "#b08a45",
                  color: "#fff",
                  padding: "16px 20px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                🛍️ Continue to Checkout
              </button>
            </>
          )}
        </div>
      </section>

      {/* Checkout */}
      {showCheckout && cart.length > 0 && (
        <section
          style={{
            maxWidth: "800px",
            margin: "50px auto 0",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fffdf9",
              border: "1px solid #e6ded2",
              padding: "35px",
              boxShadow: "0 10px 35px rgba(70,55,40,0.08)",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#b08a45",
                fontSize: "32px",
                fontWeight: "500",
                marginBottom: "10px",
              }}
            >
              Customer Details
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#70685f",
                lineHeight: "1.7",
                marginBottom: "30px",
              }}
            >
              Please enter your delivery details below.
              Product prices will be confirmed through WhatsApp.
            </p>

            <form onSubmit={placeOrder}>
              {/* Name */}
              <label
                style={{
                  display: "block",
                  color: "#2b2723",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Full Name *
              </label>

              <input
                type="text"
                required
                value={customer.name}
                onChange={(event) =>
                  handleCustomerChange(
                    "name",
                    event.target.value
                  )
                }
                placeholder="Enter your full name"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  marginBottom: "20px",
                  border: "1px solid #d8cdbf",
                  backgroundColor: "#f8f5ef",
                  color: "#2b2723",
                  fontSize: "15px",
                  outline: "none",
                }}
              />

              {/* Phone */}
              <label
                style={{
                  display: "block",
                  color: "#2b2723",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Contact Number *
              </label>

              <input
                type="tel"
                required
                value={customer.phone}
                onChange={(event) =>
                  handleCustomerChange(
                    "phone",
                    event.target.value
                  )
                }
                placeholder="Enter your contact number"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  marginBottom: "20px",
                  border: "1px solid #d8cdbf",
                  backgroundColor: "#f8f5ef",
                  color: "#2b2723",
                  fontSize: "15px",
                  outline: "none",
                }}
              />

              {/* Email */}
              <label
                style={{
                  display: "block",
                  color: "#2b2723",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Email Address *
              </label>

              <input
                type="email"
                required
                value={customer.email}
                onChange={(event) =>
                  handleCustomerChange(
                    "email",
                    event.target.value
                  )
                }
                placeholder="Enter your email address"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  marginBottom: "20px",
                  border: "1px solid #d8cdbf",
                  backgroundColor: "#f8f5ef",
                  color: "#2b2723",
                  fontSize: "15px",
                  outline: "none",
                }}
              />

              {/* Address */}
              <label
                style={{
                  display: "block",
                  color: "#2b2723",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Full Delivery Address *
              </label>

              <textarea
                required
                value={customer.address}
                onChange={(event) =>
                  handleCustomerChange(
                    "address",
                    event.target.value
                  )
                }
                placeholder="House number, street, area..."
                rows="4"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  marginBottom: "20px",
                  border: "1px solid #d8cdbf",
                  backgroundColor: "#f8f5ef",
                  color: "#2b2723",
                  fontSize: "15px",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "Arial, sans-serif",
                }}
              />

              {/* City */}
              <label
                style={{
                  display: "block",
                  color: "#2b2723",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                City *
              </label>

              <input
                type="text"
                required
                value={customer.city}
                onChange={(event) =>
                  handleCustomerChange(
                    "city",
                    event.target.value
                  )
                }
                placeholder="Enter your city"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  marginBottom: "20px",
                  border: "1px solid #d8cdbf",
                  backgroundColor: "#f8f5ef",
                  color: "#2b2723",
                  fontSize: "15px",
                  outline: "none",
                }}
              />

              {/* Postcode */}
              <label
                style={{
                  display: "block",
                  color: "#2b2723",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Postcode *
              </label>

              <input
                type="text"
                required
                value={customer.postcode}
                onChange={(event) =>
                  handleCustomerChange(
                    "postcode",
                    event.target.value
                  )
                }
                placeholder="Enter your postcode"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  marginBottom: "20px",
                  border: "1px solid #d8cdbf",
                  backgroundColor: "#f8f5ef",
                  color: "#2b2723",
                  fontSize: "15px",
                  outline: "none",
                }}
              />

              {/* Country */}
              <label
                style={{
                  display: "block",
                  color: "#2b2723",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Country *
              </label>

              <input
                type="text"
                required
                value={customer.country}
                onChange={(event) =>
                  handleCustomerChange(
                    "country",
                    event.target.value
                  )
                }
                placeholder="Enter your country"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "14px",
                  marginBottom: "25px",
                  border: "1px solid #d8cdbf",
                  backgroundColor: "#f8f5ef",
                  color: "#2b2723",
                  fontSize: "15px",
                  outline: "none",
                }}
              />

              {/* Order Summary */}
              <div
                style={{
                  backgroundColor: "#f8f5ef",
                  border: "1px solid #e6ded2",
                  padding: "20px",
                  marginBottom: "25px",
                }}
              >
                <h3
                  style={{
                    color: "#b08a45",
                    marginTop: "0",
                    marginBottom: "15px",
                  }}
                >
                  Your Order
                </h3>

                {cart.map((item) => (
                  <p
                    key={item.number}
                    style={{
                      color: "#70685f",
                      margin: "8px 0",
                    }}
                  >
                    Jewellery Item {item.number} ×{" "}
                    {item.quantity}
                  </p>
                ))}

                <p
                  style={{
                    color: "#b08a45",
                    fontWeight: "bold",
                    marginTop: "15px",
                    paddingTop: "15px",
                    borderTop: "1px solid #d8cdbf",
                  }}
                >
                  Price: Please contact us on WhatsApp
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
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
                💬 Place Order on WhatsApp
              </button>

              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                style={{
                  width: "100%",
                  marginTop: "12px",
                  border: "1px solid #d8cdbf",
                  backgroundColor: "#fffdf9",
                  color: "#70685f",
                  padding: "14px 20px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                ← Back to Cart
              </button>
            </form>
          </div>
        </section>
      )}

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
