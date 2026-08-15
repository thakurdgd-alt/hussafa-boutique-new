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
      .hussafa-marquee {
  width: 100%;
  overflow: hidden;
  margin: 0 auto 25px auto;
  padding: 12px 0;
  background: #fffdf9;
  border-top: 1px solid #e6ded2;
  border-bottom: 1px solid #e6ded2;
}

.hussafa-marquee-track {
  display: inline-block;
  white-space: nowrap;
  color: #b08a45;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  animation: hussafaMarquee 40s linear infinite;
}

@keyframes hussafaMarquee {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}
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
        <div className="hussafa-marquee">
  <div className="hussafa-marquee-track">
    ✨ HUSSAFA BOUTIQUE • LUXURY FASHION HOUSE • PREMIUM COLLECTION • EXCLUSIVE DESIGNS • WORLDWIDE SERVICE • EMAIL: umairaabdullah2018@gmail.com • ✨
  </div>
</div>
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
  }}
>
  <div
    style={{
      maxWidth: "950px",
      margin: "0 auto",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          color: "#b08a45",
          letterSpacing: "4px",
          fontSize: "13px",
          marginBottom: "15px",
        }}
      >
        OUR STORY
      </p>

      <h2
        style={{
          color: "#2b2723",
          fontSize: "clamp(34px, 6vw, 48px)",
          fontWeight: "500",
          margin: "0 0 35px",
        }}
      >
        About HUSSAFA BOUTIQUE
      </h2>
    </div>

    <div
      style={{
        color: "#70685f",
        lineHeight: "1.9",
        fontSize: "17px",
      }}
    >
      <p>
        At <strong style={{ color: "#2b2723" }}>HUSSAFA BOUTIQUE</strong>,
        we believe every outfit is more than just clothing — it is an
        expression of elegance, confidence, culture, and individuality.
      </p>

      <p>
        Founded with a passion for refined fashion, HUSSAFA BOUTIQUE
        brings together timeless Pakistani aesthetics and contemporary
        style to create pieces that celebrate the modern woman. Our
        collections are thoughtfully curated for women who appreciate
        quality, sophistication, and effortless elegance.
      </p>

      <p>
        From <strong style={{ color: "#2b2723" }}>luxury pret and festive wear
        to elegant traditional ensembles</strong>, every piece is selected
        with attention to detail, design, fabric, and finishing. We believe
        that beautiful fashion should feel as special as it looks, whether
        you are dressing for Eid, a wedding, a celebration, or an
        unforgettable everyday moment.
      </p>

      <div
        style={{
          margin: "55px 0",
          padding: "40px 25px",
          backgroundColor: "#f8f5ef",
          border: "1px solid #e6ded2",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#2b2723",
            fontSize: "28px",
            fontWeight: "500",
            margin: "0 0 20px",
          }}
        >
          Our Design Philosophy
        </h3>

        <p
          style={{
            color: "#b08a45",
            letterSpacing: "2px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          ELEGANCE&nbsp;&nbsp; — &nbsp;&nbsp;CRAFTSMANSHIP&nbsp;&nbsp; — &nbsp;&nbsp;INDIVIDUALITY
        </p>
      </div>

      <p>
        Our approach is inspired by three core values: elegance,
        craftsmanship, and individuality. We celebrate the beauty of
        Pakistani fashion while embracing modern silhouettes, refined
        details, and contemporary styling. Traditional influences are
        thoughtfully combined with modern aesthetics to create outfits
        that feel both graceful and relevant.
      </p>

      <p>
        From delicate embroidery and beautiful fabrics to carefully
        considered cuts and finishing touches, every detail reflects our
        commitment to bringing you fashion that is sophisticated,
        versatile, and memorable.
      </p>

      <h3
        style={{
          color: "#2b2723",
          fontSize: "30px",
          fontWeight: "500",
          marginTop: "55px",
          marginBottom: "20px",
        }}
      >
        Fashion With a Personal Touch
      </h3>

      <p>
        At HUSSAFA BOUTIQUE, we believe fashion should help every woman
        express her own personality and confidence. That is why we aim to
        offer a carefully selected range of styles that can become part
        of your most special moments.
      </p>

      <p>
        Whether you are looking for an elegant festive outfit, a
        sophisticated pret look, or something timeless for a special
        occasion, our goal is to make your shopping experience simple,
        enjoyable, and inspiring.
      </p>

      <div
        style={{
          marginTop: "55px",
          padding: "40px 30px",
          backgroundColor: "#f8f5ef",
          border: "1px solid #e6ded2",
        }}
      >
        <h3
          style={{
            color: "#2b2723",
            fontSize: "30px",
            fontWeight: "500",
            marginTop: 0,
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          Our Promise
        </h3>

        <ul
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            paddingLeft: "20px",
          }}
        >
          <li style={{ marginBottom: "12px" }}>
            Carefully selected and beautifully designed fashion
          </li>

          <li style={{ marginBottom: "12px" }}>
            Attention to quality, detail, and presentation
          </li>

          <li style={{ marginBottom: "12px" }}>
            A smooth and convenient online shopping experience
          </li>

          <li style={{ marginBottom: "12px" }}>
            Friendly and attentive customer support
          </li>

          <li>
            A fashion experience built around elegance and customer
            satisfaction
          </li>
        </ul>
      </div>

      <p
        style={{
          marginTop: "55px",
          textAlign: "center",
          fontSize: "19px",
        }}
      >
        HUSSAFA BOUTIQUE is more than a clothing store. It is a celebration
        of <strong style={{ color: "#2b2723" }}>
          style, confidence, culture, and individuality.
        </strong>
      </p>

      <p
        style={{
          textAlign: "center",
        }}
      >
        We invite you to discover our collections and find the pieces that
        make you feel truly special.
      </p>

      <p
        style={{
          color: "#b08a45",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          letterSpacing: "1px",
          marginTop: "35px",
        }}
      >
        ✨ HUSSAFA BOUTIQUE — Where Elegance Meets Style.
      </p>
    </div>
  </div>
</section>
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
    padding: "70px 20px 25px",
    color: "#70685f",
    backgroundColor: "#f8f5ef",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "45px",
      textAlign: "left",
    }}
  >
    {/* Brand */}
    <div>
      <h3
        style={{
          color: "#2b2723",
          letterSpacing: "3px",
          fontSize: "20px",
          marginBottom: "18px",
        }}
      >
        HUSSAFA BOUTIQUE
      </h3>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "14px",
          maxWidth: "320px",
        }}
      >
        Where elegance meets style. Discover carefully selected
        fashion pieces created for women who appreciate timeless
        beauty, quality and sophistication.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3
        style={{
          color: "#b08a45",
          fontSize: "16px",
          letterSpacing: "2px",
          marginBottom: "20px",
        }}
      >
        QUICK LINKS
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <a
          href="/"
          style={{
            color: "#70685f",
            textDecoration: "none",
          }}
        >
          Home
        </a>

        <a
          href="/shop"
          style={{
            color: "#70685f",
            textDecoration: "none",
          }}
        >
          Shop
        </a>

        <a
          href="#about"
          style={{
            color: "#70685f",
            textDecoration: "none",
          }}
        >
          About Us
        </a>

        <a
          href="#contact"
          style={{
            color: "#70685f",
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>

        <a
          href="#"
          style={{
            color: "#70685f",
            textDecoration: "none",
          }}
        >
          Terms & Conditions
        </a>
      </div>
    </div>

    {/* Newsletter */}
    <div>
      <h3
        style={{
          color: "#b08a45",
          fontSize: "16px",
          letterSpacing: "2px",
          marginBottom: "20px",
        }}
      >
        NEWSLETTER
      </h3>

      <p
        style={{
          lineHeight: "1.7",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        Subscribe for exclusive fashion updates and special offers
        straight to your inbox!
      </p>

      <form
  action="#"
  method="post"
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }}
>
        <input
          type="email"
          placeholder="Enter your email address"
          required
          style={{
            width: "100%",
            padding: "13px 14px",
            border: "1px solid #d8cdbf",
            backgroundColor: "#fffdf9",
            color: "#2b2723",
            fontSize: "14px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "13px 18px",
            border: "none",
            backgroundColor: "#b08a45",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  </div>

  <div
    style={{
      maxWidth: "1100px",
      margin: "45px auto 0",
      paddingTop: "20px",
      borderTop: "1px solid #e6ded2",
      textAlign: "center",
      fontSize: "13px",
      color: "#8a8178",
    }}
  >
    © 2026 HUSSAFA BOUTIQUE. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}
