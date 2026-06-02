import type { Lang } from "./nav";
import { profile } from "./profile";

type Localized<T> = Record<Lang, T>;

const researchDisplay = "Audio-Visual-Language Learning · Interactive AI · Mechanistic Interpretability";
const researchTitle = "audio-visual-language learning · interactive AI · Mechanistic Interpretability";

export const seoMetadata = {
  keywords: [
    profile.name,
    profile.chineseName,
    "multimodal mechanistic interpretability",
    "audio-visual-language modeling",
    "vision-language evaluation",
    "sparse autoencoders",
    "SAE",
    profile.institution,
    "benchmark design"
  ],
  knowsAbout: [
    "audio-visual-language learning",
    "interactive AI",
    "Mechanistic Interpretability",
    "audio-visual-language modeling",
    "vision-language evaluation",
    "sparse autoencoders",
    "benchmark design"
  ]
} as const;

export const chromeCopy: Localized<{
  siteHomeLabel: string;
  mainNavLabel: string;
  languageSwitchLabel: string;
  footerNavLabel: string;
}> = {
  en: {
    siteHomeLabel: `${profile.name} home`,
    mainNavLabel: "Main navigation",
    languageSwitchLabel: "中文",
    footerNavLabel: "Footer links"
  },
  zh: {
    siteHomeLabel: `${profile.name} home`,
    mainNavLabel: "主导航",
    languageSwitchLabel: "EN",
    footerNavLabel: "页脚链接"
  }
};

export const heroCopy: Localized<{
  displayName: string;
  research: string;
  position: string;
  body: string;
  labPrefix: string;
  labSuffix: string;
  supervisorJoiner: string;
  supervisorEnd: string;
  portraitAlt: string;
  ctas: {
    featuredProjects: string;
    news: string;
    benchmarkDiscussion: string;
    cv: string;
  };
}> = {
  en: {
    displayName: profile.name,
    research: researchDisplay,
    position: `I am a PhD student in ${profile.program} at the ${profile.institution}.`,
    body: "I study how multimodal models represent, align, and use information across vision, audio, and language. My current work focuses on benchmark design, controlled evaluation, and representation-level analysis.",
    labPrefix: "I work in the",
    labSuffix: "and am co-supervised by",
    supervisorJoiner: " and ",
    supervisorEnd: ".",
    portraitAlt: `Portrait of ${profile.name}`,
    ctas: {
      featuredProjects: "Featured projects",
      news: "Recent updates",
      benchmarkDiscussion: "Benchmark discussions",
      cv: "Download CV"
    }
  },
  zh: {
    displayName: `${profile.name} · ${profile.chineseName}`,
    research: researchDisplay,
    position: `我目前在 ${profile.institution} 攻读 ${profile.program} 博士。`,
    body: "我研究多模态模型如何表示、对齐并使用视觉、音频和语言信息。当前工作聚焦于 benchmark 设计、受控评估和表示层分析。",
    labPrefix: "我的研究环境是",
    labSuffix: "，由",
    supervisorJoiner: " 和 ",
    supervisorEnd: " 共同指导。",
    portraitAlt: `${profile.name} 的头像`,
    ctas: {
      featuredProjects: "代表性项目",
      news: "近期更新",
      benchmarkDiscussion: "Benchmark 讨论",
      cv: "下载 CV"
    }
  }
};

export const homePageCopy: Localized<{
  title: string;
  description: string;
  featured: {
    eyebrow: string;
    title: string;
  };
  news: {
    eyebrow: string;
    title: string;
  };
  benchmarkDiscussion: {
    eyebrow: string;
    title: string;
    body: string;
    links: {
      email: string;
      googleScholar: string;
      github: string;
    };
  };
}> = {
  en: {
    title: `${profile.name} | ${researchTitle}`,
    description: `${profile.name} is a PhD student at the ${profile.institution} working on audio-visual-language learning, interactive AI, mechanistic interpretability, benchmark design, controlled VLM evaluation, and representation-level analysis.`,
    featured: {
      eyebrow: "Current work",
      title: "Featured projects"
    },
    news: {
      eyebrow: "News",
      title: "Recent updates"
    },
    benchmarkDiscussion: {
      eyebrow: "Benchmark-focused discussions",
      title: "Focused benchmark ideas",
      body: "I am happy to discuss focused benchmark ideas for multimodal mechanistic interpretability, especially settings that connect behavior-level failures with representation-level evidence.",
      links: {
        email: "Email",
        googleScholar: "Google Scholar",
        github: "GitHub"
      }
    }
  },
  zh: {
    title: `${profile.name} ${profile.chineseName} | ${researchTitle}`,
    description: `${profile.name}（${profile.chineseName}）是英国${profile.institution}博士生，研究 audio-visual-language learning、interactive AI、Mechanistic Interpretability、benchmark 设计、受控 VLM 评估和表示层分析。`,
    featured: {
      eyebrow: "当前工作",
      title: "代表性项目"
    },
    news: {
      eyebrow: "动态",
      title: "近期更新"
    },
    benchmarkDiscussion: {
      eyebrow: "Benchmark 相关讨论",
      title: "聚焦的 benchmark 设计问题",
      body: "目前我更希望讨论聚焦的 benchmark 设计问题，尤其是能把行为层面的失败模式和表示层面的证据联系起来的多模态评估设置。",
      links: {
        email: "Email",
        googleScholar: "Google Scholar",
        github: "GitHub"
      }
    }
  }
};

