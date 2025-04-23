import './index.scss'
import { ITEMS } from '../../data/navigationItems'
import { useEffect, useState } from 'react'

export const Navigation = () => {
  const [selectedHash, setSelectedHash] = useState<string>(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])


  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        {ITEMS.map((item, index) => (
          <li key={index} className={`navigation-item ${selectedHash === "#" + item.to ? 'navigation-item-selected' : ''}`}>
            <a href={`#${item.to}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}