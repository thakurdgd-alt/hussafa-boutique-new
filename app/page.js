export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#f8f5ef",
        color: "#2b2723",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <style>{`
        .hussafa-slideshow {
          position: relative;
          width: 100%;
          max-width: 1200px;
          height: 520px;
          overflow: hidden;
          margin: 0 auto 50px auto;
          background: #e9e1d5;
          box-shadow: 0 15px 45px rgba(70, 55, 40, 0.12);
        }

     .hussafa-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1);
  animation: hussafaFade 35s infinite;
}

        .hussafa-slide:nth-child(1) {
          animation-delay: 0s;
        }

        .hussafa-slide:nth-child(2) {
          animation-delay: 5s;
        }

        .hussafa-slide:nth-child(3) {
          animation-delay: 10s;
        }

        .hussafa-slide:nth-child(4) {
          animation-delay: 15s;
        }

        .hussafa-slide:nth-child(5) {
          animation-delay: 20s;
        }

        .hussafa-slide:nth-child(6) {
          animation-delay: 25s;
        }

        .hussafa-slide:nth-child(7) {
          animation-delay: 30s;
        }

       @keyframes hussafaFade {
  0% {
    opacity: 0;
    transform: scale(1);
  }

  3% {
    opacity: 1;
    transform: scale(1);
  }

  14% {
    opacity: 1;
    transform: scale(1.06);
  }

  17% {
    opacity: 0;
    transform: scale(1.08);
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
}
        @media (max-width: 700px) {
          .hussafa-slideshow {
            height: 500px;
          }
        }

        @media (max-width: 480px) {
          .hussafa-slideshow {
            height: 430px;
          }
        }
      `}</style>

      <nav
        style={{
          padding: "22px 5%",
          borderBottom: "1px solid #e6ded2",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          backgroundColor: "#fffdf9",
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
            flexWrap: "wrap",
          }}
        >
          <a href="/" style={{ color: "#2b2723", textDecoration: "none" }}>
            Home
          </a>

          <a
            href="/shop"
            style={{ color: "#2b2723", textDecoration: "none" }}
          >
            Shop
          </a>

          <a
            href="#about"
            style={{ color: "#2b2723", textDecoration: "none" }}
          >
            About
          </a>

          <a
            href="#contact"
            style={{ color: "#2b2723", textDecoration: "none" }}
          >
            Contact
          </a>
        </div>
      </nav>

      <section
        style={{
          minHeight: "88vh",
          padding: "45px 20px 80px",
          textAlign: "center",
        }}
      >
        <div className="hussafa-slideshow">
          <img
            className="hussafa-slide"
            src="/home1.jpg"
            alt="HUSSAFA Boutique collection"
          />

          <img
            className="hussafa-slide"
            src="/home2.jpg"
            alt="HUSSAFA Boutique collection"
          />

          <img
            className="hussafa-slide"
            src="/home3.jpg"
            alt="HUSSAFA Boutique collection"
          />

          <img
            className="hussafa-slide"
            src="/home4.jpg"
            alt="HUSSAFA Boutique collection"
          />

          <img
            className="hussafa-slide"
            src="/home5.jpg"
            alt="HUSSAFA Boutique collection"
          />

          <img
            className="hussafa-slide"
            src="/home6.jpg"
            alt="HUSSAFA Boutique collection"
          />

          <img
            className="hussafa-slide"
            src="/home7.jpg"
            alt="HUSSAFA Boutique collection"
          />
        </div>

        <p
          style={{
            color: "#b08a45",
            letterSpacing: "6px",
            fontSize: "13px",
            marginBottom: "18px",
          }}
        >
          LUXURY FASHION HOUSE
        </p>

        <h1
          style={{
            color: "#2b2723",
            fontSize: "clamp(48px, 10vw, 105px)",
            lineHeight: "0.95",
            margin: "0",
            letterSpacing: "5px",
            fontWeight: "500",
          }}
        >
          HUSSAFA
          <br />
          <span style={{ color: "#b08a45" }}>BOUTIQUE</span>
        </h1>

        <p
          style={{
            color: "#70685f",
            maxWidth: "680px",
            fontSize: "18px",
            lineHeight: "1.8",
            margin: "30px auto 0",
          }}
        >
          Where elegance meets luxury. Discover premium garments,
          jewellery and exclusive fragrances designed for those
          who appreciate timeless style.
        </p>

        <a
          href="/shop"
          style={{
            display: "inline-block",
            marginTop: "35px",
            backgroundColor: "#b08a45",
            color: "#fff",
            padding: "16px 42px",
            borderRadius: "2px",
            fontWeight: "bold",
            textDecoration: "none",
            letterSpacing: "1px",
          }}
        >
          EXPLORE COLLECTION
        </a>
      </section>

      <section
        id="about"
        style={{
          padding: "100px 20px",
          backgroundColor: "#fffdf9",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#b08a45",
            letterSpacing: "4px",
          }}
        >
          OUR STORY
        </p>

        <h2
          style={{
            color: "#2b2723",
            fontSize: "42px",
            fontWeight: "500",
            margin: "15px 0 25px",
          }}
        >
          About HUSSAFA
        </h2>

        <p
          style={{
            color: "#70685f",
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

      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#f8f5ef",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#2b2723",
            fontSize: "38px",
            fontWeight: "500",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fffdf9",
              border: "1px solid #e6ded2",
              padding: "35px 25px",
            }}
          >
            <h3 style={{ color: "#b08a45" }}>Premium Quality</h3>

            <p
              style={{
                color: "#70685f",
                lineHeight: "1.7",
              }}
            >
              Carefully selected luxury collections.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fffdf9",
              border: "1px solid #e6ded2",
              padding: "35px 25px",
            }}
          >
            <h3 style={{ color: "#b08a45" }}>Elegant Designs</h3>

            <p
              style={{
                color: "#70685f",
                lineHeight: "1.7",
              }}
            >
              Modern styles with timeless elegance.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#fffdf9",
              border: "1px solid #e6ded2",
              padding: "35px 25px",
            }}
          >
            <h3 style={{ color: "#b08a45" }}>Worldwide Service</h3>

            <p
              style={{
                color: "#70685f",
                lineHeight: "1.7",
              }}
            >
              Serving customers around the world.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "100px 20px",
          backgroundColor: "#fffdf9",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#b08a45",
            letterSpacing: "4px",
          }}
        >
          GET IN TOUCH
        </p>

        <h2
          style={{
            color: "#2b2723",
            fontSize: "40px",
            fontWeight: "500",
            margin: "15px 0",
          }}
        >
          Ready To Order?
        </h2>

        <p
          style={{
            color: "#70685f",
            marginBottom: "30px",
          }}
        >
          Contact us directly through WhatsApp.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
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
              textDecoration: "none",
            }}
          >
            WhatsApp: +44 7388 454498
          </a>

          <a
            href="mailto:umairaabdullah2018@gmail.com"
            style={{
              color: "#b08a45",
              fontSize: "17px",
            }}
          >
            Email: umairaabdullah2018@gmail.com
          </a>

          <a
            href="https://vm.tiktok.com/ZS9hcEuhFQLGY-XSUUE/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2b2723",
              border: "1px solid #d8cdbf",
              padding: "12px 25px",
              borderRadius: "25px",
              textDecoration: "none",
            }}
          >
            Follow us on TikTok
          </a>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #e6ded2",
          padding: "30px 20px",
          textAlign: "center",
          color: "#8a8178",
          backgroundColor: "#f8f5ef",
        }}
      >
        © 2026 HUSSAFA BOUTIQUE
      </footer>
    </main>
  );
}
