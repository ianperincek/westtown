import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InteractiveGrid: React.FC = () => {
  const services = [
    { id: 1, title: 'Custom Web Design', description: 'Crafting unique websites that reflect your brand.' },
    { id: 2, title: 'Front-End Development', description: 'Fast, clean code for optimal performance.' },
    { id: 3, title: 'Accessibility Compliance', description: 'Ensuring your website is accessible to all users.' },
    { id: 4, title: 'Performance Optimization', description: 'Optimizing load times for better user experience.' },
  ];

  useEffect(() => {
    gsap.to('.grid__item', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.grid',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="serviceGrid">
      <div className="grid">
        {services.map((service) => (
          <div className="grid__item" key={service.id}>
            <h2 className="grid__item-heading">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveGrid;
