import type { Locale, Localized } from "../../i18n";

export type PageKey = "home" | "projects" | "cv";

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderConfig = {
  brand: {
    label: string;
    href: string;
    ariaLabel: string;
  };
  navAriaLabel: string;
  navItems: Record<PageKey, HeaderNavItem>;
  languageSwitch: {
    label: string;
    ariaLabel: string;
    hrefs: Record<PageKey, string>;
  };
};

export type SiteConfig = {
  skipLinkLabel: string;
  header: HeaderConfig;
  footer: {
    copyright: string;
    updatedLabel: string;
  };
};

const siteConfig: Localized<SiteConfig> = {
  en: {
    skipLinkLabel: "Skip to main content",
    header: {
      brand: {
        label: "Kairui Zhang",
        href: "/",
        ariaLabel: "Kairui Zhang home"
      },
      navAriaLabel: "Main navigation",
      navItems: {
        home: { label: "Home", href: "/" },
        projects: { label: "Projects", href: "/projects/" },
        cv: { label: "CV", href: "/cv/" }
      },
      languageSwitch: {
        label: "中文",
        ariaLabel: "Switch to Chinese",
        hrefs: {
          home: "/zh/",
          projects: "/zh/projects/",
          cv: "/zh/cv/"
        }
      }
    },
    footer: {
      copyright: "© 2026 Kairui Zhang",
      updatedLabel: "Last updated 2026"
    }
  },
  zh: {
    skipLinkLabel: "跳到主要内容",
    header: {
      brand: {
        label: "张恺睿",
        href: "/zh/",
        ariaLabel: "张恺睿首页"
      },
      navAriaLabel: "主导航",
      navItems: {
        home: { label: "首页", href: "/zh/" },
        projects: { label: "项目", href: "/zh/projects/" },
        cv: { label: "CV", href: "/zh/cv/" }
      },
      languageSwitch: {
        label: "EN",
        ariaLabel: "Switch to English",
        hrefs: {
          home: "/",
          projects: "/projects/",
          cv: "/cv/"
        }
      }
    },
    footer: {
      copyright: "© 2026 张恺睿",
      updatedLabel: "最近更新：2026"
    }
  }
};

export function getSiteConfig(locale: Locale): SiteConfig {
  return siteConfig[locale];
}
