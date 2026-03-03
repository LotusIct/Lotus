// src/components/Hero.js
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Criamos valor único através de tecnologia inovativa
        </h1>

        <p>
          Soluções inteligentes em infraestrutura, conectividade, IA, serviços digitais e indústria 4.0
        </p>

        <div className="hero-actions">
          <a href="/solucoes/multiservicos" className="btn-primary">
            MultiServiços
          </a>

          <a href="/contato" className="btn-secondary">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}