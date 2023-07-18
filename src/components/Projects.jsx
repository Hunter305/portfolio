import { Button } from "@mui/material";
import React from "react";

const Projects = () => {
  return (
    <div style={{ height: "500px" }} id="Project">
      Projects
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#69CF95",
          color: "#000",
          "&:hover": { backgroundColor: "#69CF95" },
        }}
      >
        sample button color
      </Button>
    </div>
  );
};

export default Projects;
