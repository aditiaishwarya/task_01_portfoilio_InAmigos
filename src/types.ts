export interface Skill {
  name: string;
  level: number; // percentage (e.g., 90)
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: 'web' | 'dsa' | 'utility' | 'future';
  demoUrl?: string;
  codeUrl?: string;
  future_Scope?: string[];
  isFuture?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration?: string;
  year?: string;
  gpa?: string;
  percentage?: string;
  details?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
  course?: string;
}

export interface Interest {
  name: string;
  iconName: string;
}
