import type { Locale, Localized } from "../../i18n";

export type CvConfig = {
  description: string;
  pdf: {
    previewTitle: string;
    fallbackText: string;
  };
};

const cvConfig: Localized<CvConfig> = {
  en: {
    description: "Kairui Zhang CV PDF.",
    pdf: {
      previewTitle: "CV PDF",
      fallbackText: "Your browser cannot display the PDF."
    }
  },
  zh: {
    description: "张恺睿 CV PDF。",
    pdf: {
      previewTitle: "CV PDF",
      fallbackText: "如果浏览器不能显示 PDF，请使用下载链接。"
    }
  }
};

export function getCvConfig(locale: Locale): CvConfig {
  return cvConfig[locale];
}
