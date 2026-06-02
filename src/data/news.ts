export type NewsItem = {
  date: { en: string; zh: string };
  text: { en: string; zh: string };
  href: string;
};

export const news: NewsItem[] = [
  {
    date: { en: "May 2026", zh: "2026 年 5 月" },
    text: {
      en: "VASAE is listed as an ICML workshop poster on OpenReview.",
      zh: "VASAE 已作为 ICML workshop poster 发布在 OpenReview。"
    },
    href: "https://openreview.net/forum?id=zj4NqaShSf&referrer=%5Bthe%20profile%20of%20Kairui%20Zhang%5D(%2Fprofile%3Fid%3D~Kairui_Zhang2)"
  },
  {
    date: { en: "2025", zh: "2025" },
    text: {
      en: "Released the project page for Recent Advances in Audio-Visual-Language Modeling.",
      zh: "发布 Recent Advances in Audio-Visual-Language Modeling 项目主页。"
    },
    href: "https://karry-z.github.io/awesome-audio-visual-language-learning/"
  },
  {
    date: { en: "Dec 2023", zh: "2023 年 12 月" },
    text: {
      en: "Published work on CLIP relationship understanding at IEEE BigData 2023.",
      zh: "在 IEEE BigData 2023 发表 CLIP 关系理解评估工作。"
    },
    href: "https://dblp.org/rec/conf/bigdataconf/ZhangL23"
  }
];
