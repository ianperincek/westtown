import React from "react";
import "../../styles/Reviews.scss";

type Testimonial = {
  image: string;
  alt: string;
  rating: number;
  quote: string[];
  author: {
    name: string;
    title: string;
  };
};

const testimonials: Testimonial[] = [
  {
    image: "/assets/images/dawn-gluskin.webp",
    alt: "Woman smiling, seated in a comfortable chair",
    rating: 5,
    quote: [
      "We hired Ian for two web projects: SolTecLabs.com & SolTecElectronics.com and would highly recommend his work. With just a small amount of direction given, Ian was able to create two well-designed sites that showcased our content and capabilities beautifully!",
      "His after-design follow-up is excellent as he worked closely with us on ironing out any/all small details until everything was perfected (unlike some web-designers that disappear when the check clears the bank!).",
      "Ian is somebody that you can count on long-term to work with you as your website needs continue to change and grow. His graphic art capabilities and creativity are quite impressive as well—great logo design work & web-page interface that all blend together nicely.",
      "He's quick to return an email or phone call & works within deadlines given too. ",
      "Thanks Ian!",
    ],
    author: {
      name: "Dawn",
      title: "President & CEO - Soltec Electronics",
    },
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial">
      <div className="cs-container">
        <h2 className="cs-title">Words From Our Customers</h2>
      </div>

      {testimonials.map((testimonial, index) => (
        <div className="testimonial__container" key={index}>
          <div className="testimonial__image-wrapper">
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="testimonial__image"
              loading="lazy"
            />
          </div>
          <div className="testimonial__content">
            <div className="testimonial__rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span
                  className="testimonial__star"
                  aria-hidden="true"
                  key={`star-${i}`}
                >
                  &#9733;
                </span>
              ))}
              <span className="sr-only">
                {testimonial.rating} out of 5 stars
              </span>
            </div>
            <blockquote className="testimonial__quote">
              {testimonial.quote.map((paragraph, i) => (
                <p key={`paragraph-${i}`}>{paragraph}</p>
              ))}
            </blockquote>
            <footer className="testimonial__author">
              <p className="testimonial__author-name">
                {testimonial.author.name}
              </p>
              <p className="testimonial__author-title">
                {testimonial.author.title}
              </p>
            </footer>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestimonialSection;