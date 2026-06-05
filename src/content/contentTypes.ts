export type HtmlText = string;

export type ProjectCategory = string;

export type ProjectId = string;

export type AboutContent = {
  name: string;
  researchInterests: string[];
  avatarPath: string;
  description: HtmlText;
};

export type Project = {
  id: ProjectId;
  categories: ProjectCategory[];
  imagePath: string;
  venue?: string;
  title: string;
  description: HtmlText;
  keywords: string[];
  projectPageLink?: string;
  date: string;
};

export type NewsItem = {
  date: string;
  item: HtmlText;
  link?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon?: string;
};

export type ContactsContent = {
  description: HtmlText;
  socialLinks: SocialLink[];
};

export type SelectedProjectsContent = {
  projectIds: ProjectId[];
};

export type HomeContent = {
  about: AboutContent;
  selectedProjects: SelectedProjectsContent;
  news: NewsItem[];
  contacts: ContactsContent;
};

export type CvContent = {
  pdfPath: string;
};
