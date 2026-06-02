export type WorkCategory = "benchmark" | "evaluation" | "interpretability" | "control";

export type WorkLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  id: string;
  title: string;
  category: WorkCategory;
  featured?: boolean;
  status: string;
  year: number;
  venue: string;
  publicationType: string;
  authors: string;
  primaryHref?: string;
  primaryLabel?: string;
  thumbnail: string;
  alt: string;
  question: { en: string; zh: string };
  summary: { en: string; zh: string };
  caveat?: { en: string; zh: string };
  chips: { en: string[]; zh: string[] };
  resourceLinks: WorkLink[];
  publicationLinks: WorkLink[];
};

const openReviewUrl =
  "https://openreview.net/forum?id=zj4NqaShSf&referrer=%5Bthe%20profile%20of%20Kairui%20Zhang%5D(%2Fprofile%3Fid%3D~Kairui_Zhang2)";

export const works: WorkItem[] = [
  {
    id: "vasae",
    title: "VASAE: Vocabulary-Aligned Sparse Autoencoders",
    category: "interpretability",
    featured: true,
    status: "ICML workshop poster / OpenReview",
    year: 2026,
    venue: "ICML workshop poster / OpenReview",
    publicationType: "Workshop poster / preprint",
    authors: "Kairui Zhang, Ziwen Yu, Zahraa S. Abdallah, Martha Lewis",
    primaryHref: "https://karry-z.github.io/VASAE/",
    primaryLabel: "Project page",
    thumbnail: "/images/projects/vasae.svg",
    alt: "Diagram showing sparse autoencoder directions aligned to token anchors",
    question: {
      en: "Can learned SAE directions receive intrinsic token names during training?",
      zh: "能否在训练过程中为 SAE dictionary directions 分配内生的 token 名称？"
    },
    summary: {
      en: "A sparse-autoencoder training setup that aligns dictionary directions with vocabulary anchors, then checks named features through token examples and reconstruction behavior.",
      zh: "这个方法在 sparse autoencoder 训练中把 dictionary directions 对齐到 vocabulary anchors，再用 token 示例和重构行为检查命名后的特征。"
    },
    caveat: {
      en: "Token names are geometric anchors, not complete semantic or causal explanations.",
      zh: "这里的 token 名称是几何锚点，不是完整语义解释或因果解释。"
    },
    chips: {
      en: ["sparse autoencoders", "feature naming", "vocabulary anchors"],
      zh: ["sparse autoencoders", "feature naming", "vocabulary anchors"]
    },
    resourceLinks: [
      { label: "OpenReview", href: openReviewUrl },
      { label: "Examples", href: "https://karry-z.github.io/VASAE/#gallery" },
      { label: "BibTeX", href: "https://karry-z.github.io/VASAE/#citation" }
    ],
    publicationLinks: [
      { label: "Project Page", href: "https://karry-z.github.io/VASAE/" },
      { label: "OpenReview", href: openReviewUrl },
      { label: "BibTeX", href: "https://karry-z.github.io/VASAE/#citation" }
    ]
  },
  {
    id: "avl-survey",
    title: "Recent Advances in Audio-Visual-Language Modeling",
    category: "benchmark",
    featured: true,
    status: "Preprint / survey project",
    year: 2025,
    venue: "Authorea Preprints / preprint",
    publicationType: "Preprint / survey project",
    authors: "Kairui Zhang, Zahraa S. Abdallah, Martha Lewis",
    primaryHref: "https://karry-z.github.io/awesome-audio-visual-language-learning/",
    primaryLabel: "Project page",
    thumbnail: "/images/projects/avl-survey.svg",
    alt: "Diagram linking audio, vision, and language to a benchmark map",
    question: {
      en: "What counts as audio-visual-language modeling, and how should the field be organized?",
      zh: "什么算作 audio-visual-language modeling？这个领域应该如何组织？"
    },
    summary: {
      en: "A survey and resource map that organizes AVL work by task setup, modality alignment, benchmark coverage, evaluation metrics, and gaps in current datasets.",
      zh: "这个 survey 和资源地图按任务设置、模态对齐方式、benchmark 覆盖、评估指标和现有数据集缺口来组织 AVL 工作。"
    },
    chips: {
      en: ["task taxonomy", "benchmark map", "evaluation metrics"],
      zh: ["任务分类", "benchmark map", "评估指标"]
    },
    resourceLinks: [
      { label: "Preprint", href: "https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176003135.56344622/v1" },
      { label: "Survey Map", href: "https://karry-z.github.io/awesome-audio-visual-language-learning/#explore" },
      { label: "BibTeX", href: "https://karry-z.github.io/awesome-audio-visual-language-learning/#bibtex" }
    ],
    publicationLinks: [
      { label: "Project Page", href: "https://karry-z.github.io/awesome-audio-visual-language-learning/" },
      { label: "Preprint", href: "https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176003135.56344622/v1" },
      { label: "BibTeX", href: "https://karry-z.github.io/awesome-audio-visual-language-learning/#bibtex" }
    ]
  },
  {
    id: "clip-blocksworld",
    title: "Evaluating CLIP's Understanding on Relationships in a Blocks World",
    category: "evaluation",
    featured: true,
    status: "IEEE BigData 2023",
    year: 2023,
    venue: "IEEE International Conference on Big Data, BigData 2023",
    publicationType: "Conference paper",
    authors: "Kairui Zhang, Martha Lewis",
    primaryHref: "https://doi.org/10.1109/BIGDATA59044.2023.10386915",
    primaryLabel: "Paper",
    thumbnail: "/images/projects/clip-blocksworld.svg",
    alt: "Synthetic blocks-world scene with relationship arrows",
    question: {
      en: "Does CLIP understand object relationships, or mainly recognize object presence?",
      zh: "CLIP 是否理解对象之间的关系，还是主要识别对象是否存在？"
    },
    summary: {
      en: "A controlled Blocks World benchmark that separates object-presence cues from relational prompts, testing whether CLIP distinguishes spatial relations in synthetic scenes.",
      zh: "这个受控 Blocks World benchmark 把对象存在信号和关系提示分开，用合成场景测试 CLIP 是否能区分空间关系。"
    },
    chips: {
      en: ["synthetic scenes", "spatial relations", "controlled prompts"],
      zh: ["合成场景", "空间关系", "受控 prompts"]
    },
    resourceLinks: [
      { label: "BibTeX", href: "https://dblp.org/rec/conf/bigdataconf/ZhangL23.bib" },
      { label: "DBLP", href: "https://dblp.org/rec/conf/bigdataconf/ZhangL23" }
    ],
    publicationLinks: [
      { label: "Paper", href: "https://doi.org/10.1109/BIGDATA59044.2023.10386915" },
      { label: "DBLP", href: "https://dblp.org/rec/conf/bigdataconf/ZhangL23" },
      { label: "BibTeX", href: "https://dblp.org/rec/conf/bigdataconf/ZhangL23.bib" }
    ]
  },
  {
    id: "uav-landing-control",
    title: "旋翼无人机在移动平台降落的控制参数自学习调节方法",
    category: "control",
    status: "智能系统学报 2022",
    year: 2022,
    venue: "智能系统学报, 17(5), 931-940",
    publicationType: "Journal article",
    authors: "张鹏鹏, 魏长赟, 张恺睿, 欧阳勇平",
    thumbnail: "/images/projects/uav-landing.svg",
    alt: "Diagram of a rotary-wing UAV landing on a moving platform",
    question: {
      en: "How can a rotary-wing UAV adapt landing-control parameters on a moving platform?",
      zh: "旋翼无人机如何在移动平台降落时自适应调节控制参数？"
    },
    summary: {
      en: "A control-parameter self-learning adjustment method for rotary-wing UAV landing on a moving platform.",
      zh: "一种面向旋翼无人机在移动平台降落的控制参数自学习调节方法。"
    },
    chips: {
      en: ["UAV control", "moving platform", "self-learning parameters"],
      zh: ["无人机控制", "移动平台", "参数自学习"]
    },
    resourceLinks: [],
    publicationLinks: []
  }
];
