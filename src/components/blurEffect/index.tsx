import './index.scss'
import { useMouseBlurEffect } from '../../hooks/useMouseBlurEffect'

interface Props {
  children: React.ReactNode
}

export const BlurFollower = ({ children }: Props) => {
  const { containerRef, blurRef, visible } = useMouseBlurEffect()

  return (
    <div className="blur-container" ref={containerRef}>
      <div
        ref={blurRef}
        className="blur-circle"
        style={{ opacity: visible ? 1 : 0 }}
      />
      {children}
    </div>
  )
}