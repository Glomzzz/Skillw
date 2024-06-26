import { localesOf } from "./locales";

export const image = './assets/logo.png';

export const repoURL = 'https://github.com/Skillw/Skillw'

export interface Site{
  title:string,
  description:string,
  unknown:string
}

export const locales = localesOf({
  'zh-CN':{
    title: 'Skillw',
    description: 'Skillw 官网',
    link: '/zh-CN/',
    unknown: 'zh-CN/unknown.md',
  },
  'en':{
    title: 'Librorum Example',
    description: 'Technical knowledge base.',
    link: '/en/',
    unknown: 'en/unknown.md',
  }
});