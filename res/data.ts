type Project = {
  id: number;
  title: string;
  type: 'web' | 'mobile';
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Hopkins Marketing Group',
    type: 'web',
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
