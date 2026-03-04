import React from "react";
import "./ExcellenceSection.css";

export default function ExcellenceSection() {
  return (
    <section className="excellence-section">

      <div className="excellence-container">

        {/* IMAGEM */}
        <div className="excellence-image">
          <img
            src="http://www.lotusict.com/wp-content/uploads/2025/09/unnamed-1.png"
            alt="Excelência, transparência e comprometimento"
          />
          <div className="image-overlay"></div>
        </div>

        {/* CONTEÚDO */}
        <div className="excellence-content">

          <h2>
            Vivemos pela <span>excelência</span>, <span>transparência</span><br/>
            e <span>comprometimento</span>
          </h2>

          <p className="excellence-text">
            Somos uma empresa focada em fornecer serviços de tecnologia e infraestrutura
            que criam valor único para o seu negócio, oferecendo assessoria personalizada
            e soluções que possibilitam a transformação digital, garantindo resultados com
            rapidez e gerando impacto duradouro para sua organização.
          </p>

          <div className="divider"></div>

          <h3>Seja você o protagonista da sua própria história</h3>

          <p className="career-text">
            Temos o caminho ideal entre você e o que imagina para sua carreira.
          </p>

          <a href="/carreiras" className="excellence-btn">
            Junte-se a nós →
          </a>

        </div>

      </div>

    </section>
  );
}