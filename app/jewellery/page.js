"use client";

const jewelleryImages = [
  "/jew01.jpg",
  "/jew2.jpg",
  "/jew3.jpg",
  "/jew4.jpg",
  "/jew5.jpg",
  "/jew6.jpg",
  "/jew7.jpg",
  "/jew8.jpg",
  "/jew9.jpg",
  "/jew10.jpg",
];

export default function JewelleryPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f5ef",
        color: "#2b2723",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px 70px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <a
          href="/shop"
          style={{
            color: "#b08a45",
            textDecoration: "none",
          }}
        >
          ← Back to Shop
        </a>

        <header
          style={{
            textAlign: "center",
            padding: "50px 0",
          }}
        >
          <p
            style={{
              color: "#b08a45",
              letterSpacing: "5px",
            }}
          >
            HUSSAFA BOUTIQUE
          </p>

          <h1
            style={{
              color: "#2b2723",
              fontSize: "50px",
              fontWeight: "500",
            }}
          >
            Premium Jewellery
          </h1>

          <p style={{ color: "#70685f" }}>
            Discover our elegant jewellery collection.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {jewelleryImages.map((image, index) => (
            <div
              key={image}
              style={{
                backgroundColor: "#fffdf9",
                border: "1px solid #e6ded2",
                padding: "12px",
              }}
            >
              <img
                src={image}
                alt={`Jewellery Item ${index + 1}`}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <h2
                style={{
                  textAlign: "center",
                  color: "#2b2723",
                  fontSize: "18px",
                }}
              >
                Jewellery Item {index + 1}
              </h2>

              <a
                href="https://wa.me/447388454498"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#16a34a",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Contact on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
