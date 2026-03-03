import React, { useEffect, useRef, useState } from "react";
import "./ImpactSection.css";

export default function ImpactSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const stats = [
    { value: 30, label: "Parceiros globais", prefix: "+" },
    { value: 16, label: "Países com projetos de sucesso", prefix: "+" },
    { value: 299, label: "Faturamento global", prefix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section className="impact-section" ref={ref}>
      <div className="impact-container">

        {/* TEXTO */}
        <div className="impact-text">
          <h2>
            Entregar <span>eficiência</span>, <span>segurança</span> e
            <span> otimização de custos</span> são nossas prioridades
          </h2>

          <p>
            Não importa onde você esteja, estamos sempre ao seu lado.
          </p>

          <a href="/empresa/apresentacao" className="impact-btn">
            Saiba Mais →
          </a>
        </div>

        {/* NÚMEROS */}
        <div className="impact-stats">
          {stats.map((item, i) => (
            <StatCard key={i} item={item} visible={visible} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* COMPONENTE DO CONTADOR */
function StatCard({ item, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const end = item.value;
    const duration = 1400;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, item.value]);

  return (
    <div className="stat-card">
      <div className="stat-number">
        {item.prefix}{count}
      </div>
      <div className="stat-label">{item.label}</div>
    </div>
  );
}