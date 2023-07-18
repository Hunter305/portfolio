import {
  Container,
  CssBaseline,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import "../styles/icon.css";

const Skills = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ffd72e",
          // #64DAEE
          paddingTop: "20px",
          paddingBottom: "50px",
        }}
        id="Skills"
      >
        {/* Skills need to remove the height after */}
        <CssBaseline />
        <Container sx={{ textAlign: "center" }}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" align="center">
              Skills & Technologies
            </Typography>
          </ThemeProvider>
          <Typography variant="h6" mt={3}>
            Frontend
          </Typography>

          <Grid container justifyContent="center" mt={3}>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <FaReact
                    style={{
                      backgroundColor: "#19D7FF",
                      fontSize: "5em",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  reactjs
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <TbBrandNextjs
                    style={{
                      backgroundColor: "white",
                      fontSize: "5em",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  Nextjs
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <FaBootstrap
                    style={{
                      color: "#8210F5",
                      fontSize: "5em",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  Bootstrap
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img src="src/img/vuejs.png" style={{ height: "5em" }} />
                </Grid>
                <Grid item xs={12}>
                  Vuejs
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src="src/img/redux.png"
                    style={{ height: "5em", width: "5em" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  Redux
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img src="src/img/materialui.png" style={{ height: "5em" }} />
                </Grid>
                <Grid item xs={12}>
                  MaterialUi
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h6" mt={5}>
            Backend
          </Typography>
          <Grid container justifyContent="center" mt={3}>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src="src/img/backend/nodejs.png"
                    style={{ height: "5em" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  Nodejs
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src="src/img/backend/express.png"
                    style={{ height: "5em" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  Expressjs
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src="src/img/backend/mongo.png"
                    style={{ height: "5em" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  MongoDb
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src="src/img/backend/mongoose.png"
                    style={{ height: "5em" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  Mongoose
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src="src/img/backend/sql.png"
                    style={{ height: "5em", width: "5em" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  SQL
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src="src/img/backend/django.png"
                    style={{ height: "5em" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  Django
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h6" mt={5}>
            Programming Languages
          </Typography>
          <Grid container justifyContent="center" mt={3}>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img src="src/img/backend/js.png" style={{ height: "5em" }} />
                </Grid>
                <Grid item xs={12}>
                  Javascript
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={2} md={3} mt={2}>
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src="src/img/backend/python.png"
                    style={{ height: "5em" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  Python
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h6" mt={5}>
            Soft Skills
          </Typography>
        </Container>
      </div>
      <Divider sx={{ height: "2px", backgroundColor: "#000" }} />
    </>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

export default Skills;
