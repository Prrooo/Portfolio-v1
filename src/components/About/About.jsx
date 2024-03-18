import style from "../About/About.module.css";
import heroImage from "../../../assets/about/aboutImage.png";
import cursorImage from "../../../assets/about/cursorIcon.png";
import serverImage from "../../../assets/about/serverIcon.png";
import uiImage from "../../../assets/about/uiIcon.png";

const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>About</h2>
      <div className={style.content}>
        <img
          src={heroImage}
          alt="hero image"
          className={style.aboutImage}
        />
        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img src={cursorImage} alt="Cursor icon" />
            <div className={style.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img src={serverImage} alt="Server icon" />
            <div className={style.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img src={uiImage} alt="UI icon" />
            <div className={style.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
