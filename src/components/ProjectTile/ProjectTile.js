import "./ProjectTile.scss";

function ProjectTile({ projectID, name, image, desc }) {
  console.log(`../../Assets/ProjectImages/${image}`);
  return (
    <div className="projectTile">
      <img
        src={`../../Assets/ProjectImages/${image}`}
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
