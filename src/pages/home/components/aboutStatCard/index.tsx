import { BlurFollower } from '../../../../components/blurEffect'
import './index.scss'

interface Props {
  title: string
  subject: string
  icon: string
}

export const AboutStatCard = ({ title, subject, icon }: Props) => {
  return (
    <BlurFollower>
      <div className="about-stat-card">
        <i className={icon} />
        <h3>{title}</h3>
        <p>{subject}</p>
      </div>
    </BlurFollower>
  )
}