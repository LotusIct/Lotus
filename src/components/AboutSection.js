import React from "react";
import "./AboutSection.css";
import aboutImg from "../assets/about.jpg";
import { Target, Eye, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Conteúdo */}
        <div className="about-content">

          <span className="about-badge">Quem somos</span>

          <h2>
            Tecnologia que gera
            <span> valor estratégico</span>
          </h2>

          <p className="about-description">
            Somos uma empresa focada em fornecer serviços de tecnologia e infraestrutura
            que criam valor único para o seu negócio, com assessoria personalizada e
            soluções que impulsionam a transformação digital, garantindo resultados
            rápidos e impacto duradouro.
          </p>

          <div className="about-cards">

            <div className="about-card">
              <Target className="about-icon" />
              <h4>Missão</h4>
              <p>
                Criar valor único através da tecnologia e promover inovação com eficiência.
              </p>
            </div>

            <div className="about-card">
              <Eye className="about-icon" />
              <h4>Visão</h4>
              <p>
                Ser referência em inovação, serviços e tecnologia no mercado.
              </p>
            </div>

            <div className="about-card">
              <ShieldCheck className="about-icon" />
              <h4>Valores</h4>
              <p>
                Excelência, transparência e comprometimento.
              </p>
            </div>

          </div>

        </div>

        {/* Imagem */}
        <div className="about-image">
          <img src={aboutImg} alt="Quem somos" />
        </div>

      </div>
    </section>
  );
}