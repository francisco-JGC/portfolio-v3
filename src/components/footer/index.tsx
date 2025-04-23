import { SOCIAL_ITEMS } from '../../data/socialMedia'
import { SocialMediaItem } from '../socialMediaItem'
import chicoDevLogo from '../../assets/img/chico_dev-logo.webp'
import { ITEMS } from '../../data/navigationItems'
import './index.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className='footer__brand'>
          <img src={chicoDevLogo} />
          <h3>CHICO DEV</h3>
        </div>
        <ul className="footer__nav">
          {ITEMS.map((item, index) => (
            <li key={index} className={`navigation-item`}>
              <a href={`#${item.to}`}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="footer__social">
          {
            SOCIAL_ITEMS.map((item, index) => {
              return (
                <SocialMediaItem
                  href={item.url}
                  key={index}
                  iconName={item.icon}
                  name={item.name}
                />
              )
            })
          }
        </div>
      </div>

      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} CHICO DEV. All rights reserved | Made with <span className="footer__heart">❤️</span> from scratch.
      </p>
    </footer>
  )
}
