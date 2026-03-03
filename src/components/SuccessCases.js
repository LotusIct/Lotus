import React, { useState } from "react";
import "./SuccessCases.css";

const cases = [
  {
    category: "Inovação & Segurança",
    title: "Robô Quadrúpede para Inspeção e Segurança Industrial",
    description:
      "Implantado pela Lotus ICT na Subestação de Paracambi – RJ para a State Grid Brazil.",
    image: "/images/cases/robo-quadrupede.jpg",
    link: "/cases/robo-quadrupede",
  },
  {
    category: "Datacenter",
    title: "Manutenção de Salas de Reunião para Petrobras",
    description:
      "A Petrobras, maior empresa de petróleo do Brasil e da América Latina, contratou a Lotus ICT.",
    image: "/images/cases/petrobras-salas.jpg",
    link: "/cases/petrobras-salas",
  },
  {
    category: "Video Surveillance",
    title: "Implementação da Rede MPLS para a ANP",
    description:
      "A ANP necessitava interligar todos os seus escritórios distribuídos pelo Brasil.",
    image: "/images/cases/anp-mpls.jpg",
    link: "/cases/anp-mpls",
  },
  {
    category: "Extra",
    title: "Sistema Inteligente de Gestão e Inspeção de UAVs",
    description:
      "Projeto para inspeção de linhas de transmissão da State Grid Brasil.",
    image: "/images/cases/uav-stategrid.jpg",
    link: "/cases/uav-stategrid",
  },
  {
    category: "Extra",
    title: "Robô de Inspeção de Casco para a Petrobras",
    description:
      "Projeto focado em reduzir exposição ao risco em ambientes críticos.",
    image: "/images/cases/robo-casco.jpg",
    link: "/cases/robo-casco",
  },
];

export default function SuccessCases() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cases.length);
  const prev = () => setIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section className="cases-section">
      <div className="cases-container">

        {/* Header */}
        <div className="cases-header">
          <span className="cases-badge">Casos de Sucesso</span>
          <h2>Projetos que geram impacto real</h2>
          <p>
            Soluções implementadas em ambientes críticos, infraestrutura estratégica
            e operações de alta complexidade.
          </p>
        </div>

        {/* Slider */}
        <div className="cases-slider">

          <button className="cases-nav left" onClick={prev}>←</button>

          <div className="cases-track">
            {cases.map((item, i) => {
              const position = (i - index + cases.length) % cases.length;
              const offset = position - 1;

              return (
                <div
                  key={i}
                  className={`cases-card ${position === 1 ? "active" : ""}`}
                  style={{
                    transform: `translateX(${offset * 115}%) scale(${position === 1 ? 1 : 0.92})`,
                    opacity: position > 2 ? 0 : 1,
                  }}
                >
                  <div className="cases-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="cases-content">
                    <span className="cases-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.link} className="cases-btn">
                      Saiba mais →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="cases-nav right" onClick={next}>→</button>

        </div>

      </div>
    </section>
  );
}