import { SectionLayout } from "../../components/sectionLayout"
import { SocialMediaItem } from "../../components/socialMediaItem"
import { ABOUT_EXPERIENCE_ITEMS } from "../../data/aboutExperienciaItem"
import { SOCIAL_ITEMS } from "../../data/socialMedia"
import { AboutStatCard } from "./components/aboutStatCard"
import './index.scss'

export const HomePage = () => {
  return (
    <SectionLayout className="background-home" id="home">
      <section className="home-page">
        <header className="home-page__info">
          <h5>Hello I'M</h5>
          <h1>Francisco J. Garcia C.</h1>
          <p>Full Stack Software Engineer</p>
          <p>
            I'm a developer who enjoys creating clean, efficient, and scalable web solutions. I love tackling technical challenges and bringing my ideas to life through code.
          </p>
        </header>

        <address className="home-page__address">
          <a href="mailto:jjjchico1@gmail.com" className="email">jjjchico1@gmail.com</a>
          <span>León - Nicaragua</span>
        </address>

        <div className="home-page__about-experience">
          {
            ABOUT_EXPERIENCE_ITEMS.map((item, index) => {
              return (
                <AboutStatCard key={index} title={item.title} subject={item.subject} icon={item.icon} />
              )
            })
          }
        </div>

        <div className="home-page__social-media">
          {
            SOCIAL_ITEMS.map((item, index) => {
              return (
                <SocialMediaItem
                  href={item.url}
                  key={index}
                  iconName={item.icon}
                  inverted={item.inverted}
                  name={item.name}
                />
              )
            })
          }
        </div>
      </section>
    </SectionLayout>
  )
}
