import "./About.scss";

function About() {
  return (
    <div className="about">
      <p className="about__item about__item-text">
        My goal as a graphic designer is to create impactful design experiences
        that bring stories to life in a multitude of forms. I aim to blend
        thoughtful print design with immersive exhibition work, grounded in
        clarity and craft. I strive to connect people to ideas in ways they can
        see, touch, and remember. <br />
        <br />
        Growing up surrounded by designers and artists and treating my father’s
        studio as a second home, it was inevitable that I would fall in love
        with graphic design. At SCAD, I have immersed myself in the world of
        print and physical production, finding joy particularly in typography
        and texture and the bold presence of exhibition designs. <br />
        <br />
        With a strong foundation in design principles, hands-on experience, and
        a desire to contune learning and expanding my talents, I look forward to
        contributing to studios or institutions that share my love for crafting
        meaningful, visually compelling experiences.
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
