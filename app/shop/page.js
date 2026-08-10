const products = [
  {
    name: "Luxury Garments",
    price: "Coming Soon",
    description: "Elegant designs crafted for special occasions.",
  },
  {
    name: "Premium Jewellery",
    price: "Coming Soon",
    description: "Timeless jewellery with elegant luxury details.",
  },
  {
    name: "Luxury Perfumes",
    price: "Coming Soon",
    description: "Exclusive fragrances for your personality.",
  },
  {
    name: "Luxury Hand Bags",
    price: "Coming Soon",
    description:
      "Stylish handbags and colorful shoulder purses designed for everyday elegance.",
    image: "/bags-collection.jpg",
  },
];

export default function Shop() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <a
          href="/"
          style={{
            color: "#D4AF37",
            display: "inline-block",
            marginBottom: "50px",
          }}
        >
          ← Back to Home
        </a>

        <header
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "5px",
            }}
          >
            HUSSAFA BOUTIQUE
          </p>

          <h1
            style={{
              color: "#D4AF37",
              fontSize: "clamp(42px, 7vw, 64px)",
              margin: "15px 0",
            }}
          >
            Our Collection
          </h1>

          <p style={{ color: "#aaa", fontSize: "18px" }}>
            Luxury products selected for you.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {products.map((product) => (
            <article
              key={product.name}
              style={{
                border: "1px solid #8a6f20",
                borderRadius: "18px",
                padding: "25px",
                backgroundColor: "#080808",
              }}
            >
              <div
                style={{
                  height: "240px",
                  borderRadius: "12px",
                  backgroundColor: "#151515",
                  overflow: "hidden",
                  marginBottom: "25px",
                }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#D4AF37",
                      fontSize: "18px",
                    }}
                  >
                    HUSSAFA
                  </div>
                )}
              </div>

              <h2
                style={{
                  color: "#D4AF37",
                  fontSize: "25px",
                  marginBottom: "12px",
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  color: "#aaa",
                  lineHeight: "1.7",
                  minHeight: "55px",
                }}
              >
                {product.description}
              </p>

              <p
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "20px 0",
                }}
              >
                {product.price}
              </p>

              <a
                href="https://wa.me/447388454498"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "#16a34a",
                  color: "#fff",
                  padding: "13px 20px",
                  borderRadius: "28px",
                  fontWeight: "bold",
                }}
              >
                Order on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
