import type { Locale, Localized } from "../../i18n";

export type HomeSectionKey = "about" | "selectedProjects" | "news" | "contacts";

export type HexColor = `#${string}`;

export type HomeConfig = {
  sectionOrder: HomeSectionKey[];
  sectionIds: Record<HomeSectionKey, string>;
  sectionLabels: Record<HomeSectionKey, string>;
  sectionBackgrounds: Record<HomeSectionKey, HexColor>;
  sectionNavAriaLabel: string;
};

const homeConfig: Localized<HomeConfig> = {
  en: {
    sectionOrder: ["about", "selectedProjects", "news", "contacts"],
    sectionIds: {
      about: "about",
      selectedProjects: "selected-projects",
      news: "news",
      contacts: "contacts"
    },
    sectionLabels: {
      about: "About",
      selectedProjects: "Selected projects",
      news: "News",
      contacts: "Contacts"
    },
    sectionBackgrounds: {
      about: "#ffffff",
      selectedProjects: "#f8fafc",
      news: "#ffffff",
      contacts: "#f8fafc"
    },
    sectionNavAriaLabel: "Home sections"
  },
  zh: {
    sectionOrder: ["about", "selectedProjects", "news", "contacts"],
    sectionIds: {
      about: "about",
      selectedProjects: "selected-projects",
      news: "news",
      contacts: "contacts"
    },
    sectionLabels: {
      about: "关于",
      selectedProjects: "代表性项目",
      news: "动态",
      contacts: "联系"
    },
    sectionBackgrounds: {
      about: "#ffffff",
      selectedProjects: "#f8fafc",
      news: "#ffffff",
      contacts: "#f8fafc"
    },
    sectionNavAriaLabel: "首页区块"
  }
};

export function getHomeConfig(locale: Locale): HomeConfig {
  return homeConfig[locale];
}
