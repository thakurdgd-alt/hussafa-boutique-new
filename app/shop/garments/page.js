"use client";

import { useRef } from "react";

export default function Garments() {
  const videos = useRef([]);

  const pauseOtherVideos = (currentVideo) => {
    videos.current.forEach((video) => {
      if (video && video !== currentVideo) {
        video.pause();
      }
    });
  };

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
          href="/shop"
          style={{
            color: "#D4AF37",
            display: "inline-block",
            marginBottom: "40px",
          }}
        >
          ← Back to Shop
        </a>

        <header
          style={{
            textAlign: "center",
            marginBottom: "50px",
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
              fontSize: "clamp(40px, 7vw, 64px)",
              margin: "15px 0",
            }}
          >
            Luxury Garments
          </h1>

          <p style={{ color: "#aaa", fontSize: "18px" }}>
            Discover our latest luxury garment collection.
          </p>
        </header>

        <section
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              border: "1px solid #8a6f20",
              borderRadius: "18px",
              padding: "20px",
              backgroundColor: "#080808",
            }}
          >
            <video
              ref={(el) => (videos.current[0] = el)}
              src="/garment-video-1.mp4"
              controls
              playsInline
              onPlay={(e) => pauseOtherVideos(e.currentTarget)}
              style={{
                width: "100%",
                borderRadius: "12px",
                display: "block",
              }}
            />

            <video
              ref={(el) => (videos.current[1] = el)}
              src="/garment-video-2.mp4"
              controls
              playsInline
              onPlay={(e) => pauseOtherVideos(e.currentTarget)}
              style={{
                width: "100%",
                borderRadius: "12px",
                display: "block",
                marginTop: "30px",
              }}
            />
              <video
  ref={(el) => (videos.current[2] = el)}
  src="/garment-video-3.mp4"
  controls
  playsInline
  onPlay={(e) => pauseOtherVideos(e.currentTarget)}
  style={{
    width: "100%",
    borderRadius: "12px",
    display: "block",
    marginTop: "30px",
  }}
/>
  <video
  ref={(el) => (videos.current[3] = el)}
  src="/garment-video-4.mp4"
  controls
  playsInline
  onPlay={(e) => pauseOtherVideos(e.currentTarget)}
  style={{
    width: "100%",
    borderRadius: "12px",
    display: "block",
    marginTop: "30px",
  }}
/>
  <video
  ref={(el) => (videos.current[4] = el)}
  src="/garment-video-5.mp4"
  controls
  playsInline
  onPlay={(e) => pauseOtherVideos(e.currentTarget)}
  style={{
    width: "100%",
    borderRadius: "12px",
    display: "block",
    marginTop: "30px",
  }}
/>

            <h2
              style={{
                color: "#D4AF37",
                marginTop: "25px",
              }}
            >
              Luxury Garment
            </h2>

            <p
              style={{
                color: "#aaa",
                lineHeight: "1.7",
              }}
            >
              Elegant luxury garment designed with style and
              sophistication.
            </p>

            <p
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Price: Contact us on WhatsApp
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
