import React from 'react'

const Sponsors = () => {
  return (
    <div className="container">
      <div className="sponsors"></div>
      <div className="sponsorship-content">
        <h1>Become a Sponsor</h1>
        <p>Support our mission and gain visibility through sponsorship.</p>

        <section className="sponsorship-opportunities">
          <h2>Sponsorship Opportunities</h2>
          <ul>
            <li>Event Sponsorship</li>
            <li>Program Sponsorship</li>
            <li>Community Outreach</li>
            {/* Add more opportunities as needed */}
          </ul>
        </section>

        <section className="sponsorship-benefits">
          <h2>Sponsorship Benefits</h2>
          <ul>
            <li>Environmental Conservation</li>
            <li>Help in improving livelihoods</li>
            <li>Charity recognition</li>
          </ul>
        </section>

        <section className="sponsorship-contact">
          <h2>Contact Us</h2>
          <p>If you are interested in becoming a sponsor, please contact us:</p>
          <p>Email: anubofewilli@gmail.com</p>
          <p>Phone: +237 680 154 066</p>
        </section>
      </div>
    </div>
  );
};

export default Sponsors