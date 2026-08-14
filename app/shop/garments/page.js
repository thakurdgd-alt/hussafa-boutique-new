"use client";

import { useRef, useState } from "react";

const garmentVideos = [
  "/garment-video-1.mp4",
  "/garment-video-2.mp4",
  "/garment-video-3.mp4",
  "/garment-video-4.mp4",
  "/garment-video-5.mp4",
];

export default function Garments() {
  const videos = useRef([]);
  const [cart, setCart] = useState([]);

  const [customer, setCustomer] = useState({
  name: "",
  contact: "",
  email: "",
  address: "",
  city: "",
  postcode: "",
  country: "",
});

  const pauseOtherVideos = (currentVideo) => {
    videos.current.forEach((video) => {
      if (video && video !== currentVideo) {
        video.pause();
      }
    });
  };

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
    if (cart.length === 0) {
      alert("Please add at least one garment to your cart.");
      return;
    }

    if (
  !customer.name.trim() ||
  !customer.contact.trim() ||
  !customer.email.trim() ||
  !customer.address.trim() ||
  !customer.city.trim() ||
  !customer.postcode.trim() ||
  !customer.country.trim()
) {
  alert("Please complete all customer details.");
  return;
}

    const items = cart
      .map(
        (item) =>
          `Luxury Garment ${item.number} x ${item.quantity}`
      )
      .join("\n");

    const message =
      `Hello HUSSAFA BOUTIQUE,\n\n` +
      `I would like to order the following garments:\n\n` +
      `${items}\n\n` +
      `Customer Details:\n` +
      `Name: ${customer.name}\n` +
`Contact: ${customer.contact}\n` +
`Email: ${customer.email}\n` +
`Address: ${customer.address}\n` +
`City: ${customer.city}\n` +
`Postcode: ${customer.postcode}\n` +
`Country: ${customer.country}\n\n` +
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
            display: "inline-block",
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
            flexWrap: "wrap",
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
          Luxury Garments
        </h1>

        <p
          style={{
            color: "#70685f",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Discover our latest luxury garment collection.
          Select your favourite garments and add them to
          your shopping cart.
        </p>
      </section>

      {/* Garments Grid */}
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
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {garmentVideos.map((video, index) => {
            const itemNumber = index + 1;

            const inCart = cart.find(
              (item) => item.number === itemNumber
            );

            return (
              <article
                key={video}
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
                {/* Video */}
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "#f8f5ef",
                  }}
                >
                  <video
                    ref={(el) => {
                      videos.current[index] = el;
                    }}
                    src={video}
                    controls
                    playsInline
                    onPlay={(e) =>
                      pauseOtherVideos(e.currentTarget)
                    }
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "2px",
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
                    Luxury Garment {itemNumber}
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

                  {/* WhatsApp Price */}
                  <a
                    href={`https://wa.me/447388454498?text=${encodeURIComponent(
                      `Hello HUSSAFA BOUTIQUE, I am interested in Luxury Garment ${itemNumber}. Please provide the price and details.`
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

      {/* Cart */}
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
              Your cart is empty. Select garments above
              to add them here.
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
                      Luxury Garment {item.number}
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

              {/* Customer Details */}
              <div
                style={{
                  marginTop: "35px",
                  borderTop: "1px solid #e6ded2",
                  paddingTop: "30px",
                }}
              >
                <h3
                  style={{
                    color: "#b08a45",
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: "500",
                    marginBottom: "20px",
                  }}
                >
                  Customer Details
                </h3>

                <input
                  type="text"
                  placeholder="Full Name"
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      name: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "14px",
                    marginBottom: "12px",
                    border: "1px solid #d8cdbf",
                    backgroundColor: "#f8f5ef",
                    color: "#2b2723",
                    fontSize: "15px",
                  }}
                />

                <input
                  type="tel"
                  placeholder="Contact Number"
<input
  type="email"
  placeholder="Email Address"
  value={customer.email}
  onChange={(e) =>
    setCustomer({
      ...customer,
      email: e.target.value,
    })
  }
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "12px",
    border: "1px solid #d8cdbf",
    backgroundColor: "#f8f5ef",
    color: "#2b2723",
    fontSize: "15px",
  }}
/>
                  value={customer.contact}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      contact: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "14px",
                    marginBottom: "12px",
                    border: "1px solid #d8cdbf",
                    backgroundColor: "#f8f5ef",
                    color: "#2b2723",
                    fontSize: "15px",
                  }}
                />

                <textarea
                  placeholder="Delivery Address"
<input
  type="text"
  placeholder="City"
  value={customer.city}
  onChange={(e) =>
    setCustomer({
      ...customer,
      city: e.target.value,
    })
  }
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "12px",
    border: "1px solid #d8cdbf",
    backgroundColor: "#f8f5ef",
    color: "#2b2723",
    fontSize: "15px",
  }}
/>

<input
  type="text"
  placeholder="Postcode"
  value={customer.postcode}
  onChange={(e) =>
    setCustomer({
      ...customer,
      postcode: e.target.value,
    })
  }
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "12px",
    border: "1px solid #d8cdbf",
    backgroundColor: "#f8f5ef",
    color: "#2b2723",
    fontSize: "15px",
  }}
/>

<input
  type="text"
  placeholder="Country"
  value={customer.country}
  onChange={(e) =>
    setCustomer({
      ...customer,
      country: e.target.value,
    })
  }
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    marginBottom: "15px",
    border: "1px solid #d8cdbf",
    backgroundColor: "#f8f5ef",
    color: "#2b2723",
    fontSize: "15px",
  }}
/>
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      address: e.target.value,
                    })
                  }
                  rows="4"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "14px",
                    marginBottom: "15px",
                    border: "1px solid #d8cdbf",
                    backgroundColor: "#f8f5ef",
                    color: "#2b2723",
                    fontSize: "15px",
                    resize: "vertical",
                  }}
                />

                <p
                  style={{
                    color: "#70685f",
                    fontSize: "13px",
                    textAlign: "center",
                    lineHeight: "1.6",
                  }}
                >
                  Price will be confirmed through WhatsApp.
                  Payment is not required on the website at
                  this stage.
                </p>

                <button
                  onClick={orderOnWhatsApp}
                  style={{
                    width: "100%",
                    marginTop: "15px",
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
                  💬 Send Order on WhatsApp
                </button>
              </div>
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
