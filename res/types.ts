export type Project = {
  id: number;
  title: string;
  type: 'web' | 'mobile';
  logo: string;
  website?: string;
  codebase?: string;
  tech: string[];
  displayImage: string;
  status: 'in-progress' | 'completed' | 'published';
  description: string;
};
