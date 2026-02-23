import "./Contact.css";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="contact">
      <div className="contact__container">
        <h2 className="contact__title">
          LET'S WORK <span className="contact__title-break">TOGETHER</span>
        </h2>
        <p className="contact__subtitle">
          For new business enquires, please reach out to:
        </p>

        <div className="contact__info">
          <span className="contact__text">✉ info@bypistacho.com</span>

          <span className="contact__text">📷 @bypistacho</span>

          <span className="contact__text">📱 +54 9 11 6505-7968</span>
        </div>

        <div className="contact__footer">
          <div className="contact__logo">
            <img
              src="/pistachoLogo.png"
              alt="PISTACHO"
              className="contact-logo-image"
            />
          </div>

          <p className="contact__description">
            PISTACHO is a multidisciplinary creative agency in BA, Argentina
          </p>

          <p className="contact__copyright">© {currentYear} Pistacho.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
