import { Img } from '../../../../components/img';
import { useCursorFollower } from '../../../../hooks/useCursorFollowe';
import './index.scss'

interface Props {
  name: string
  img: string
  style?: {
    backgroundColor: string
    color: string
  }
}

export const TechnologieItem = ({ name, img, style }: Props) => {
  const { parentRef, position, onMouseMove } = useCursorFollower()

  return (
    <div className='technologie-item' ref={parentRef} onMouseMove={onMouseMove}>
      <Img src={img} alt={name} sizes='200' width={50} className='img' />
      <Img src={img} alt={name} sizes='200' width={50} className='background' />

      <div
        className='technologie-name'
        style={{
          position: 'absolute',
          transform: "translate(-50%, -50%)",
          left: `${position.x + 55}px`,
          top: `${position.y + 50}px`,
          pointerEvents: "none",
          backgroundColor: style?.backgroundColor,
          color: style?.color,
        }}
      >
        {name}
      </div>
    </div>
  )
}