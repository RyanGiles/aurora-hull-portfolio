import "./About.scss";

function About() {
  return (
    <div className="about">
      <p className="about__item about__item-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
        commodi. Nemo sit obcaecati ipsam ducimus! Et eaque placeat vitae magnam
        vel delectus fugit nesciunt, adipisci repellendus molestiae dolor
        temporibus ex.
      </p>
      <img
        src="About/about01.jpeg"
        alt="gaming with spock"
        className="about__item"
      />
      <img src="About/about02.jpg" alt="headshot" className="about__item" />
      <img
        src="About/about03.jpeg"
        alt="starwars with dad"
        className="about__item"
      />
    </div>
  );
}

export default About;
