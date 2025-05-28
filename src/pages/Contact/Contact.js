import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <form
        className="contact__form"
        method="post"
        name="contact_form"
        action="send_email.php"
      >
        <label htmlFor="name" className="contact__label">
          Your Name:
        </label>
        <input className="contact__input" id="name" type="text" name="name" />
        <label htmlFor="email" className="contact__label">
          Email Address:
        </label>
        <input
          className="contact__input"
          id="email"
          type="email"
          name="email"
        />
        <label htmlFor="message" className="contact__label">
          Message:
        </label>

        <textarea
          id="message"
          className="contact__text"
          name="message"
        ></textarea>
        <input className="contact__button" type="submit" value="Send" />
      </form>
      <embed
        src={process.env.PUBLIC_URL + "/About/AuroraHull_resume.pdf"}
        type="application/pdf"
        className="contact__resume"
      />
      <div className="contact__image-container">
        <img
          src={process.env.PUBLIC_URL + "/About/about02.jpg"}
          alt="headshot"
          className="contact__image"
        />
      </div>
    </div>
  );
}

export default Contact;
