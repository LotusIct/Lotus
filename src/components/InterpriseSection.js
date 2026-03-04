import React from 'react';
import './PartnersTicker.css';

const partners = [
  { 
    name: 'BMC', 
    logo: 'https://www.lotusict.com/wp-content/uploads/2025/05/bmc_.png' 
  },
  { 
    name: 'BeyondTrust', 
    logo: 'https://www.lotusict.com/wp-content/uploads/2025/05/beyondtrust_.png' 
  },
  { 
    name: 'Fortinet', 
    logo: 'https://www.lotusict.com/wp-content/uploads/2025/05/fortniet_.png' 
  },
  { 
    name: 'Microsoft', 
    logo: 'https://www.lotusict.com/wp-content/uploads/2025/05/microsoft_.png' 
  },
  { 
    name: 'IBM', 
    logo: 'https://www.lotusict.com/wp-content/uploads/2025/05/ibm_.png' 
  },
  { 
    name: 'Foxconn', 
    logo: 'https://www.lotusict.com/wp-content/uploads/2025/05/foxconn_.png' 
  },
];

export default function PartnersTicker() {
  return (
    <section className="partners-section">

      <div className="partners-container">

        {/* Header */}
        <div className="partners-header">
          <span className="partners-badge">Parcerias Estratégicas</span>
          <h2>Nossos Parceiros</h2>
          <p>Alianças estratégicas com líderes globais de tecnologia</p>
        </div>

        {/* Ticker */}
        <div className="partners-ticker">
          <div className="ticker-track">
            {[...partners, ...partners].map((partner, i) => (
              <div className="partner-card ticker-card" key={i}>
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}