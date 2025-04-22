import './index.scss'

interface Props {
  iconName: string
  href: string
  inverted?: boolean
  name: string
}

export const SocialMediaItem = ({ iconName, href, inverted, name }: Props) => {
  return (
    <a href={href} target='_blank' className={`socialMediaItem ${inverted && 'inverted'}`} title={name}>
      <i className={`${iconName}`} />
    </a>
  )
}