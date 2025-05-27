import "./ProjectTile.scss";
import { useNavigate } from "react-router-dom";

function ProjectTile({ projectID, name, image, desc }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/project/${projectID}`)}
      className="projectTile"
    >
      <img
        src={process.env.PUBLIC_URL + image}
        alt={name}
        className="projectTile__image"
      />
      <div className="projectTile__info">
        <h3 className="projectTile__title">{name}</h3>
        <p className="projectTile__desc">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectTile;
