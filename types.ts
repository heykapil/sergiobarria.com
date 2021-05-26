import { ImageProps } from 'next/image';

export interface Posts {
  allFiles: AllFiles[];
}

export interface AllFiles {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  category: string;
  author: string;
  tags: string[];
  keywords: string[];
  excerpt: string;
  image: string;
}

export interface CardTypes {
  id?: number;
  title: string;
  icon: {};
  description: string;
  techStack: string[];
  image?: string;
}
