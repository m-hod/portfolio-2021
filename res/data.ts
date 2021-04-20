import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Aaron Hodges',
    type: 'web',
    icon: 'images/vercel.svg',
    url: 'https://hopkinsmarketing.org',
    images: {
      web: {
        url: '/images/a-hodges-web.png',
        height: 4560,
      },
      mobile: {
        url: '/images/a-hodges-mobile.png',
        height: 6595,
      },
    },
  },
  {
    id: 2,
    title: 'Hopkins Marketing Group',
    type: 'web',
    icon: 'images/vercel.svg',
    url: 'https://hopkinsmarketing.org',
    images: {
      web: {
        url: '/images/a-hodges-web.png',
        height: 4560,
      },
      mobile: {
        url: '/images/a-hodges-mobile.png',
        height: 6595,
      },
    },
  },
  {
    id: 3,
    title: 'Anipers',
    type: 'mobile',
    icon: 'images/vercel.svg',
    url: 'https://hopkinsmarketing.org',
    images: {
      mobile: {
        url: '/images/a-hodges-mobile.png',
        height: 6595,
      },
    },
  },
];

export const textPool = {
  left: [
    {
      short: 'Fn',
      long: 'Functional',
    },
    {
      short: 'Pr',
      long: 'Practical',
    },
    {
      short: 'Op',
      long: 'Operative',
    },
  ],
  right: [
    {
      short: 'In',
      long: 'Innovative',
    },
    {
      short: 'Cr',
      long: 'Creative',
    },
    {
      short: 'Vs',
      long: 'Visionary',
    },
  ],
};
