export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <p
        style={{
          color: "#D4AF37",
          letterSpacing: "5px",
          marginBottom: "20px",
        }}
      >
        LUXURY FASHION HOUSE
      </p>

      <h1
        style={{
          color: "#D4AF37",
          fontSize: "56px",
          marginBottom: "20px",
        }}
      >
        HUSSAFA
        <br />
        BOUTIQUE
      </h1>

      <p
        style={{
          color: "#cccccc",
          fontSize: "18px",
          maxWidth: "600px",
        }}
      >
        Where elegance meets luxury. Discover premium garments,
        jewellery and exclusive fragrances.
      </p>
    </main>
  );
}
