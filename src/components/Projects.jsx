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
import procart from "../img/procart.png";

import mesmer from "../img/mesmer.png";
import tracky from "../img/tracky.png";
import admin from "../img/admin.png";

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
                  image={procart}
                  title="procart"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ProCart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Procart is e-commerce website built using MERN stack. <br />
                  </Typography>
                  Demo:
                  <ul style={{ marginTop: "0px" }}>
                    <li>email:admin@email.com (Admin),password: 1234</li>
                    <li>email:avinash@email.com (Customer),password: 1234</li>
                  </ul>
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
        <Grid item xs={12} sx={{ marginBottom: "50px" }}>
          <h4 style={{ marginBottom: "20px", marginTop: "40px" }}>Mesmer</h4>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
                <CardMedia sx={{ height: 170 }} image={mesmer} title="mesmer" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mesmer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Just get mesmerized in the music
                    <br />
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
                      href="https://mesmermusic.netlify.app/"
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
                      href="https://github.com/Hunter305/Mesmer"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Code
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sx={{ border: "solid" }}>
              <p>
                Mesmer is an engaging and immersive music player web application
                built using React and powered by the Shazam API. As a passionate
                web developer and music enthusiast, I conceptualized and created
                Mesmer to deliver a captivating and seamless music listening
                experience to users.
              </p>
              <p>
                Mesmer exemplifies my proficiency in leveraging cutting-edge
                technologies like React and integrating external APIs to create
                interactive and feature-rich web applications. As a music player
                that provides a captivating and personalized listening
                experience, Mesmer is a testament to my passion for delivering
                innovative solutions through web development.
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <h4 style={{ marginBottom: "0px", marginTop: "10px" }}>Tracky</h4>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6} sx={{ border: "solid" }}>
              <p>
                Tracky is a dynamic job tracking web application built using the
                MERN stack (MongoDB, Express.js, React, and Node.js). As a
                passionate web developer, I envisioned and developed Tracky to
                streamline the job search process and empower users to
                efficiently track their job applications in one centralized
                platform.
              </p>
              <p>
                During the development of Tracky, my focus was on creating a
                powerful yet user-friendly application that simplifies the job
                search process and empowers users to take control of their job
                applications. I ensured that the application's design was
                visually appealing and intuitive, aiming for a seamless user
                experience.
              </p>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
                <CardMedia sx={{ height: 170 }} image={tracky} title="Tracky" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tracky
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Track your job applications using tracky
                    <br />
                  </Typography>
                  Demo:
                  <ul style={{ marginTop: "0px" }}>
                    <li>email:test@email.com, password: test@1234</li>
                  </ul>
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
                      href="https://tracky.onrender.com/"
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
                      href="https://github.com/Hunter305/tracky"
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
        <Grid item xs={12} sx={{ marginBottom: "50px" }}>
          <h4 style={{ marginBottom: "20px", marginTop: "40px" }}>
            Admin Dashboard
          </h4>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
                <CardMedia sx={{ height: 170 }} image={admin} title="admin" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Admin Dashboard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Visualize your data
                    <br />
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
                      href="https://dashboard-avinashs.netlify.app/"
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
                      href="https://github.com/Hunter305/admin_dashboard"
                      target="_blank"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Code
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sx={{ border: "solid" }}>
              <p>
                AdminDash is a dynamic and visually appealing frontend admin
                dashboard web application, thoughtfully developed using React
                and powered by Chart.js. As a dedicated web developer, I
                conceptualized and crafted AdminDash to provide businesses with
                a comprehensive tool for monitoring key performance indicators
                and making data-driven decisions efficiently.
              </p>
              <p>
                AdminDash is a testament to my expertise in frontend development
                using React and my dedication to delivering high-quality web
                applications. Its data visualization capabilities and intuitive
                interface make it an indispensable tool for businesses seeking
                to harness the power of data in decision-making.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
