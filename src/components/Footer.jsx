import React from "react";
import { Container, Grid } from "@mui/material";
import { GitHub, LinkedIn, Article } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        backgroundColor: "#64DAEE",
        paddingTop: "50px",
        paddingBottom: "20px",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Grid container spacing={0}>
          <Grid item md={4} xs={12}>
            <a
              href="https://github.com/Hunter305"
              alt="github"
              style={{ textDecoration: "none", color: "#000" }}
              target="_blank"
            >
              <GitHub className="footerFont" fontSize="large" />
              <h4 style={{ margin: "0" }}>github</h4>
            </a>
          </Grid>
          <Grid item md={4} xs={12}>
            <a
              href="https://www.linkedin.com/in/avinash-s-dev/"
              alt="linkedin"
              style={{ textDecoration: "none", color: "#0A66C2" }}
              target="_blank"
            >
              <LinkedIn className="footerFont" fontSize="large" />
              <h4 style={{ margin: "0" }}>LinkedIn</h4>
            </a>
          </Grid>
          <Grid item md={4} xs={12}>
            <a
              href="https://drive.google.com/file/d/1JxaI-eP8uw6_7aYaE6oyMwFUrWFwiDRE/view?usp=drive_link"
              alt="Resume"
              style={{ textDecoration: "none", color: "#fff" }}
              target="_blank"
            >
              <Article className="footerFont" fontSize="large" />
              <h4 style={{ margin: "0" }}>Resume</h4>
            </a>
          </Grid>
        </Grid>
        <p style={{ color: "grey", paddingTop: "20px" }}>
          Avinash S &copy; {currentYear}
        </p>
      </Container>
    </div>
  );
};

export default Footer;
