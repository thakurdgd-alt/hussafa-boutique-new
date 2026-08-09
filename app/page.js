export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          padding: "20px",
          borderBottom: "1px solid #222",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            color: "#D4AF37",
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          HUSSAFA
        </a>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
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
          minHeight: "85vh",
          padding: "80px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "6px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          LUXURY FASHION HOUSE
        </p>

        <h1
          style={{
            color: "#D4AF37",
            fontSize: "clamp(55px, 12vw, 110px)",
            lineHeight: "0.95",
            margin: "0",
            letterSpacing: "3px",
          }}
        >
          HUSSAFA
          <br />
          BOUTIQUE
        </h1>

        <p
          style={{
            color: "#bbb",
            maxWidth: "650px",
            fontSize: "19px",
            lineHeight: "1.8",
            marginTop: "30px",
          }}
        >
          Where elegance meets luxury. Discover premium garments,
          jewellery and exclusive fragrances designed for those
          who appreciate timeless style.
        </p>

        <a
          href="/shop"
          style={{
            marginTop: "35px",
            backgroundColor: "#D4AF37",
            color: "#000",
            padding: "16px 40px",
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
          padding: "90px 20px",
          backgroundColor: "#080808",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "4px",
          }}
        >
          OUR STORY
        </p>

        <h2
          style={{
            color: "#D4AF37",
            fontSize: "42px",
            margin: "15px 0 25px",
          }}
        >
          About HUSSAFA
        </h2>

        <p
          style={{
            color: "#aaa",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontSize: "17px",
          }}
        >
          HUSSAFA BOUTIQUE is dedicated to bringing elegance,
          quality and luxury together. Our collection is created
          for customers who value beautiful designs and timeless
          sophistication.
        </p>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            fontSize: "38px",
            marginBottom: "50px",
          }}
        >
          Why Choose HUSSAFA?
        </h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              border: "1px solid #333",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3 style={{ color: "#D4AF37" }}>
              Premium Quality
            </h3>

            <p style={{ color: "#999", lineHeight: "1.7" }}>
              Carefully selected luxury collections.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #333",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3 style={{ color: "#D4AF37" }}>
              Elegant Designs
            </h3>

            <p style={{ color: "#999", lineHeight: "1.7" }}>
              Modern styles with timeless elegance.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #333",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3 style={{ color: "#D4AF37" }}>
              Worldwide Service
            </h3>

            <p style={{ color: "#999", lineHeight: "1.7" }}>
              Serving customers around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "90px 20px",
          backgroundColor: "#080808",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            letterSpacing: "4px",
          }}
        >
          GET IN TOUCH
        </p>

        <h2
          style={{
            color: "#D4AF37",
            fontSize: "40px",
            margin: "15px 0",
          }}
        >
          Ready To Order?
        </h2>

        <p style={{ color: "#aaa", marginBottom: "30px" }}>
          Contact us directly through WhatsApp.
        </p>

        <a
          href="https://wa.me/447388454498"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#16a34a",
            color: "#fff",
            padding: "15px 30px",
            borderRadius: "30px",
            fontWeight: "bold",
          }}
        >
          Order On WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #222",
          padding: "30px 20px",
          textAlign: "center",
          color: "#777",
        }}
      >
        © 2026 HUSSAFA BOUTIQUE
      </footer>
    </main>
  );
}
