import { Card, Container, CssBaseline, Grid } from "@mui/material";

const Skills2 = () => {
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
        <Container>
          <h3 className="title">
            <span>Skills & Technologies</span>
          </h3>
          <Grid container spacing={12}>
            <Grid item xs={12} md={4} sx={{ padding: "10px 8px 40px" }}>
              <Card sx={{ backgroundColor: "#64DAEE" }}>card 1</Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>card 2</Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>card 3</Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};
export default Skills2;
