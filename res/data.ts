import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Rocket Languages',
    tech: ['React', 'Typescript', 'PHP', 'Laravel', 'Nextjs', 'SCSS'],
    url: 'https://app.rocketlanguages.com',
    description:
      'My current workplace which includes multiple projects I have been working on. The main project has been and continues to be the Rocket Languages web app, hosted at app.rocketlanguages.com, where I have contributed to significant portions of the entire site over the last year and a half. I have also built an admin app for them from the ground up, the frontend for their affiliate area in NextJs, worked on and am currently implementing a massive version change for their React Native mobile app, and in the last year have upskilled to fullstack and have been adding and updating routes on their backend Laravel infrastructure.',
    image_path: '/images/rocket.jpg',
  },
  {
    title: 'Aaron Hodges Author',
    tech: [
      'React',
      'Nextjs',
      'Typescript',
      'Strapi',
      'Jamstack',
      'Headless',
      'Tailwindcss',
    ],
    url: 'https://aaronhodgesauthor.com',
    description:
      'Business website for my brother acting in his professional role as an author. Displays his repetoire of books to be purchased through Amazon. This is a jamstack setup, the frontend is all custom Nextjs with a headless CMS managing the content side so that he can update it whenever he wants.',
    image_path: '/images/ahodges.jpg',
    source: 'https://github.com/m-hod/a-hodges',
  },
  {
    title: 'Hopkins Marketing Group',
    tech: [
      'React',
      'Nextjs',
      'Typescript',
      'Strapi',
      'Jamstack',
      'Headless',
      'Tailwindcss',
    ],
    url: 'https://hopkinsmarketing.org',
    description:
      'Business website for Hopkins Marketing advertising their marketing services. Includes a contact form which will forward them an email service I have arranged for them. This is also a jamstack setup, so they can manage almost all the content displayed on the page through a separate content management system.',
    image_path: '/images/hmg.jpg',
    source: 'https://github.com/m-hod/hopkins-marketing',
  },
  {
    title: 'Anipers',
    tech: ['React Native', 'Android', 'Typescript'],
    url: 'https://github.com/m-hod/anipers',
    description:
      'Hobby app I built to learn React Native. Displays wallpapers from the safebooru api, including extensive image browsing, the ability to save them to a library, crop and download, and set as wallpaper.',
    image_path: '/images/anipers.jpg',
    source: 'https://github.com/m-hod/anipers',
  },
  {
    title: 'Portfolio',
    tech: ['React', 'Nextjs', 'TailwindCss'],
    url: 'https://m-hodges.com',
    image_path: '/images/portfolio.jpg',
    source: 'https://github.com/m-hod/portfolio-2021',
    description: 'This simple portfolio site, built in Nextjs and Tailwind',
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
