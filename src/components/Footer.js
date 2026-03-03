import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Receba em seu e-mail conteúdos exclusivos</h3>
          <p>Inscreva-se em nossa newsletter e receba novidades sobre a Lotus ICT.</p>

          <form className="newsletter-form">
            <input type="email" placeholder="Coloque seu e-mail aqui" />
            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Main content */}
        <div className="footer-grid">

          {/* Logo + Address */}
          <div className="footer-brand">
            <div className="footer-logo">Logo Lotus ICT</div>

            <h4>Matriz LATAM</h4>
            <p>
              Av. Venezuela, 3, 1801, Parte 2<br/>
              Centro, Rio de Janeiro – RJ<br/>
              CEP: 20081-311
            </p>
          </div>

          {/* Columns */}
          <div className="footer-links">
            <h4>Empresa</h4>
            <a href="#">Casos de Sucesso</a>
            <a href="#">Quem Somos</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-links">
            <h4>Soluções</h4>
            <a href="#">Datacenter</a>
            <a href="#">Video Surveillance</a>
            <a href="#">IndustryX</a>
          </div>

          <div className="footer-links">
            <h4>Suporte</h4>
            <a href="#">Entre em Contato</a>
            <a href="#">Envio de Sugestão e Melhoria</a>
            <a href="#">Canal de Denúncias</a>
          </div>

          <div className="footer-links">
            <h4>Compliance</h4>
            <a href="#">Política Antisuborno e Anticorrupção</a>
            <a href="#">Canal de Ética e Compliance</a>
            <a href="#">Canal de Ética e Conduta</a>
            <a href="#">Qualificação Econômica</a>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>Copyright © 2025 - Lotus ICT Empreendimentos S.A</span>
        </div>

      </div>
    </footer>
  );
}