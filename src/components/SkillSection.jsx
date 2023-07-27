import styles from "../styles/SkillsSection.module.scss";
import { FaReact, FaBootstrap } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

const SkillSection = () => {
  return (
    <div style={{ background: "#ffd72e" }} id="Skills">
      <section className={styles.container} style={{ marginTop: "0px" }}>
        <h2 className="title">
          <span>Skills & Technologies</span>
        </h2>
        <div className={styles.cardsGrid}>
          <div className={styles.cardWrapper}>
            <h4>Front-end</h4>
            <div className={styles.card} style={{ background: "#64DAEE" }}>
              <div
                className={styles.row}
                style={{ justifyContent: "space-between", padding: "0 20px" }}
              >
                <div className={styles.item}>
                  <img src="src/img/icon_html.svg" alt="html" />
                  <h4>HTML</h4>
                </div>

                <div className={styles.item}>
                  <img src="src/img/icon_css.svg" alt="css" />
                  <h4>CSS</h4>
                </div>
                <div className={styles.item}>
                  <img src="src/img/icon_javascript.svg" alt="javascript" />
                  <h4>JavaScript</h4>
                </div>
              </div>

              <div
                className={styles.row}
                style={{ justifyContent: "space-between", padding: "0 20px" }}
              >
                <div className={styles.item}>
                  <img src="src/img/icon_react.svg" alt="react" />
                  <h4>React</h4>
                </div>

                <div className={styles.item}>
                  <img src="src/img/icon_redux.svg" alt="redux" />
                  <h4>Redux</h4>
                </div>

                <div className={styles.item}>
                  <img src="src/img/icon_next.svg" alt="next" />
                  <h4>NextJS</h4>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.item}>
                  <img
                    src="src/img/icon_bootstrap.svg"
                    alt="styledComponents"
                  />
                  <h4>Bootstrap</h4>
                </div>
                <div className={styles.item}>
                  <img src="src/img/icon_material.svg" alt="styledComponents" />
                  <h4>MaterialUi</h4>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <h4>Back-end</h4>
            <div className={styles.card} style={{ background: "#64DAEE" }}>
              <div className={styles.row}>
                <div className={styles.item}>
                  <img src="src/img/icon_nodejs.svg" alt="nodejs" />
                  <h4>NodeJs</h4>
                </div>

                <div className={styles.item}>
                  <img src="src/img/icon_express.svg" alt="express" />
                  <h4>Express</h4>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.item}>
                  <img src="src/img/icon_javascript.svg" alt="javascript" />
                  <h4>JavaScript</h4>
                </div>

                <div className={styles.item}>
                  <img src="src/img/icon_python.svg" alt="python" />
                  <h4>Python</h4>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.item}>
                  <img src="src/img/icon_mongodb.svg" alt="mongodb" />
                  <h4>MongoDB</h4>
                </div>
                <div className={styles.item}>
                  <img src="src/img/icon_mysql.svg" alt="mongodb" />
                  <h4>Mysql</h4>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <h4>Miscellaneous</h4>
            <div className={styles.card} style={{ background: "#64DAEE" }}>
              <div className={styles.row}>
                <div className={styles.item}>
                  <img src="src/img/icon_git.svg" alt="git" />
                  <h4>Git</h4>
                </div>

                <div className={styles.item}>
                  <img src="src/img/icon_github.svg" alt="github" />
                  <h4>GitHub</h4>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.item}>
                  <img src="src/img/icon_vscode.svg" alt="VsCode" />
                  <h4>VScode</h4>
                </div>

                <div className={styles.item}>
                  <img src="src/img/icon_numpy.svg" alt="numpy" />
                  <h4>Numpy</h4>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.item}>
                  <img src="src/img/icon_awsec2.svg" alt="pandas" />
                  <h4>aws ec2</h4>
                </div>

                <div className={styles.item}>
                  <img src="src/img/icon_inkscape.svg" alt="inkscape" />
                  <h4>InkScape</h4>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.item}>
                  <img src="src/img/icon_linux.svg" alt="linux" />
                  <h4>Linux</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SkillSection;
