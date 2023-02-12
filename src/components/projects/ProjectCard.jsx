import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        margin: 1,
        width: 300,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          height: "100%",
        }}
      >
        <Typography gutterBottom variant="h5">
          {project.name}
        </Typography>
        <Typography variant="body2" align="justify">
          {project.description}
        </Typography>
        <br />
        <Typography variant="body2">Tech Stack</Typography>
      </CardContent>
      <CardActionArea href={`/projects/${project.name}`}>
        <CardContent>
          <Typography variant="body2">View Project</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
