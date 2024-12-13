import React, { forwardRef } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  imageSrcMobile: string;
  imageSrcDesktop: string;
  imageAlt: string;
  features: string[];
  moreInfo: string;
  reverse?: boolean;
}

// Forwarding ref to allow parent components to access DOM elements
const ServiceItem = forwardRef<HTMLDivElement, ServiceItemProps>(
  (
    {
      title,
      description,
      link,
      linkText,
      imageSrcMobile,
      imageSrcDesktop,
      imageAlt,
      features,
      moreInfo,
      reverse = false,
    },
    ref
  ) => (
    <article
      ref={ref}
      className={`service services__item ${
        reverse ? "service--image-left" : "service--image-right"
      }`}
    >
      <div className="service__content">
        <h3 className="service__title">{title}</h3>
        <p className="service__description">{description}</p>
        <a href={link} className="service__link">
          {linkText}
        </a>
      </div>
      <div className="service__image-wrapper">
        <div className="service__image-container">
          <picture>
            <source media="(min-width: 1024px)" srcSet={imageSrcDesktop} />
            <img
              loading="lazy"
              src={imageSrcMobile}
              alt={imageAlt}
              className="service__image"
            />
          </picture>
          <div className="service__overlay">
            <div className="service__details">
              <ul className="service__features">
                {features.map((feature, index) => (
                  <li key={index} className="service__feature">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="service__more-info">{moreInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
);

export default ServiceItem;