import { ReactNode } from "react"
import './index.scss'

interface Props {
  children: ReactNode
  className?: string
  id?: string
}

export const SectionLayout = ({ children, className, id }: Props) => {
  return (
    <section className={`section-layout ${className && className}`} id={id}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}