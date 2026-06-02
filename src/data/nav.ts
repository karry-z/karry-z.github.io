export type Lang = "en" | "zh";

export type NavItem = {
  label: string;
  href: string;
};

const pathPairs: Record<string, string> = {
  "/": "/zh/",
  "/projects/": "/zh/projects/",
  "/cv/": "/zh/cv/"
};

export const nav: Record<Lang, NavItem[]> = {
  en: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects/" },
    { label: "CV", href: "/cv/" }
  ],
  zh: [
    { label: "首页", href: "/zh/" },
    { label: "项目", href: "/zh/projects/" },
    { label: "CV", href: "/zh/cv/" }
  ]
};

export function localizedPath(pathname: string, lang: Lang): string {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (lang === "zh") {
    return pathPairs[normalized] ?? "/zh/";
  }

  const reverse = Object.fromEntries(Object.entries(pathPairs).map(([en, zh]) => [zh, en]));
  return reverse[normalized] ?? "/";
}

export function canonicalPath(pathname: string): string {
  if (pathname === "/zh") return "/zh/";
  if (!pathname.endsWith("/") && pathname !== "/404.html") return `${pathname}/`;
  return pathname;
}
