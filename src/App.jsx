export default function App() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-content">
          <div className="badge">LATAM Regulatory & Market Entry Support</div>
          <h1>Regulatory support for companies entering Latin America</h1>
          <p>
            We support international companies with regulatory coordination,
            market access guidance, and local partner evaluation across the
            Andean region.
          </p>
          <div className="actions">
            <a className="button primary" href="mailto:info@andeanmarketaccess.com">Contact Us</a>
            <a className="button secondary" href="#services">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container two-columns">
          <div>
            <h2>Regional support with a practical approach</h2>
            <p>
              Andean Market Access provides coordination support for companies
              evaluating expansion opportunities in Latin America, with focus on
              regulatory pathways, local representation structures, and market
              entry processes.
            </p>
            <p>
              We work alongside manufacturers, distributors, and regional teams
              seeking reliable guidance for Ecuador and neighboring markets.
            </p>
          </div>

          <div className="stats-grid">
            <div className="card"><strong>LATAM</strong><span>Regional market access coordination</span></div>
            <div className="card"><strong>B2B</strong><span>Support for international companies</span></div>
            <div className="card"><strong>Medical</strong><span>Medical device market entry coordination</span></div>
            <div className="card"><strong>Cosmetics</strong><span>NSO and regulatory support guidance</span></div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="container">
          <div className="section-heading">
            <h2>Services</h2>
            <p>
              We support international organizations evaluating regulatory and
              operational pathways across the Andean region.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <h3>Regulatory Coordination</h3>
              <p>
                Coordination support for regulatory projects involving medical
                devices, cosmetics, and healthcare-related products.
              </p>
            </div>

            <div className="service-card">
              <h3>Market Entry Support</h3>
              <p>
                Assistance evaluating local structures, distributors, timelines,
                and operational requirements for Ecuador and LATAM.
              </p>
            </div>

            <div className="service-card">
              <h3>Local Representation Guidance</h3>
              <p>
                Guidance related to local representation models and regulatory
                management structures for international companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container centered">
          <h2>Let’s discuss your LATAM expansion strategy</h2>
          <p>
            Contact our team to discuss regulatory coordination and market entry
            support opportunities in Ecuador and the Andean region.
          </p>

          <div className="contact-box">
            <small>General Inquiries</small>
            <a href="mailto:info@andeanmarketaccess.com">info@andeanmarketaccess.com</a>
            <small>Website</small>
            <strong>andeanmarketaccess.com</strong>
          </div>
        </div>
      </section>

    <footer>
  <div
    style={{
      marginBottom: '24px',
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px',
      padding: '24px',
      maxWidth: '900px',
      marginInline: 'auto',
      textAlign: 'left'
    }}
  >
    <div
      style={{
        fontSize: '18px',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '16px'
      }}
    >
      Our Offices
    </div>

    <div style={{ marginBottom: '10px', color: '#ffffff' }}>
      <strong>USA Office</strong> — 8118 NW 108TH CT. Ft. Lauderdale, FL, USA
    </div>

    <div style={{ color: '#ffffff' }}>
      <strong>Colombia Office</strong> — Av. Cra. 19 # 100 - 53. Bogotá, D.C.,
      Colombia
    </div>
  </div>

  © 2026 Andean Market Access. All rights reserved.
</footer>
</div>
  )
}      
