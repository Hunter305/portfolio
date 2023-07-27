import {
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Projects = () => {
  return (
    // <div style={{ height: "500px" }} id="Project">
    //   Projects
    //   <Button
    //     variant="contained"
    // sx={{
    //   backgroundColor: "#69CF95",
    //   color: "#000",
    //   "&:hover": { backgroundColor: "#69CF95" },
    // }}
    //   >
    //     sample button color
    //   </Button>
    // </div>
    <Container maxWidth="md" id="Project">
      <h2 className="projecttitle">
        <span>Projects</span>
      </h2>

      <Grid container>
        <Grid item xs={12}>
          <h4 style={{ marginBottom: "0px" }}>ProCart</h4>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6} sx={{ border: "solid" }}>
              <p>
                ProCart is a dynamic and user-friendly e-commerce web
                application developed using the MERN stack (MongoDB, Express.js,
                React, Node.js). As an aspiring web developer, I conceptualized
                and created ProCart to offer shoppers a seamless online buying
                experience while providing sellers with robust tools to manage
                their businesses efficiently.
              </p>
              <p>
                ProCart is a testament to my proficiency in web development,
                employing cutting-edge technologies to create a modern and
                efficient e-commerce platform. I take immense pride in building
                ProCart, and it demonstrates my dedication to delivering
                high-quality web applications.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 170 }}
                  image="src/img/procart.png"
                  title="procart"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ProCart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Procart is e-commerce website built using MERN stack. <br />
                    Demo:
                    <ul style={{ marginTop: "0px" }}>
                      <li>email:admin@email.com (Admin),password: 1234</li>
                      <li>email:avinash@email.com (Customer),password: 1234</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#69CF95",
                      color: "#000",
                      "&:hover": { backgroundColor: "#69CF95" },
                    }}
                  >
                    <a
                      href="https://procart.onrender.com/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Launch app
                    </a>
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#69CF95",
                      color: "#000",
                      "&:hover": { backgroundColor: "#69CF95" },
                    }}
                  >
                    <a
                      href="https://github.com/Hunter305/procart/tree/master"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Code
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* this one after creating a new project need to un comment */}
        {/* <Grid item xs={12}>
          <p>2nd</p>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Projects;
