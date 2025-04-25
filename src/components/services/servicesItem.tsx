import './index.scss'
import { Service } from '../../data/services'
import { BlurFollower } from '../blurEffect'

interface Props {
  service: Service
}

export const ServiceItem = ({ service }: Props) => {
  return (
    <BlurFollower>
      <div className="service-item">
        <i className={`${service.icon}`} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </BlurFollower>
  )
}