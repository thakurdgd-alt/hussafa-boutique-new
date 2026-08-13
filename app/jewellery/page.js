export default function JewelleryPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f5ef",
        color: "#2b2723",
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#b08a45",
          fontSize: "50px",
        }}
      >
        Premium Jewellery
      </h1>

      <p style={{ color: "#70685f" }}>
        HUSSAFA BOUTIQUE
      </p>

      <a
        href="/shop"
        style={{
          display: "inline-block",
          marginTop: "30px",
          backgroundColor: "#b08a45",
          color: "#fff",
          padding: "14px 30px",
          textDecoration: "none",
        }}
      >
        Back To Shop
      </a>
    </main>
  );
}
