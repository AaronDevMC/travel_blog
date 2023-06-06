import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🌕 Light'
  },
  {
    name: 'dracula',
    text: '🧛 Dark'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'black',
    text: '🖤 Black'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Welcome to my blog',
      link: '/welcome'
    },
    {
      text: 'Cleaning up in Pisa',
      link: '/pisa'
    },
    {
      text: 'Clipping into the Backrooms',
      link: '/backrooms'
    },
    {
      text: 'Hot tourist destinations',
      link: '/volcano'
    },
    {
      text: 'Conclusive thoughts about the gap year',
      link: '/conclusion'
    }
  ]
}


export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
