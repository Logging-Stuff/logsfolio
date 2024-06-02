export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  companyWebsite: string;
  role: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  keyResponsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  title: string;
  institution: string;
  date: string;
}

export interface Data {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  skills: Skills;
  projects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  hobbies: string[];
}
