import React, { useEffect, useRef } from "react";
import ServiceItem from "./ServiceItem";
import "../../styles/services.scss";

interface ServiceData {
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

interface ServicesProps {
  services: ServiceData[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure `gsap` is available globally
    if (typeof gsap === "undefined") {
      console.error("GSAP is not loaded globally.");
      return;
    }

    const items = containerRef.current?.querySelectorAll(".services__item");
    if (!items) return;

    items.forEach((service) => {
      const overlay = service.querySelector(".service__overlay") as HTMLElement;
      const details = service.querySelector(".service__details") as HTMLElement;

      if (!overlay || !details) return;

      // Set initial states
      gsap.set(overlay, { backgroundColor: "rgba(0, 0, 0, 0)" });
      gsap.set(details, { opacity: 0, y: 20 });
      
    });

    // Cleanup function to remove event listeners
    return () => {
      items.forEach((service) => {
        service.removeEventListener("mouseenter", () => hoverTimeline.play());
        service.removeEventListener("mouseleave", () => hoverTimeline.reverse());
      });
    };
  }, []);

  return (
    <section
      className="services"
      aria-labelledby="services-title"
      ref={containerRef}
    >
      <h2 id="services-title" className="services__title">
        Our Comprehensive Web Services
      </h2>
      <div className="services__list">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;