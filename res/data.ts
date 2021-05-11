import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Aaron Hodges',
    type: 'web',
    logo: 'projects/aahodges/logo.svg',
    website: 'https://aaronhodgesauthor.com/',
    codebase: 'https://github.com/m-hodges/a-hodges',
    tech: [
      'react',
      'nextjs',
      'strapi',
      'jamstack',
      'headless-cms',
      'tailwindcss',
    ],
    displayImage: 'projects/aahodges/altumcode-dMUt0X3f59Q-unsplash.jpg',
    status: 'published',
    description:
      'Voluptas provident dicta accusantium sed illo dolorem repellendus unde. Corporis et autem iste fugiat omnis aliquam. Libero eos in quasi in numquam magni possimus aut. Sit molestiae repudiandae sed est sunt vitae. Quam omnis doloremque omnis atque vel blanditiis ea.',
  },
  {
    id: 2,
    title: 'Hopkins Marketing Group',
    type: 'web',
    logo: 'projects/hopkinsmarketing/Logo.svg',
    website: 'https://hopkinsmarketing.org/',
    codebase: 'https://github.com/m-hodges/hopkins-marketing',
    tech: ['react', 'typescript', 'serverless', 'nextjs', 'scss', 'jamstack'],
    displayImage:
      'projects/hopkinsmarketing/james-harrison-vpOeXr5wmR4-unsplash.jpg',
    status: 'published',
    description:
      'Voluptas provident dicta accusantium sed illo dolorem repellendus unde. Corporis et autem iste fugiat omnis aliquam. Libero eos in quasi in numquam magni possimus aut. Sit molestiae repudiandae sed est sunt vitae. Quam omnis doloremque omnis atque vel blanditiis ea.',
  },
  {
    id: 3,
    title: 'Plotco',
    type: 'web',
    logo: 'projects/plotco/Plot_Co_Logo.jpg',
    website: 'https://plotco.vercel.app',
    tech: ['react', 'typescript', 'serverless', 'nextjs', 'scss', 'jamstack'],
    displayImage: 'projects/plotco/florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
    status: 'completed',
    description:
      'Voluptas provident dicta accusantium sed illo dolorem repellendus unde. Corporis et autem iste fugiat omnis aliquam. Libero eos in quasi in numquam magni possimus aut. Sit molestiae repudiandae sed est sunt vitae. Quam omnis doloremque omnis atque vel blanditiis ea.',
  },
  {
    id: 4,
    title: 'Michael Hodges',
    type: 'web',
    logo: 'projects/m-hodges/logo-circle.png',
    website: 'https://m-hodges.com/',
    codebase: 'https://github.com/m-hodges/m-hodges',
    tech: [
      'react',
      'nextjs',
      'strapi',
      'jamstack',
      'headless-cms',
      'tailwindcss',
    ],
    displayImage: 'projects/m-hodges/altumcode-dMUt0X3f59Q-unsplash.jpg',
    status: 'published',
    description:
      'Voluptas provident dicta accusantium sed illo dolorem repellendus unde. Corporis et autem iste fugiat omnis aliquam. Libero eos in quasi in numquam magni possimus aut. Sit molestiae repudiandae sed est sunt vitae. Quam omnis doloremque omnis atque vel blanditiis ea.',
  },
  {
    id: 5,
    title: 'Anipers',
    type: 'mobile',
    logo: 'projects/anipers/web_hi_res_512.png',
    tech: ['react-native', 'android', 'typescript'],
    displayImage: 'projects/anipers/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg',
    status: 'in-progress',
    description:
      'Voluptas provident dicta accusantium sed illo dolorem repellendus unde. Corporis et autem iste fugiat omnis aliquam. Libero eos in quasi in numquam magni possimus aut. Sit molestiae repudiandae sed est sunt vitae. Quam omnis doloremque omnis atque vel blanditiis ea.',
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
