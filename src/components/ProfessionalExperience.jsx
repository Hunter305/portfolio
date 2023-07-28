import { Container, Grid, Stack, Typography } from "@mui/material";
import "../styles/professional.css";

const ProfessionalExperience = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "#ffd72e",
        paddingTop: "20px",
        paddingBottom: "50px",
      }}
    >
      <Container>
        <h2 className="title">
          <span>Professional Experience</span>
        </h2>
        <h3 style={{ marginBottom: "0px" }}>
          Wipro Technologies (10/2021 – 01/2023)
        </h3>
        <em style={{ margin: "0px" }}>
          Project Engineer - SAP BI BW Consultant
        </em>

        <Stack>
          <p>
            As a SAP BI/BW Consultant at Wipro, I had the privilege of being
            part of a dynamic team entrusted with delivering business
            intelligence and data warehousing solutions for our esteemed client,
            Philips.
          </p>
          <strong>Key Responsibilities and Achievements:</strong>
          <ul>
            <li className="responsibilities">
              Requirements Gathering and Analysis:{" "}
            </li>
            Collaborated closely with business stakeholders from Philips to
            understand their reporting and data analysis needs. Conducted
            in-depth requirement gathering sessions to capture essential
            business KPIs (Key Performance Indicators) and data sources.
            <li className="responsibilities">
              Design and Development of BI/BW Solutions:{" "}
            </li>
            Utilizing my expertise in SAP Business Intelligence and Business
            Warehouse (BI/BW) modules, I contributed to the design and
            development of data models, data extraction, transformation, and
            loading (ETL) processes. I ensured the data was structured optimally
            for reporting and analytical purposes.
            <li className="responsibilities">Performance Optimization:</li>
            Proactively identified performance bottlenecks within the BI/BW
            system and implemented optimization techniques to enhance query
            performance and reduce data load times. This optimization led to
            faster access to critical business information.
            <li className="responsibilities">
              Client Relationship Management:
            </li>
            Cultivated strong relationships with key stakeholders at Philips,
            actively engaging with them to understand their evolving business
            requirements and providing proactive solutions to meet their
            changing needs.
            <li className="responsibilities">Project Management Support:</li>
            Assisted in project planning and execution by providing insights
            into technical feasibility and resource allocation. Collaborated
            with cross-functional teams to deliver projects within the agreed
            timelines and budget.
          </ul>
          <strong>Technologies and Tools Used:</strong>
          <ul>
            <li>SAP Business Intelligence (BI)</li>
            <li>SAP Business Warehouse (BW)</li>
          </ul>
          <strong>Desire to Transition to Full Stack Development:</strong>
          Although I immensely enjoyed my experience as a SAP BI/BW Consultant,
          I have discovered my true passion for full-stack development. The
          opportunity to work on both front-end and back-end technologies,
          crafting seamless user experiences, and being involved in end-to-end
          development excites me.
          <p>
            <strong>Next Career Steps:</strong> <br />I am now actively seeking
            opportunities to transition my career into full-stack development.
            With my strong foundation in programming and data handling from my
            previous role, I am confident in my ability to bring my skills to
            create robust and user-centric web applications.
          </p>
          <p style={{ marginTop: "5px" }}>
            I am dedicated to continuous learning and have already begun to
            upskill in technologies like React.js, Node.js, HTML, CSS, and
            JavaScript. I am excited to apply my analytical mindset,
            problem-solving abilities, and dedication to delivering high-quality
            solutions in the full-stack development realm.
          </p>
        </Stack>
      </Container>
    </div>
  );
};
export default ProfessionalExperience;
