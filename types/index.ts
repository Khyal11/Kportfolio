export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  metrics?: {
    [key: string]: string | undefined;
  };
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  field: string;
  year: string;
  details?: string;
}

export interface Skill {
  id: number;
  category: string;
  skills: string[];
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: Date;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
