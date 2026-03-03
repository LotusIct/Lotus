import React from 'react';
import './PartnersTicker.css';

import bmc from '../assets/partners/logo.jpg';
import beyondtrust from '../assets/partners/logo.jpg';
import fortinet from '../assets/partners/logo.jpg';
import microsoft from '../assets/partners/logo.jpg';

const partners = [
  { name: 'BMC', logo: bmc },
  { name: 'BeyondTrust', logo: beyondtrust },
  { name: 'Fortinet', logo: fortinet },
  { name: 'Microsoft', logo: microsoft },
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
                <div className="partner-name">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}