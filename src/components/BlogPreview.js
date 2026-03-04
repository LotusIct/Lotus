import React, { useState } from "react";
import "./BlogSlider.css";

const posts = [
  {
    category: "Datacenter",
    title: "A Lotus ICT está expandindo fronteiras!",
    excerpt: "Expansão estratégica e novos investimentos em infraestrutura.",
    image: "http://www.lotusict.com/wp-content/uploads/2024/05/CONTROL-M.png",
    link: "/blog/expansao-fronteiras",
  },
  {
    category: "Datacenter",
    title: "Lotus ICT no BMC Helix Roadshow",
    excerpt: "Conectando inovação, IA e parcerias de sucesso.",
    image: "http://www.lotusict.com/wp-content/uploads/2022/07/data-center-with-server-racks-corridor-room-3d-render-digital-data-cloud-technology-scaled.jpg",
    link: "/blog/bmc-helix-roadshow",
  },
  {
    category: "Datacenter",
    title: "Lotus ICT expande parceria com a BMC Software",
    excerpt: "Início da operação nos Estados Unidos.",
    image: "http://www.lotusict.com/wp-content/uploads/2022/07/v617batch2-bb-01-technology-scaled.jpg",
    link: "/blog/expansao-bmc-eua",
  }
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