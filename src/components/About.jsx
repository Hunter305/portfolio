import {
  CssBaseline,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
  Grid,
  Container,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import "../styles/about.css";
import img from "../img/pic.jpg";

const About = () => {
  return (
    <div className="about" id="About">
      <CssBaseline />
      <Container maxWidth="md" sx={{ pb: "50px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ThemeProvider theme={theme}>
              <Typography variant="h1" className="test">
                Hello! I'm Avinash
              </Typography>
            </ThemeProvider>
            <p>
              As a frontend developer, my expertise lies in creating seamless
              and intuitive user experiences. I specialize in using cutting-edge
              technologies to produce high-quality web applications.
              Specifically, I have vast knowledge of ReactJS and NodeJS, which
              allow me to build complex and dynamic applications with ease.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia sx={{ height: 170 }} image={`${img}`} />
              <CardContent sx={{ backgroundColor: "#383A59", color: "#fff" }}>
                <span style={{ color: "#679FB7" }}>const </span>about{" "}
                <span style={{ color: "#AB5F98" }}>= await</span> new about
                <br />
                <p>
                  {"{"}
                  <br /> <span style={{ paddingLeft: "10px" }}>about</span>{" "}
                  <span style={{ paddingLeft: "10px" }}>:</span> [ <br />]
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* <Stack direction={"row"}>
          <Box sx={{ width: "50%" }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h1" className="test">
                Hello! I'm Avinash
              </Typography>
            </ThemeProvider>
            <p>a fullStack developer</p>
          </Box>
          <Box>
            <h3>this iplace is dp</h3>
            <h3>this is for same coding obect</h3>
          </Box>
        </Stack> */}
      </Container>
      {/* <Divider sx={{ height: "2px", backgroundColor: "#000" }} /> */}
    </div>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: ["Bebas Neue", "sans-serif"].join(","),
  },
});

export default About;
