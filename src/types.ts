export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  context: string;
  features: string[];
  result: string;
  image: string;
  gallery?: string[];
  galleryGroups?: {
    title: string;
    images: string[];
  }[];
}

export interface Service {
  title: string;
  items: string[];
}

export interface WorkflowStep {
  title: string;
  desc: string;
}

export interface Stat {
  label: string;
  value: string;
  desc: string;
}
