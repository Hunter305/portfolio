import { Button, Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: "70px 0", textAlign: "center" }} id="Contact">
      <Container maxWidth="md">
        <h2 style={{ marginBottom: "0px" }}>Get in touch</h2>
        <h4 style={{ marginTop: "0px" }}>If you wish to collaborate</h4>
        <p>
          Have a project in mind or want to discuss collaboration opportunities?
          I'd love to hear from you! Please don't hesitate to reach out using
          any of the following methods:
        </p>
        <EmailIcon fontSize="large" />
        <br />
        <Button size="small" variant="contained">
          <a
            href="mailto:avinash8169@gmail.com"
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Email Me
          </a>
        </Button>
      </Container>
    </div>
  );
};

export default Contact;
