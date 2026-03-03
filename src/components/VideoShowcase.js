import React, { useState } from "react";
import "./VideoShowcase.css";

const videos = [
  {
    title: "Smart Offers",
    subtitle: "Soluções inteligentes para eficiência operacional",
    youtubeId: "Os8FVsSStfU",
  },
  {
    title: "IVS Infraestrutura",
    subtitle: "Infraestrutura crítica com alta performance",
    youtubeId: "6YwIQdgkiGs",
  },
];

export default function VideoCarousel() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="video-section">
      <div className="video-container">

        {/* Header */}
        <div className="video-header">
          <span className="video-badge">Destaques</span>
          <h2>Conheça nossas soluções</h2>
          <p>Conteúdos institucionais sobre tecnologia, inovação e infraestrutura</p>
        </div>

        {/* Showcase */}
        <div className="video-showcase">

          <button className="video-nav" onClick={prev}>←</button>

          {/* Card */}
          <div className="video-card">

            {/* Video */}
            <iframe
              src={`https://www.youtube.com/embed/${videos[active].youtubeId}?rel=0`}
              title={videos[active].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: "none" }}
            />

            {/* Overlay */}
            <div className="video-overlay">
              <h3>{videos[active].title}</h3>
              <p>{videos[active].subtitle}</p>
              <button className="video-btn">Saiba mais</button>
            </div>

          </div>

          <button className="video-nav" onClick={next}>→</button>
        </div>

        {/* Dots */}
        <div className="video-dots">
          {videos.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}