import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <form className="contact__form" action="/action_page.php">
        <label className="contact__label" for="fname">
          First Name
        </label>
        <input
          className="contact__input"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label className="contact__label" for="lname">
          Last Name
        </label>
        <input
          className="contact__input"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label className="contact__label" for="country">
          Email
        </label>
        <input
          className="contact__input"
          type="text"
          id="email"
          name="email"
          placeholder="Your email.."
        />

        <label className="contact__label" for="subject">
          Subject
        </label>
        <input
          className="contact__input"
          type="text"
          id="subject"
          name="subject"
          placeholder="Email subject line.."
        />

        <label className="contact__label" for="message">
          Message
        </label>
        <textarea
          className="contact__text"
          id="message"
          name="message"
          placeholder="Your message.."
        ></textarea>

        <input className="contact__button" type="submit" value="Submit" />
      </form>
      <embed
        src="/About/AuroraHull_resume.pdf"
        type="application/pdf"
        className="contact__resume"
      />
      <div className="contact__image-container">
        <img
          src="/About/about02.jpg"
          alt="headshot"
          className="contact__image"
        />
      </div>
    </div>
  );
}

export default Contact;
