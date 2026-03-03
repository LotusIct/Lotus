import React, { useState, useRef } from 'react';
import './SolutionsCarousel.css';

const data = [
  {
    title: "Áudio e Vídeo",
    items: [
      {
        title: "CFTV",
        subtitle: "Monitoramento inteligente e segurança corporativa",
        image: "/images/solutions/cftv.jpg",
        href: "/solucoes/audio-video/cftv",
      },
      {
        title: "Painéis LED",
        subtitle: "Comunicação visual de alto impacto",
        image: "/images/solutions/painel-led.jpg",
        href: "/solucoes/audio-video/painel-led",
      },
      {
        title: "Videoconferência",
        subtitle: "Colaboração remota com qualidade enterprise",
        image: "/images/solutions/videoconferencia.jpg",
        href: "/solucoes/audio-video/videoconferencia",
      },
      {
        title: "Inovação IVA",
        subtitle: "Inteligência em vídeo e automação corporativa",
        image: "/images/solutions/iva.jpg",
        href: "/solucoes/audio-video/inovacao-iva",
      },
    ],
  },

  {
    title: "Infraestrutura e Conectividade",
    items: [
      {
        title: "Rede Multisserviços via Satélite",
        subtitle: "Conectividade global para operações críticas",
        image: "/images/solutions/satelite.jpg",
        href: "/solucoes/infra/satelite",
      },
      {
        title: "Securelink",
        subtitle: "Conectividade segura e escalável",
        image: "/images/solutions/securelink.jpg",
        href: "/solucoes/infra/securelink",
      },
      {
        title: "Hardware as a Service",
        subtitle: "Infraestrutura como serviço sob demanda",
        image: "/images/solutions/haas.jpg",
        href: "/solucoes/infra/haas",
      },
      {
        title: "Network",
        subtitle: "Arquitetura de redes corporativas",
        image: "/images/solutions/network.jpg",
        href: "/solucoes/infra/network",
      },
      {
        title: "Cibersegurança",
        subtitle: "Proteção digital para ambientes empresariais",
        image: "/images/solutions/cyber.jpg",
        href: "/solucoes/infra/ciberseguranca",
      },
      {
        title: "Infraestrutura",
        subtitle: "Ambientes tecnológicos robustos e escaláveis",
        image: "/images/solutions/infraestrutura.jpg",
        href: "/solucoes/infraestrutura",
      },
      {
        title: "Telecomunicações",
        subtitle: "Soluções completas em telecom corporativo",
        image: "/images/solutions/telecom.jpg",
        href: "/solucoes/telecom",
      },
      {
        title: "Multi-Cloud",
        subtitle: "Gestão inteligente de múltiplas nuvens",
        image: "/images/solutions/multicloud.jpg",
        href: "/solucoes/multi-cloud",
      },
    ],
  },

  {
    title: "Digital Services Solutions",
    items: [
      {
        title: "Descoberta de Ativos – BMC",
        subtitle: "Mapeamento inteligente de ativos digitais",
        image: "/images/solutions/bmc.jpg",
        href: "/digital/bmc",
      },
      {
        title: "Gerenciamento de Ativos",
        subtitle: "Gestão centralizada de recursos corporativos",
        image: "/images/solutions/ativos.jpg",
        href: "/digital/ativos-usuario",
      },
      {
        title: "Gerenciamento de Capacidade",
        subtitle: "Otimização de recursos e desempenho",
        image: "/images/solutions/capacidade.jpg",
        href: "/digital/capacidade",
      },
      {
        title: "Gestão de Serviços",
        subtitle: "Processos inteligentes e automação operacional",
        image: "/images/solutions/gestao-servicos.jpg",
        href: "/digital/gestao-servicos",
      },
      {
        title: "FinOps",
        subtitle: "Gestão estratégica de custos em nuvem",
        image: "/images/solutions/finops.jpg",
        href: "/digital/finops",
      },
      {
        title: "Workflow Orchestration",
        subtitle: "Automação e orquestração de processos",
        image: "/images/solutions/workflow.jpg",
        href: "/digital/workflow",
      },
      {
        title: "Gestão de Identidades",
        subtitle: "Segurança e controle de acessos",
        image: "/images/solutions/identidades.jpg",
        href: "/digital/identidades",
      },
      {
        title: "RPA",
        subtitle: "Automação robótica de processos",
        image: "/images/solutions/rpa.jpg",
        href: "/digital/rpa",
      },
    ],
  },

  {
    title: "Inteligência Artificial",
    items: [
      {
        title: "AIOPs",
        subtitle: "IA aplicada à gestão de TI",
        image: "/images/solutions/aiops.jpg",
        href: "/ia/aiops",
      },
      {
        title: "Robotic Inspection",
        subtitle: "Inspeções inteligentes com robôs autônomos",
        image: "/images/solutions/robotic.jpg",
        href: "/ia/robotic-inspection",
      },
      {
        title: "Vídeo Analytics",
        subtitle: "Análise inteligente de vídeo com IA",
        image: "/images/solutions/video-analytics.jpg",
        href: "/ia/video-analytics",
      },
    ],
  },

  {
    title: "Serviços Profissionais",
    items: [
      {
        title: "NOC Automatizado",
        subtitle: "Operação e monitoramento inteligente",
        image: "/images/solutions/noc.jpg",
        href: "/servicos/noc",
      },
      {
        title: "CCaaS",
        subtitle: "Atendimento inteligente omnichannel",
        image: "/images/solutions/ccaas.jpg",
        href: "/servicos/ccaas",
      },
      {
        title: "Assessment Control-M",
        subtitle: "Diagnóstico e otimização de automações",
        image: "/images/solutions/controlm.jpg",
        href: "/servicos/controlm",
      },
      {
        title: "Body Shop",
        subtitle: "Alocação estratégica de especialistas",
        image: "/images/solutions/bodyshop.jpg",
        href: "/servicos/bodyshop",
      },
      {
        title: "DPO as a Service",
        subtitle: "Conformidade e governança LGPD",
        image: "/images/solutions/dpo.jpg",
        href: "/servicos/dpo",
      },
      {
        title: "PMO",
        subtitle: "Gestão profissional de projetos",
        image: "/images/solutions/pmo.jpg",
        href: "/servicos/pmo",
      },
      {
        title: "Eficiência Energética",
        subtitle: "Sustentabilidade e redução de custos",
        image: "/images/solutions/energia.jpg",
        href: "/servicos/energia",
      },
      {
        title: "Multi-Vendor Operation",
        subtitle: "Gestão integrada de fornecedores",
        image: "/images/solutions/multivendor.jpg",
        href: "/servicos/multivendor",
      },
    ],
  },

  {
    title: "IoT",
    items: [
      {
        title: "Automação Remota",
        subtitle: "Controle e monitoramento inteligente",
        image: "/images/solutions/iot.jpg",
        href: "/iot/automacao-remota",
      },
    ],
  },

  {
    title: "IndustryX",
    items: [
      {
        title: "Robô Quadrúpede",
        subtitle: "Inspeção industrial autônoma",
        image: "/images/solutions/quadrupede.jpg",
        href: "/industryx/robo-quadrupede",
      },
      {
        title: "Robô Submersível",
        subtitle: "Inspeção subaquática inteligente",
        image: "/images/solutions/submersivel.jpg",
        href: "/industryx/robo-submersivel",
      },
      {
        title: "Drone",
        subtitle: "Inspeção aérea de alta precisão",
        image: "/images/solutions/drone.jpg",
        href: "/industryx/drone",
      },
      {
        title: "Usinas Fotovoltaicas",
        subtitle: "Energia solar em escala industrial",
        image: "/images/solutions/fotovoltaica.jpg",
        href: "/industryx/fotovoltaica",
      },
      {
        title: "Eficiência Energética",
        subtitle: "Otimização energética industrial",
        image: "/images/solutions/eficiencia-industria.jpg",
        href: "/industryx/eficiencia-energetica",
      },
      {
        title: "Engenharia do Proprietário",
        subtitle: "Gestão técnica e estratégica de ativos",
        image: "/images/solutions/engenharia.jpg",
        href: "/industryx/engenharia",
      },
    ],
  },
];
export default function SolutionsPortfolio() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section className="portfolio-section">

      <div className="portfolio-header">
        <h2>Portfólio de Soluções</h2>
        <p>Soluções tecnológicas inteligentes para impulsionar negócios</p>
      </div>

      {/* Tabs */}
      <div className="portfolio-tabs">
        {data.map((cat, i) => (
          <button
            key={i}
            className={i === active ? 'tab active' : 'tab'}
            onClick={() => setActive(i)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="portfolio-carousel">
        <button className="nav left" onClick={() => scroll(-1)}>❮</button>

       <div className="portfolio-track" ref={trackRef}>
  {data[active].items.map((item, i) => (
    <div className="portfolio-card" key={i}>

              {/* Imagem */}
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>

              {/* Conteúdo */}
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>

                <button className="card-btn">
                  Saiba mais →
                </button>
              </div>

            </div>
          ))}
        </div>

        <button className="nav right" onClick={() => scroll(1)}>❯</button>
      </div>

    </section>
  );
}