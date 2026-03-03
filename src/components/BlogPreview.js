import React, { useState } from "react";
import "./BlogSlider.css";

const posts = [
  {
    category: "Datacenter",
    title: "A Lotus ICT está expandindo fronteiras!",
    excerpt: "Expansão estratégica e novos investimentos em infraestrutura.",
    image: "/images/blog/datacenter1.jpg",
    link: "/blog/expansao-fronteiras",
  },
  {
    category: "Datacenter",
    title: "Lotus ICT no BMC Helix Roadshow",
    excerpt: "Conectando inovação, IA e parcerias de sucesso.",
    image: "/images/blog/bmc-roadshow.jpg",
    link: "/blog/bmc-helix-roadshow",
  },
  {
    category: "Datacenter",
    title: "Lotus ICT expande parceria com a BMC Software",
    excerpt: "Início da operação nos Estados Unidos.",
    image: "/images/blog/bmc-eua.jpg",
    link: "/blog/expansao-bmc-eua",
  },
   {
    category: "Datacenter",
    title: "Lotus ICT expande parceria com a BMC Software",
    excerpt: "Início da operação nos Estados Unidos.",
    image: "/images/blog/bmc-eua.jpg",
    link: "/blog/expansao-bmc-eua",
  },
   {
    category: "Datacenter",
    title: "Lotus ICT expande parceria com a BMC Software",
    excerpt: "Início da operação nos Estados Unidos.",
    image: "/images/blog/bmc-eua.jpg",
    link: "/blog/expansao-bmc-eua",
  },
  {
    category: "Video Surveillance",
    title: "Parceria com a Petrobras completa 3 anos",
    excerpt: "Excelência em soluções de Áudio e Vídeo.",
    image: "/images/blog/petrobras.jpg",
    link: "/blog/parceria-petrobras",
  },
];

export default function BlogSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % posts.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <section className="blog-section">
      <div className="blog-container">

        {/* Header */}
        <div className="blog-header">
          <span className="blog-badge">BLOG</span>
          <h2>Notícias</h2>
          <p>Saiba mais sobre as principais notícias que acontecem na Lotus ICT</p>
          <a href="/blog" className="blog-link">Acesse o blog →</a>
        </div>

        {/* Slider */}
        <div className="blog-slider">

          <button className="blog-nav left" onClick={prev}>←</button>

          <div className="blog-track">
           {posts.map((post, i) => {
  const position = (i - index + posts.length) % posts.length;
  const offset = position - 1; // centraliza o card ativo

  return (
    <div
      key={i}
      className={`blog-card ${position === 1 ? "active" : ""}`}
      style={{
        transform: `translateX(${offset * 110}%)`,
        opacity: position > 2 ? 0 : 1,
      }}
    >
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>

                  <div className="blog-content">
                    <span className="blog-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a href={post.link} className="blog-read">
                      Leia mais →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="blog-nav right" onClick={next}>→</button>

        </div>

      </div>
    </section>
  );
}