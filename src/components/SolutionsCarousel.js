import React, { useState, useRef } from 'react';
import './SolutionsCarousel.css';

const data = [
  {
    title: "Áudio e Vídeo",
    items: [
      {
        title: "CFTV",
        subtitle: "Monitoramento inteligente e segurança corporativa",
        image: "http://www.lotusict.com/wp-content/uploads/2024/11/inteligencia-artificial-em-cftv-9.jpg",
        href: "/solucoes/audio-video/cftv",
      },
      {
        title: "Painéis LED",
        subtitle: "Comunicação visual de alto impacto",
        image: "http://www.lotusict.com/wp-content/uploads/2024/11/Imagem16.jpg",
        href: "/solucoes/audio-video/painel-led",
      },
      {
        title: "Videoconferência",
        subtitle: "Colaboração remota com qualidade enterprise",
        image: "http://www.lotusict.com/wp-content/uploads/2024/11/Imagem12.png",
        href: "/solucoes/audio-video/videoconferencia",
      },
      {
        title: "Inovação IVA",
        subtitle: "Inteligência em vídeo e automação corporativa",
        image: "http://www.lotusict.com/wp-content/uploads/2022/07/20220726-152200-scaled.jpg",
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
        image: "http://www.lotusict.com/wp-content/uploads/2024/10/59ECD93A-8D41-480E-815F-4220CE5E0E89.png",
        href: "/solucoes/infra/satelite",
      },
      {
        title: "Securelink",
        subtitle: "Conectividade segura e escalável",
        image: "http://www.lotusict.com/wp-content/uploads/2024/10/image.png",
        href: "/solucoes/infra/securelink",
      },
      {
        title: "Hardware as a Service",
        subtitle: "Infraestrutura como serviço sob demanda",
        image: "http://www.lotusict.com/wp-content/uploads/2024/10/BAF16063-7417-4623-8CAC-AB5573BB8EF2.png",
        href: "/solucoes/infra/haas",
      },
      {
        title: "Network",
        subtitle: "Arquitetura de redes corporativas",
        image: "http://www.lotusict.com/wp-content/uploads/2024/10/254674A7-E329-45AA-B78B-429CF3714869.png",
        href: "/solucoes/infra/network",
      },
      {
        title: "Cibersegurança",
        subtitle: "Proteção digital para ambientes empresariais",
        image: "http://www.lotusict.com/wp-content/uploads/2024/11/DALL·E-2024-11-08-14.44.26-A-detailed-image-illustrating-cybersecurity-concepts_-a-futuristic-digital-interface-with-secure-locks-shields-and-a-network-of-interconnected-devic.webp",
        href: "/solucoes/infra/ciberseguranca",
      },
      {
        title: "Infraestrutura",
        subtitle: "Ambientes tecnológicos robustos e escaláveis",
        image: "http://www.lotusict.com/wp-content/uploads/2024/06/Multi-Vendor-Operations.png",
        href: "/solucoes/infraestrutura",
      },
      {
        title: "Telecomunicações",
        subtitle: "Soluções completas em telecom corporativo",
        image: "http://www.lotusict.com/wp-content/uploads/2022/08/Copia-de-Banner-Doacao-para-Asilo-Verde-e-Vermelho.gif",
        href: "/solucoes/telecom",
      },
      {
        title: "Multi-Cloud",
        subtitle: "Gestão inteligente de múltiplas nuvens",
        image: "http://www.lotusict.com/wp-content/uploads/2022/07/cloud-computing-banner-background-smart-city-scaled.jpg",
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
        image: "http://www.lotusict.com/wp-content/uploads/2024/11/bmc-logo-23236FC835-seeklogo.com_.png",
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
  const tabsRef = useRef(null);

const scrollTabs = (dir) => {
  tabsRef.current.scrollBy({ left: dir * 200, behavior: 'smooth' });
};
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
<div className="portfolio-tabs-wrapper">
  
  <button className="tabs-nav left" onClick={() => scrollTabs(-1)}>
    ❮
  </button>

  <div className="portfolio-tabs" ref={tabsRef}>
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

  <button className="tabs-nav right" onClick={() => scrollTabs(1)}>
    ❯
  </button>

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