export default function Shop() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 20px",
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

        <div
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
              fontSize: "50px",
              margin: "15px 0",
            }}
          >
            Our Collection
          </h1>

          <p style={{ color: "#aaa" }}>
            Discover our luxury collection.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              border: "1px solid #D4AF37",
              borderRadius: "15px",
              padding: "35px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#D4AF37" }}>
              Luxury Garments
            </h2>

            <p style={{ color: "#aaa", lineHeight: "1.7" }}>
              Elegant designs for every occasion.
            </p>

            <a
              href="https://wa.me/447388454498"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "20px",
                backgroundColor: "#16a34a",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "25px",
              }}
            >
              Order on WhatsApp
            </a>
          </div>

          <div
            style={{
              border: "1px solid #D4AF37",
              borderRadius: "15px",
              padding: "35px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#D4AF37" }}>
              Premium Jewellery
            </h2>

            <p style={{ color: "#aaa", lineHeight: "1.7" }}>
              Timeless beauty and luxury details.
            </p>

            <a
              href="https://wa.me/447388454498"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "20px",
                backgroundColor: "#16a34a",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "25px",
              }}
            >
              Order on WhatsApp
            </a>
          </div>

          <div
            style={{
              border: "1px solid #D4AF37",
              borderRadius: "15px",
              padding: "35px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#D4AF37" }}>
              Luxury Perfumes
            </h2>

            <p style={{ color: "#aaa", lineHeight: "1.7" }}>
              Exclusive fragrances for your personality.
            </p>

            <a
              href="https://wa.me/447388454498"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "20px",
                backgroundColor: "#16a34a",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "25px",
              }}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
