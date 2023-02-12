import getCollection from "@/utils/getFirestoreCollection";
import { Grid } from "@mui/material";
import Meta from "@/components/Meta";
import PageHeader from "@/components/PageHeader";

import ProjectCard from "@/components/projects/ProjectCard";

function Projects({ projects }) {
  return (
    <>
      <Meta title="Projects" />
      <PageHeader title="Projects" />
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item key={`${index}-project`} xs={12} sm={6} md={4} lg={3}>
            <ProjectCard key={project.name} project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getCollection("Projects");
  return {
    props: {
      projects,
    },
  };
}

export default Projects;
