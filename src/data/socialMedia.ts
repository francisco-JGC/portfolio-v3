interface SocialLink {
  name: string
  url: string
  icon: string
  inverted?: boolean
}

export const SOCIAL_ITEMS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/francisco-JGC',
    icon: 'fab fa-github',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/francisco-garcia-94a2a2232/',
    icon: 'fab fa-linkedin',
    inverted: true
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Francisco_JGC',
    icon: 'fab fa-telegram',
  }
]