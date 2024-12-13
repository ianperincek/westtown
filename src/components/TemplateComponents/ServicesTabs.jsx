import React, { useState, useRef } from 'react';
import serviceData from '../../data/services.js';
import styles from './ServiceTabs.module.scss';

const ServiceTabs = () => {
  const tabKeys = Object.keys(serviceData);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const [hoveredTab, setHoveredTab] = useState(null);
  const contentRefs = useRef({});
  const prevActiveTab = useRef(null);

  

  return (
    <section className={styles.serviceBlockWrap}>
      <div className={styles.serviceBlock}>
        <ul className={styles.serviceBlock__list}>
          {tabKeys.map((key) => {
            const isActive = activeTab === key;
            const isHovered = hoveredTab === key;
            const service = serviceData[key];

            return (
              <li
                key={key}
                className={`${styles.serviceBlock__item} ${
                  isActive ? styles.serviceBlock__itemActive : ''
                } ${hoveredTab && !isHovered ? styles.dimmed : ''}`}
                onMouseEnter={() => setHoveredTab(key)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <button
                  className={styles.serviceBlock__button}
                  onClick={() => setActiveTab(key)}
                  aria-expanded={isActive}
                  aria-controls={`content-${key}`}
                  id={`accordion-${key}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveTab(key);
                    }
                  }}
                >
                  <span className={styles.serviceBlock__buttonText}>
                    {service.tabTitle}
                  </span>
                </button>
                <div
                  id={`content-${key}`}
                  className={`${styles.serviceBlock__content} ${
                    isActive ? styles.serviceBlock__contentActive : ''
                  }`}
                  role="region"
                  aria-labelledby={`accordion-${key}`}
                  ref={(el) => (contentRefs.current[key] = el)}
                  
                >
                  <div className={styles.serviceBlock__inner}>
                    <h2 className={styles.serviceBlock__title}>
                      {service.title}
                    </h2>
                    <p className={styles.serviceBlock__description}>
                      {service.description}
                    </p>
                    <div className={styles.serviceBlock__image}>
                      <img src={service.image.src} alt={service.image.alt} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServiceTabs;