import { WORK_EXPERIENCE } from '../../data/workExperience'
import { ExperienceItem } from './experienceItem'
import './index.scss'

export const WorkExperience = () => {
  return (
    <div className='work-experience'>
      {
        WORK_EXPERIENCE.map((item, index) => {
          return (
            <ExperienceItem key={index} experience={item} />
          )
        })
      }
    </div>
  )
}