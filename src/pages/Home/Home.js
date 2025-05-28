import "./Home.scss";
import heroImage from "../../Assets/Hero/heroimage.jpeg";
import projectDataFile from "../../Assets/ProjectData.json";
import ProjectTile from "../../components/ProjectTile/ProjectTile";

function Home() {
  let projectData = projectDataFile.projects;
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__title">
            GRAPHIC DESIGNER and occasional PRINTMAKER
          </h1>
          <p className="hero__desc">
            Creating impactful design, blending print and experience, and above
            all, connecting to people.
          </p>
        </div>
        <img src={heroImage} alt="Working Desk" className="hero__image" />
      </div>
      <div className="projects">
        {projectData.map((project) => (
          <ProjectTile
            projectID={project.id}
            name={project.name}
            image={project.tile}
            desc={project.shortdescription}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
