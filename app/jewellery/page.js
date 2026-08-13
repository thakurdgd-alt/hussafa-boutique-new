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
  "/jew11.jpg",
  "/jew12.jpg",
  "/jew13.jpg",
  "/jew14.jpg",
  "/jew15.jpg",
  "/jew16.jpg",
  "/jew17.jpg",
  "/jew18.jpg",
  "/jew19.jpg",
  "/jew20.jpg",
  "/jew21.jpg",
  "/jew22.jpg",
  "/jew23.jpg",
  "/jew24.jpg",
  "/jew25.jpg",
  "/jew26.jpg",
  "/jew27.jpg",
  "/jew28.jpg",
  "/jew29.jpg",
  "/jew30.jpg",
  "/jew31.jpg",
  "/jew32.jpg",
  "/jew33.jpg",
  "/jew34.jpg",
  "/jew35.jpg",
  "/jew36.jpg",
  "/jew37.jpg",
  "/jew38.jpg",
  "/jew39.jpg",
  "/jew40.jpg",
  "/jew41.jpg",
  "/jew42.jpg",
  "/jew43.jpg",
  "/jew44.jpg",
  "/jew45.jpg",
  "/jew46.jpg",
  "/jew47.jpg",
  "/jew48.jpg",
  "/jew49.jpg",
  "/jew50.jpg",
  "/jew51.jpg",
  "/jew52.jpg",
  "/jew53.jpg",
  "/jew54.jpg",
  "/jew55.jpg",
  "/jew56.jpg",
  "/jew57.jpg",
  "/jew58.jpg",
  "/jew59.jpg",
  "/jew60.jpg",
  "/jew61.jpg",
  "/jew62.jpg",
  "/jew63.jpg",
  "/jew64.jpg",
  "/jew65.jpg",
  "/jew66.jpg",
  "/jew67.jpg",
  "/jew68.jpg",
  "/jew69.jpg",
  "/jew70.jpg",
  "/jew71.jpg",
  "/jew72.jpg",
  "/jew73.jpg",
  "/jew74.jpg",
  "/jew75.jpg",
  "/jew76.jpg",
  "/jew77.jpg",
  "/jew78.jpg",
  "/jew79.jpg",
  "/jew80.jpg",
  "/jew81.jpg",
  "/jew82.jpg",
  "/jew83.jpg",
  "/jew84.jpg",
  "/jew85.jpg",
  "/jew86.jpg",
  "/jew87.jpg",
  "/jew88.jpg",
  "/jew89.jpg",
  "/jew90.jpg",
  "/jew91.jpg",
  "/jew92.jpg",
  "/jew93.jpg",
  "/jew94.jpg",
  "/jew95.jpg",
  "/jew96.jpg",
  "/jew97.jpg",
  "/jew98.jpg",
  "/jew99.jpg",
  "/jew100.jpg",
  "/jew101.jpg",
  "/jew102.jpg",
  "/jew103.jpg",
  "/jew104.jpg",
  "/jew105.jpg",
  "/jew106.jpg",
  "/jew107.jpg",
  "/jew108.jpg",
  "/jew109.jpg",
  "/jew110.jpg",
  "/jew111.jpg",
  "/jew112.jpg",
  "/jew113.jpg",
  "/jew114.jpg",
  "/jew115.jpg",
  "/jew116.jpg",
  "/jew117.jpg",
  "/jew118.jpg",
  "/jew119.jpg",
  "/jew120.jpg",
  "/jew121.jpg",
  "/jew122.jpg",
  "/jew123.jpg",
  "/jew124.jpg",
  "/jew125.jpg",
  "/jew126.jpg",
  "/jew127.jpg",
  "/jew128.jpg",
  "/jew129.jpg",
  "/jew130.jpg",
  "/jew131.jpg",
  "/jew132.jpg",
  "/jew133.jpg",
  "/jew134.jpg",
  "/jew135.jpg",
  "/jew136.jpg",
  "/jew137.jpg",
  "/jew138.jpg",
  "/jew139.jpg",
  "/jew140.jpg",
  "/jew141.jpg",
  "/jew142.jpg",
  "/jew143.jpg",
  "/jew144.jpg",
  "/jew145.jpg",
  "/jew146.jpg",
  "/jew147.jpg",
  "/jew148.jpg",
  "/jew149.jpg",
  "/jew150.jpg",
  "/jew151.jpg",
  "/jew152.jpg",
  "/jew153.jpg",
  "/jew154.jpg",
  "/jew155.jpg",
  "/jew156.jpg",
  "/jew157.jpg",
  "/jew158.jpg",
  "/jew159.jpg",
  "/jew160.jpg",
  "/jew161.jpg",
  "/jew162.jpg",
  "/jew163.jpg",
  "/jew164.jpg",
  "/jew165.jpg",
  "/jew166.jpg",
  "/jew167.jpg"
];

export default function JewelleryPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f5ef",
        color: "#2b2723",
        padding: "40px 20px"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        <a
          href="/shop"
          style={{
            color: "#b08a45",
            textDecoration: "none"
          }}
        >
          ← Back to Shop
        </a>

        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            margin: "50px 0 15px",
            color: "#b08a45"
          }}
        >
          Premium Jewellery
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#70685f",
            marginBottom: "50px"
          }}
        >
          Choose your favourite jewellery and contact us on WhatsApp.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "25px"
          }}
        >
          {jewelleryImages.map((image, index) => (
            <div
              key={image}
              style={{
                background: "#fffdf9",
                border: "1px solid #e6ded2",
                padding: "12px"
              }}
            >
              <img
                src={image}
                alt={"Jewellery Item " + (index + 1)}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  display: "block"
                }}
              />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  margin: "18px 0 10px"
                }}
              >
                Jewellery Item {index + 1}
              </h2>

              <p
                style={{
                  textAlign: "center",
                  color: "#70685f",
                  fontSize: "14px"
                }}
              >
                Price available on WhatsApp
              </p>

              <a
                href={
                  "https://wa.me/447388454498?text=Hello%2C%20I%20am%20interested%20in%20Jewellery%20Item%20" +
                  (index + 1)
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#16a34a",
                  color: "#fff",
                  padding: "13px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginTop: "15px"
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
