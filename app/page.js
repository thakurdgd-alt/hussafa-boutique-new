export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav
        style={{
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #333",
          backgroundColor: "#000",
        }}
      >
        <h2 style={{ color: "#D4AF37", margin: 0 }}>
          HUSSAFA
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
          }}
        >
          <a href="/" style={{ color: "#fff" }}>
            Home
          </a>

          <a href="/shop" style={{ color: "#fff" }}>
            Shop
          </a>

          <a href="#about" style={{ color: "#fff" }}>
            About
          </a>

          <a href="#contact" style={{ color: "#fff" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "5px",
            marginBottom: "15px",
          }}
        >
          LUXURY FASHION HOUSE
        </p>

        <h1
          style={{
            color: "#D4AF37",
            fontSize: "clamp(48px, 8vw, 90px)",
            lineHeight: "1",
            margin: "0 0 25px",
          }}
        >
          HUSSAFA
          <br />
          BOUTIQUE
        </h1>

        <p
          style={{
            color: "#ccc",
            maxWidth: "600px",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          Where elegance meets luxury. Discover premium garments,
          jewellery and exclusive fragrances.
        </p>

        <a
          href="/shop"
          style={{
            marginTop: "30px",
            backgroundColor: "#D4AF37",
            color: "#000",
            padding: "15px 35px",
            borderRadius: "30px",
            fontWeight: "bold",
          }}
        >
          Explore Collection
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        <h2 style={{ color: "#D4AF37", fontSize: "36px" }}>
          About HUSSAFA
        </h2>

        <p
          style={{
            color: "#aaa",
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          HUSSAFA BOUTIQUE brings together elegant fashion,
          premium jewellery and exclusive fragrances for customers
          who appreciate timeless luxury.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#D4AF37", fontSize: "36px" }}>
          Contact Us
        </h2>

        <p style={{ color: "#aaa", marginBottom: "25px" }}>
          Ready to discover your next luxury piece?
        </p>

        <a
          href="https://wa.me/447388454498"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#16a34a",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "30px",
            fontWeight: "bold",
          }}
        >
          Order on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #333",
          padding: "25px",
          textAlign: "center",
          color: "#777",
        }}
      >
        © 2026 HUSSAFA BOUTIQUE
      </footer>
    </main>
  );
}
