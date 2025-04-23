/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import chicoDevLogo from '../../assets/img/chico_dev-logo.webp'
import { Navigation } from '../navigation'
import CV from '../../assets/cv/CV-Francisco_Garcia-fullstack_developer.pdf'
import './index.scss'

export const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let lastScrollTop = 0

  useEffect(() => {
    const onScroll = () => {
      const header = headerRef.current
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        header?.classList.add('header-container--hide')
      } else {
        header?.classList.remove('header-container--hide')
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${isMenuOpen ? 'header-open' : ''}`} ref={headerRef}>
      <section className='header-container'>
        <div className='logo-container'>
          <a href="#">
            <img src={chicoDevLogo} alt="Logo" />
          </a>
        </div>

        <button
          className='menu-toggle'
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Abrir menú"
        >
          {!isMenuOpen ?
            <i className='fa-solid fa-bars' />
            :
            <i className='fa-solid fa-x' />
          }
        </button>

        <div className='header-content'>
          <nav className='navigation'>
            <Navigation />
          </nav>

          <div className='download-cv'>
            <a href={CV} target="_blank" rel="noreferrer">
              <i className='fa-solid fa-download' />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>
    </header>
  )
}