import './index.scss'
import { SERVICES } from '../../data/services'
import { ServiceItem } from './servicesItem'

export const Services = () => {
  return (
    <div className="services" id='services'>
      <h2>My Services</h2>
      <div className='services-list'>
        {
          SERVICES.map((item, index) => {
            return (
              <ServiceItem key={index} service={item} />
            )
          })
        }
      </div>
    </div>
  )
}