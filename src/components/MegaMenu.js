import { useState } from "react";
import "./MegaMenu.css";

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null); // desktop
  const [hovering, setHovering] = useState(false);

  // MOBILE STATES
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null); // nível 1

  let closeTimeout = null;

  const handleEnter = (index) => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setActiveMenu(index);
  };

  const handleLeave = () => {
    closeTimeout = setTimeout(() => {
      if (!hovering) setActiveMenu(null);
    }, 200);
  };

  const scrollMega = (direction) => {
    const container = document.getElementById("megaScroll");
    if (!container) return;

    const columnWidth = 320;
    const visibleColumns = 3;
    const scrollAmount = columnWidth * visibleColumns;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };
const menu = [
 {
  title: "Empresa",
  sections: [
    {
      title: "Institucional",
      links: [
        { label: "Apresentação", href: "/empresa/apresentacao" },
        { label: "Apresentação Interativa", href: "/empresa/apresentacao-interativa" },
        { label: "Presença Global", href: "/empresa/presenca-global" },
        { label: "Junte-se a nós", href: "/carreiras" },
      ],
    },
    {
      title: "Conteúdo",
      links: [
       { label: "Blog", href: "/blog" },
      ],
    },
  ],
},

  {
    title: "Soluções",
    sections: [
      {
        title: "Áudio e Vídeo",
        links: [
          { label: "CFTV", href: "/solucoes/audio-video/cftv" },
          { label: "Painéis LED", href: "/solucoes/audio-video/painel-led" },
          { label: "Videoconferência", href: "/solucoes/audio-video/videoconferencia" },
          { label: "Inovação IVA", href: "/solucoes/audio-video/inovacao-iva" },
        ],
      },

      {
        title: "Infraestrutura e Conectividade",
        links: [
          { label: "Rede de Multiserviços com Satélites", href: "/solucoes/infra/satelite" },
          { label: "Securelink: Conectividade com Segurança", href: "/solucoes/infra/securelink" },
          { label: "Hardware as a Service", href: "/solucoes/infra/haas" },
          { label: "Network", href: "/solucoes/infra/network" },
          { label: "Cibersegurança", href: "/solucoes/infra/ciberseguranca" },
          { label: "Infraestrutura", href: "/solucoes/infraestrutura" },
          { label: "Telecomunicações", href: "/solucoes/telecom" },
          { label: "Multi-Cloud", href: "/solucoes/multi-cloud" },
        ],
      },

      {
        title: "Digital Services Solutions",
        links: [
          { label: "Descoberta de Ativos – BMC", href: "/digital/bmc" },
          { label: "Gerenciamento de Ativos de Usuário", href: "/digital/ativos-usuario" },
          { label: "Gerenciamento de Capacidade", href: "/digital/capacidade" },
          { label: "Gestão de serviços e processos", href: "/digital/gestao-servicos" },
          { label: "FinOps – gestão de custos de nuvem", href: "/digital/finops" },
          { label: "Workflow Orchestration", href: "/digital/workflow" },
          { label: "Gestão de Identidades", href: "/digital/identidades" },
          { label: "Automação Robótica de Processos – RPA", href: "/digital/rpa" },
        ],
      },

      {
        title: "Inteligência Artificial",
        links: [
          { label: "AIOPs – IA na gestão de TI", href: "/ia/aiops" },
          { label: "AI-Powered Inspection Robotic Solutions", href: "/ia/robotic-inspection" },
          { label: "Solução de Vídeo Analytics", href: "/ia/video-analytics" },
        ],
      },

      {
        title: "Serviços Profissionais",
        links: [
          { label: "NOC Automatizado", href: "/servicos/noc" },
          { label: "CCaaS – Sistema de Atendimento Inteligente", href: "/servicos/ccaas" },
          { label: "Assessment Control-M", href: "/servicos/controlm" },
          { label: "Body Shop e Outsourcing", href: "/servicos/bodyshop" },
          { label: "DPO as a Service", href: "/servicos/dpo" },
          { label: "PMO", href: "/servicos/pmo" },
          { label: "Eficiência Energética", href: "/servicos/energia" },
          { label: "Multi-Vendor Operation Service", href: "/servicos/multivendor" },
        ],
      },

      {
        title: "IoT",
        links: [
          { label: "IOT de Automação para Medição e Atuação Remota", href: "/iot/automacao-remota" },
        ],
      },

      {
        title: "IndustryX",
        links: [
          { label: "Robô Quadrúpede para Inspeção Industrial", href: "/industryx/robo-quadrupede" },
          { label: "Robô Submersível para Inspeção", href: "/industryx/robo-submersivel" },
          { label: "Inspeção Aérea com Drone", href: "/industryx/drone" },
          { label: "Usinas Fotovoltaicas", href: "/industryx/fotovoltaica" },
          { label: "Eficiência Energética na Indústria", href: "/industryx/eficiencia-energetica" },
          { label: "Engenharia do Proprietário", href: "https://www.lotusict.com/inspecoes-aereas-inteligentes-com-precisao-e-seguranca/" },
        ],
      },
    ],
  },

  {
    title: "Casos de Sucesso",
    sections: [
      {
        title: "Clientes",
        links: [
          { label: "Casos de Sucesso", href: "/cases" },
        ],
      },
    ],
  },

  {
    title: "Contato",
    sections: [
      {
        title: "Institucional",
        links: [
          { label: "Contato", href: "/contato" },
        ],
      },
    ],
  },
  {
    title: "Suporte",
    sections: [
      {
        title: "Institucional",
        links: [
          { label: "Suporte", href: "/suporte" },
        ],
      },
    ],
  },
];

  return (
    <header className="mega-header">
      <div className="mega-container">

        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="Lotus ICT" />
        </div>

        {/* MENU DESKTOP */}
        <nav className="menu">
          {menu.map((item, index) => (
            <div
              key={index}
              className="menu-item"
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={handleLeave}
            >
              <span className="menu-title">{item.title}</span>

              {activeMenu === index && (
                <div
                  className="mega-dropdown"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => {
                    setHovering(false);
                    setActiveMenu(null);
                  }}
                >
                  <div className="mega-dropdown-inner">

                    {item.title === "Soluções" && (
                      <>
                        <button className="mega-arrow left" onClick={() => scrollMega(-1)}>‹</button>
                        <button className="mega-arrow right" onClick={() => scrollMega(1)}>›</button>
                      </>
                    )}

                    <div
                      className={`mega-content ${item.title === "Soluções" ? "horizontal" : ""}`}
                      id={item.title === "Soluções" ? "megaScroll" : undefined}
                    >
                      {item.sections.map((section, i) => (
                        <div key={i} className="mega-column">
                          <h4>{section.title}</h4>
                          {section.links.map((link, j) => (
                            <a key={j} href={link.href}>{link.label}</a>
                          ))}
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="menu-cta">
          <a href="/portal-servicos" className="cta-enterprise">
            Portal de Serviços
            <span className="cta-line"></span>
          </a>
        </div>

        {/* HAMBURGER MOBILE */}
        <div className="mobile-toggle" onClick={() => setMobileOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-drawer ${mobileOpen ? "active" : ""}`}>

        {/* HEADER */}
        <div className="mobile-header">
          {activeMobileMenu !== null ? (
            <button className="mobile-back" onClick={() => setActiveMobileMenu(null)}>←</button>
          ) : (
            <span />
          )}

          <span className="mobile-title">
            {activeMobileMenu !== null ? menu[activeMobileMenu].title : "Menu"}
          </span>

          <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        {/* BODY */}
        <div className="mobile-body">

          {/* NÍVEL 1 */}
          {activeMobileMenu === null && (
            <div className="mobile-list">
              {menu.map((item, i) => (
                <div
                  key={i}
                  className="mobile-item"
                  onClick={() => setActiveMobileMenu(i)}
                >
                  <span>{item.title}</span>
                  <span className="arrow">›</span>
                </div>
              ))}
            </div>
          )}

          {/* NÍVEL 2 */}
          {activeMobileMenu !== null && (
            <div className="mobile-sublist">
              {menu[activeMobileMenu].sections.map((section, i) => (
                <div key={i} className="mobile-section">
                  <h4>{section.title}</h4>
                  {section.links.map((link, j) => (
                    <a key={j} href={link.href}>{link.label}</a>
                  ))}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

    </header>
  );
}