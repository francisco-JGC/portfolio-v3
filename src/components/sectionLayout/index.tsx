import { ReactNode } from "react"
import './index.scss'

interface Props {
  children: ReactNode
  className?: string
}

export const SectionLayout = ({ children, className }: Props) => {
  return (
    <section className={`section-layout ${className && className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}