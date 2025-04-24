import { WorkExperience } from "../../data/workExperience"
import { useCursorFollower } from "../../hooks/useCursorFollowe"
import { Img } from "../img"
import './index.scss'

interface Props {
  experience: WorkExperience
}

export const ExperienceItem = ({ experience }: Props) => {
  const { parentRef, position, onMouseMove } = useCursorFollower();

  return (
    <div className="experience-item" ref={parentRef} onMouseMove={onMouseMove}>
      <a href={experience.page_url} target="_blank">
        <Img src={experience.brand} sizes="200" width={100} alt={experience.company_name} />
      </a>
      <div className="experience-info"
        style={{
          transform: "translate(0, 0)",
          left: `${position.x - 30}px`,
          top: `${position.y + 30}px`,
          pointerEvents: "none",
        }}
      >
        <h3><i className="fa fa-home icon" />{experience.company_name}</h3>
        <h4>{experience.position}</h4>
        <span>{experience.start_date} - {experience.end_date}</span>
        <p>{experience.description}</p>
      </div>
    </div>
  )
}