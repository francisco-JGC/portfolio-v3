import { useRef } from 'react'
import chicoDevLogo from '../../assets/img/chico_dev-logo.webp'
import { Navigation } from '../navigation'
import CV from '../../assets/cv/CV-Francisco_Garcia-fullstack_developer.pdf'
import './index.scss'

export const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const header = headerRef.current
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      header?.classList.add('header-container--hide')
    } else {
      header?.classList.remove('header-container--hide')
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  })

  return (
    <header className='header' ref={headerRef}>
      <section className='header-container'>
        <div className='logo-container'>
          <a href="#">
            <img src={chicoDevLogo} />
          </a>
        </div>

        <Navigation />

        <div className='download-cv'>
          <a
            href={CV}
            target="_blank"
            rel="noreferrer">
            <i className='fa-solid fa-download' />
            <span>
              Download CV
            </span>
          </a>
        </div>
      </section>
    </header>
  )
}