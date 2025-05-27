import "./Project.scss";
import projectDataFile from "../../Assets/ProjectData.json";
import { useParams } from "react-router-dom";

function Project() {
  let { id } = useParams();
  let projectData = projectDataFile.projects;
  let project;

  for (let p = 0; p < projectData.length; p++) {
    if (parseInt(projectData[p].id) - id === 0) {
      project = projectData[p];
    }
  }

  if (project === undefined) {
    return (
      <div className="project">
        <h1 className="project__error">No project Found. Return to Home</h1>
      </div>
    );
  }

  let extraImages = [];

  for (let i = 3; i < project.images.length; i++) {
    extraImages.push(project.images[i]);
  }

  return (
    <div className="project">
      <div className="project__hero">
        <img
          src={process.env.PUBLIC_URL + project.images[0]}
          alt="hero-image"
          className="project__heroimage"
        />
        <p className="project__herotext">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptatem eaque voluptates aliquid suscipit, laboriosam officia
          deserunt fuga itaque quos tempora mollitia aliquam, minima maxime!
          Repudiandae quis amet voluptatibus illo?
        </p>
      </div>
      <div className="project__secondary">
        <p className="project__secondarytext">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis id
          possimus libero nihil qui! Ex ut dolor corporis quis unde ipsum. Fugit
          odio excepturi sunt sapiente animi repudiandae, est laborum.
        </p>
        <div className="project__secondaryimages">
          <img
            src={process.env.PUBLIC_URL + project.images[1]}
            alt={project.name}
            className="project__secondaryimage"
            style={{ marginBottom: 3 + `rem` }}
          />
          <img
            src={process.env.PUBLIC_URL + project.images[2]}
            alt={project.name}
            className="project__secondaryimage"
          />
        </div>
      </div>
      <div className="project__extra">
        {extraImages.map((image) => {
          let parts = image.split(".");
          let extension = parts[1];

          if (extension === "mp4") {
            return (
              <video controls className="project__extra__video">
                <source src={process.env.PUBLIC_URL + image} />
              </video>
            );
          } else {
            return (
              <img
                src={process.env.PUBLIC_URL + image}
                alt={project.name}
                className="project__extra__image"
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Project;