export const projectsPageCopy: Localized<{
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
  };
}> = {
  en: {
    title: `Projects | ${profile.name}`,
    description: `Projects and related publications by ${profile.name}, with searchable and sortable entries for benchmarks, evaluation, interpretability, and control work.`,
    hero: {
      eyebrow: "Projects",
      title: "Projects",
      body: "Projects and related publications in one list. Each entry keeps the project context, publication status, authors, and resource links together."
    }
  },
  zh: {
    title: `项目 | ${profile.name} ${profile.chineseName}`,
    description: `${profile.name}（${profile.chineseName}）的项目和对应论文，支持搜索、筛选和排序。`,
    hero: {
      eyebrow: "项目",
      title: "项目",
      body: "项目和对应论文放在同一个列表里；每条保留项目背景、publication status、作者和资源链接。"
    }
  }
};

export const cvPageCopy: Localized<{
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
  };
  downloadLabel: string;
  previewTitle: string;
  previewFallback: string;
}> = {
  en: {
    title: `CV | ${profile.name}`,
    description: `English CV page for ${profile.name}, PhD student at the ${profile.institution}.`,
    hero: {
      eyebrow: "CV",
      title: "CV",
      body: "The English PDF is the canonical CV."
    },
    downloadLabel: "Download English CV PDF",
    previewTitle: "Download the English CV",
    previewFallback: "Your browser cannot display the PDF."
  },
  zh: {
    title: `CV | ${profile.name} ${profile.chineseName}`,
    description: `${profile.name}（${profile.chineseName}）的英文 CV 页面。`,
    hero: {
      eyebrow: "CV",
      title: "CV",
      body: "这里只保留英文 CV PDF。"
    },
    downloadLabel: "下载英文 CV PDF",
    previewTitle: "下载英文 CV",
    previewFallback: "如果浏览器不能显示 PDF，请使用下载链接。"
  }
};

export const categoryCopy: Localized<{
  all: string;
  benchmark: string;
  evaluation: string;
  interpretability: string;
  control: string;
}> = {
  en: {
    all: "All",
    benchmark: "Benchmark",
    evaluation: "Evaluation",
    interpretability: "Interpretability",
    control: "Control"
  },
  zh: {
    all: "全部",
    benchmark: "Benchmark",
    evaluation: "评估",
    interpretability: "可解释性",
    control: "控制"
  }
};

export const projectListCopy: Localized<{
  filtersLabel: string;
  tagsLabel: string;
}> = {
  en: {
    filtersLabel: "Project filters",
    tagsLabel: "Project tags"
  },
  zh: {
    filtersLabel: "项目筛选",
    tagsLabel: "项目标签"
  }
};

export const workListCopy: Localized<{
  searchPlaceholder: string;
  searchLabel: string;
  filtersLabel: string;
  sortLabel: string;
  sortOptions: {
    newest: string;
    oldest: string;
    title: string;
  };
  noResults: string;
  tagsLabel: string;
}> = {
  en: {
    searchPlaceholder: "Search projects",
    searchLabel: "Search projects by title, author, keyword, or venue",
    filtersLabel: "Project filters",
    sortLabel: "Sort",
    sortOptions: {
      newest: "Newest first",
      oldest: "Oldest first",
      title: "Title A-Z"
    },
    noResults: "No matching projects.",
    tagsLabel: "Project tags"
  },
  zh: {
    searchPlaceholder: "搜索项目",
    searchLabel: "按标题、作者、关键词或 venue 搜索项目",
    filtersLabel: "项目筛选",
    sortLabel: "排序",
    sortOptions: {
      newest: "年份从新到旧",
      oldest: "年份从旧到新",
      title: "标题 A-Z"
    },
    noResults: "没有匹配的项目。",
    tagsLabel: "项目标签"
  }
};

export const notFoundPageCopy = {
  title: `404 | ${profile.name}`,
  description: "Page not found.",
  heroTitle: "Page not found",
  body: "页面不存在。",
  homeLabel: "Home",
  zhHomeLabel: "中文首页"
} as const;
