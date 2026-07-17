export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ExcellenceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string[];
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  stars: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarColor: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}
