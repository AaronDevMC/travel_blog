import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'github.com/AaronDevMC/',
  title: 'Travel blog',
  subtitle: 'A blog used to write about highly real journeys',
  lang: 'en-US',
  description: 'Expect terrible photoshops and renders here',
  author: {
    avatar: '/assets/aaron_logo@512.png',
    name: 'Aaron Malik',
    status: '🌸',
    bio: 'CEO of FTW LLC, CCO of FTW-Manufacturing'
  },
  themeColor: '#3D4451'
}
