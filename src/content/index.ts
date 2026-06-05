import { cvContentEn, homeContentEn, projectsEn } from "./content.en";
import { cvContentZh, homeContentZh, projectsZh } from "./content.zh";
import type { Locale, Localized } from "../i18n";
import type { CvContent, HomeContent, Project } from "./contentTypes";

export const homeContent: Localized<HomeContent> = {
  en: homeContentEn,
  zh: homeContentZh
};

export const projects: Localized<Project[]> = {
  en: projectsEn,
  zh: projectsZh
};

export const cvContent: Localized<CvContent> = {
  en: cvContentEn,
  zh: cvContentZh
};

export function getHomeContent(locale: Locale): HomeContent {
  return homeContent[locale];
}

export function getProjects(locale: Locale): Project[] {
  return projects[locale];
}

export function getSelectedProjects(locale: Locale): Project[] {
  const home = homeContent[locale];
  const allProjects = projects[locale];
  return home.selectedProjects.projectIds.map((id) => allProjects.find((project) => project.id === id)!);
}

export function getCvContent(locale: Locale): CvContent {
  return cvContent[locale];
}

export type * from "./contentTypes";
