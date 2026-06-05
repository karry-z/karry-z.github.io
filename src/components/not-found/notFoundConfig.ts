import type { Locale, Localized } from "../../i18n";

export type NotFoundConfig = {
  title: string;
  description: string;
  heading: string;
  body: string;
  homeLabel: string;
  alternateHomeLabel: string;
};

const notFoundConfig: Localized<NotFoundConfig> = {
  en: {
    title: "404 | Kairui Zhang",
    description: "Page not found.",
    heading: "Page not found",
    body: "The page you requested does not exist.",
    homeLabel: "Home",
    alternateHomeLabel: "中文首页"
  },
  zh: {
    title: "404 | 张恺睿",
    description: "页面不存在。",
    heading: "页面不存在",
    body: "你访问的页面不存在。",
    homeLabel: "首页",
    alternateHomeLabel: "English home"
  }
};

export function getNotFoundConfig(locale: Locale): NotFoundConfig {
  return notFoundConfig[locale];
}
