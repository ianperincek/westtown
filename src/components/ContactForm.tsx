import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQItem[];
}

const ContactForm: React.FC<Props> = ({ faqs }) => {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Please wait...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (response.status === 200) {
        setFormStatus(
          "Thank you for your submission! We will get back to you soon."
        );
        form.reset();
      } else {
        console.error(result);
        setFormStatus(result.message || "There was an error submitting the form.");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackClick = () => {
    if (window.history.length > 1) {
      // Go back to the previous page
      window.history.back();
    } else {
      // Fallback: Navigate to a default page
      window.location.href = '/';
    }
  };

  return (
    <div>
        
      <h1 id="page-heading" className="visually-hidden">Contact Us</h1>
      <section id="csf-contact" className="cs-contact" aria-labelledby="form-heading">
        <div className="cs-container">
        <header className="cs-form-header">
            <a href="/" id="back-button" className="back-link cs-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="arrowsvg"><path d="M7.53 1.97a.75.75 0 0 0-1.06 0L1.47 6.866a1.25 1.25 0 0 0 0 1.768L6.47 13.53a.75.75 0 0 0 1.06-1.06l-3.97-3.97h10.69a.75.75 0 0 0 0-1.5H3.56l3.97-3.97a.75.75 0 0 0 0-1.06"></path></svg>Close this form</a>
              <h2 id="form-heading">Please provide your information.</h2>
        </header>
          <form
            id="cs-form"
            className="cs-form needs-validation"
            name="Contact Form"
            method="post"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value="752c5f6c-0251-4861-9973-0cba489ba538"
            />

            <input
              type="checkbox"
              className="hidden"
              style={{ display: "none" }}
              name="botcheck"
              aria-hidden="true"
              aria-label="Do not fill out this field"
            />

            <fieldset className="cs-form__fieldset">
              <legend className="visually-hidden">Your Information</legend>

              <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Jane Smith"
                aria-required="true"
              />

              <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                aria-required="true"
              />

              <label htmlFor="phone">Phone <span aria-hidden="true">*</span></label>
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                placeholder="555-555-5555"
                aria-required="true"
              />

              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="The Corporation"
              />

              <label htmlFor="message" className="cs-label-message">
                Tell us about your project. <span aria-hidden="true">*</span>
              </label>
              <textarea
                required
                name="message"
                id="message"
                placeholder="Write message..."
                aria-required="true"
              ></textarea>
            </fieldset>

            <button
              className="cs-button cs-button-solid"
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting ? "true" : "false"}
            >
              {isSubmitting ? "Submitting..." : "OK"}
            </button>
          </form>

          <button
            className="back-link"
            type="button"
            onClick={handleBackClick}
            aria-label="Close form and return to the previous page"
          >
            X
          </button>
        </div>
      </section>

      {formStatus && (
        <div
          id="result"
          className={`cs-contact-success ${formStatus ? "" : "hide"}`}
          role="status"
          aria-live="polite"
        >
          {formStatus}
        </div>
      )}
    </div>
  );
};


export default ContactForm;