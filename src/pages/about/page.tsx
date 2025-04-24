import { SectionLayout } from "../../components/sectionLayout"
import { SOFT_SKILLS, TECHNOLOGIES, TECHNOLOGIES_COMING_SOON } from "../../data/aboutMe"
import { TechnologieItem } from "./components/technologieItem"
import './index.scss'

export const AboutPage = () => {
  return (
    <SectionLayout id="about" className="about">
      <div className="about-page">
        <div className="title">
          <h2>ABOUT ME</h2>
          <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
        </div>
        <div className="underline">
          <span>🧑‍💻</span>
        </div>

        <div className="about-me">
          <section className="about-me__content">
            <div className="about-me__bio">
              <h3>Who am I?</h3>
              <p>
                I'm a <strong>Full Stack Software Engineer</strong> with +3 years of experience building solutions with technologies like <strong>React.js, Node.js, and TypeScript</strong>. I enjoy solving complex problems and building useful tools through software. I'm convinced that artificial intelligence is not only revolutionizing our industry but has become a key driver of technological development and accelerating <strong>innovation</strong>.
              </p>
            </div>
            <div className="about-me__skills">
              <h3>My soft skills?</h3>
              <ul className="skills-list">
                {
                  SOFT_SKILLS.map((item) => {
                    return (
                      <li className="skills-list__item" key={item}>
                        <i className="fa fa-check" />
                        <span>{item}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </section>
          <section className="about-me__technologies">
            <div className="technologies-list">
              <h3>My technologies?</h3>
              <div className="technologies-list">
                {
                  TECHNOLOGIES.map((item) => {
                    return (
                      <TechnologieItem key={item.name} name={item.name} img={item.img} style={item.style} />
                    )
                  })
                }
              </div>
            </div>
            <div className="coming-soon">
              <h3>Coming Soon</h3>
              <div className="technologies-list">
                {
                  TECHNOLOGIES_COMING_SOON.map((item) => {
                    return (
                      <TechnologieItem key={item.name} name={item.name} img={item.img} style={item.style} />
                    )
                  })
                }
              </div>
            </div>
          </section>
        </div>

      </div>
    </SectionLayout>
  )
}