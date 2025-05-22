import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about__column">
        <p className="about__item">About me description</p>
        <img
          src="About/about01.jpeg"
          alt="gaming with spock"
          className="about__item"
        />
      </div>
      <div className="about__column">
        <img src="About/about02.jpg" alt="headshot" className="about__item" />
        <img
          src="About/about03.jpeg"
          alt="starwars with dad"
          className="about__item"
        />
      </div>
    </div>
  );
}

export default About;
