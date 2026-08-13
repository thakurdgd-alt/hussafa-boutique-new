"use client";

import { useState } from "react";

const jewelleryImages = [
  "/jew01.jpg",
  ...Array.from(
    { length: 166 },
    (_, index) => `/jew${index + 2}.jpg`
  ),
];

export default function JewelleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  function contactWhatsApp(itemNumber) {
    const message =
      "Hello, I am interested in Jewellery Item " +
      itemNumber +
      ". Please provide more details.";

    const url =
      "https://wa.me/447388454498?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f5ef",
        color: "#2b2723",
        fontFamily: "Arial, sans-serif",
        paddingBottom: "70px",
      }}
    >
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

        <div style={{ display: "flex", gap: "25px" }}>
          <a
            href="/"
            style={{ color: "#2b2723", textDecoration: "none" }}
          >
            Home
          </a>

          <a
            href="/shop"
            style={{ color: "#2b2723", textDecoration: "none" }}
          >
            Shop
          </a>
        </div>
      </nav>

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
          Contact us on WhatsApp for prices and details.
        </p>
      </section>

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

            return (
              <article
                key={image}
                style={{
                  backgroundColor: "#fffdf9",
                  border: "1px solid #e6ded2",
                  padding: "12px",
                }}
              >
                <button
                  onClick={() => setSelectedImage(image)}
                  style={{
                    width: "100%",
                    padding: 0,
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={image}
                    alt={"HUSSAFA Jewellery Item " + itemNumber}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </button>

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

                  <button
                    onClick={() => contactWhatsApp(itemNumber)}
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "#16a34a",
                      color: "#fff",
                      padding: "13px 10px",
                      borderRadius: "25px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Contact on WhatsApp
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
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
          Back To Shop
        </a>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Selected jewellery"
            style={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </main>
  );
}
