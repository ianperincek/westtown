import React from 'react';
import '../../styles/home/Hero.scss'; 

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero panel">
      <article className="hero__wrap">
        <div className="cs-container">
          <div className="cs-flex-group">
            <p className="cs-topper">Invest in your online presence</p>
            <p className="cs-topper hide">
              Boost Your Business with a Powerful Online Presence
            </p>
            <p className="cs-topper hide">Don't Let Your Website Hold You Back</p>
            <h1 className="cs-title" id="headline">
              Don't Get Judged.<br />
              Get Customers.
            </h1>
            <p className="cs-text-alt">
              Attract <strong>More Customers</strong>, <strong>Save Time</strong>,
              and <strong>Stand Out</strong> Online
            </p>
            <h2 className="cs-text">
              <span className="cs-topper--highlight">Elevate Your Small Business</span> with
              Expertly Hand-Coded Websites from <span className="cs-topper--highlight">$175/Month</span>
            </h2>
            <a
              href="/contact"
              className="cs-button cs-button-bg"
              aria-label="Get in Touch with us"
            >
              Free Consultation
            </a>
          </div>
          <figure aria-hidden="true" className="bg-ww"></figure>
        </div>
        <picture className="cs-picture">
          <source
            media="(max-width: 600px)"
            srcSet="/assets/images/hero/hero-1m.webp"
          />
          <source
            media="(min-width: 601px)"
            srcSet="/assets/images/hero/hero-1d.webp"
          />
          <img
            aria-hidden="true"
            decoding="async"
            src="/assets/images/hero/hero-1m.webp"
            alt="Sceptical person judging your website's appearance"
            loading="eager"
            className="hero-image"
          />
        </picture>
        <div className="diagonal-container" aria-hidden="true">
          <div className="diagonal-part diagonal-part--1"></div>
          <div className="diagonal-part diagonal-part--2"></div>
          <div className="diagonal-part diagonal-part--3">
            <div className="diagonal-part-lower"></div>
          </div>
          <div className="diagonal-part diagonal-part--4"></div>
        </div>
      </article>
    </section>
  );
};

export default Hero;

