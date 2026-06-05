import type { CvContent, HomeContent, Project } from "./contentTypes";

export const projectsZh = [
  {
    id: "ai-image-training-audit",
    categories: ["multimodal-learning", "evaluation"],
    imagePath: "/images/projects/ai-image-training-audit.png",
    venue: "Mathematics in Industry Reports (MIIR)",
    title: "Detecting inappropriate material used to train AI image generation models",
    description:
      "这份模型审计报告研究如何在不生成可识别有害图像的前提下，检测扩散模型是否使用不当材料微调。",
    keywords: ["扩散模型", "模型审计", "图像取证"],
    projectPageLink: "https://client.prod.orp.cambridge.org/engage/miir/article-details/691ca388ef936fb4a235bcbe",
    date: "2026"
  },
  {
    id: "vasae",
    categories: ["interpretability"],
    imagePath: "/images/projects/vasae.svg",
    venue: "ICML workshop poster",
    title: "VASAE: Vocabulary-Aligned Sparse Autoencoders",
    description:
      "这个方法在 sparse autoencoder 训练中把 dictionary directions 对齐到 vocabulary anchors，再用 token 示例和重构行为检查命名后的特征。",
    keywords: ["sparse autoencoders", "feature naming", "vocabulary anchors"],
    projectPageLink: "https://karry-z.github.io/VASAE/",
    date: "2026"
  },
  {
    id: "avl-survey",
    categories: ["multimodal-learning", "survey"],
    imagePath: "/images/projects/avl-survey.png",
    venue: "preprint",
    title: "Recent Advances in Audio-Visual-Language Modeling",
    description:
      "这个 survey 和资源地图按任务设置、模态对齐方式、benchmark 覆盖、评估指标和现有数据集缺口来组织 AVL 工作。",
    keywords: ["任务分类", "benchmark map", "评估指标"],
    projectPageLink: "https://karry-z.github.io/awesome-audio-visual-language-learning/",
    date: "2025"
  },
  {
    id: "clip-blocksworld",
    categories: ["multimodal-learning", "evaluation"],
    imagePath: "/images/projects/clip-blocksworld.gif",
    venue: "IEEE BigData",
    title: "Evaluating CLIP's Understanding on Relationships in a Blocks World",
    description:
      "这个受控 Blocks World benchmark 把对象存在信号和关系提示分开，用合成场景测试 CLIP 是否能区分空间关系。",
    keywords: ["合成场景", "空间关系", "受控 prompts"],
    projectPageLink: "https://doi.org/10.1109/BIGDATA59044.2023.10386915",
    date: "2023"
  },
  {
    id: "uav-landing-control",
    categories: ["robotics", "reinforcement learning"],
    imagePath: "/images/projects/uav-landing.png",
    venue: "智能系统学报, 17(5), 931-940",
    title: "旋翼无人机在移动平台降落的控制参数自学习调节方法",
    description: "一种面向旋翼无人机在移动平台降落的控制参数自学习调节方法。",
    keywords: ["无人机控制", "移动平台", "参数自学习"],
    date: "2022"
  }
] satisfies Project[];

export const homeContentZh: HomeContent = {
  about: {
    name: "张恺睿",
    researchInterests: ["音频-视觉-语言学习", "交互式人工智能", "机制可解释性"],
    avatarPath: "/images/profile/prof_pic.jpg",
    description:
      '我目前正在英国布里斯托大学智能系统实验室（<a href="https://www.bristol.ac.uk/research/groups/intelligent-systems/">ISL</a>）攻读工程数学专业的博士，由 <a href="https://www.bristol.ac.uk/people/person/Zahraa-Abdallah-06844ace-4e4b-4cf5-8212-7266bec7ede8/">Zahraa S. Abdallah</a> 和 <a href="https://marthaflinderslewis.github.io/">Martha Lewis</a> 共同指导。我的研究关注多模态大语言模型在与环境交互时如何使用音频、视觉和语言信息，以及模型内部各种回路是如何工作的。'
  },

  selectedProjects: {
    projectIds: ["vasae", "avl-survey", "clip-blocksworld"]
  },

  news: [
    {
      date: "2026 年 5 月",
      item: "VASAE 已作为 ICML workshop poster 发布在 OpenReview。",
      link: "https://openreview.net/forum?id=zj4NqaShSf&referrer=%5Bthe%20profile%20of%20Kairui%20Zhang%5D(%2Fprofile%3Fid%3D~Kairui_Zhang2)"
    },
    {
      date: "2025",
      item: "发布 Recent Advances in Audio-Visual-Language Modeling 项目主页。",
      link: "https://karry-z.github.io/awesome-audio-visual-language-learning/"
    },
    {
      date: "2023 年 12 月",
      item: "在 IEEE BigData 2023 发表 CLIP 关系理解评估工作。",
      link: "https://dblp.org/rec/conf/bigdataconf/ZhangL23"
    }
  ],

  contacts: {
    description: "欢迎通过邮件联系我，也可以通过下面的链接查看我的工作。",
    socialLinks: [
      { label: "电子邮箱", href: "mailto:pu22650@bristol.ac.uk", icon: "https://api.iconify.design/lucide:mail.svg" },
      {
        label: "谷歌学术",
        href: "https://scholar.google.com/citations?user=oGI5qrgAAAAJ&hl=en",
        icon: "https://cdn.simpleicons.org/googlescholar/4285F4"
      },
      { label: "GitHub", href: "https://github.com/karry-z", icon: "https://cdn.simpleicons.org/github/181717" },
      { label: "ORCID", href: "https://orcid.org/0009-0009-9354-3859", icon: "https://cdn.simpleicons.org/orcid/A6CE39" },
      {
        label: "Bristol profile",
        href: "https://research-information.bris.ac.uk/en/persons/kairui-zhang/",
        icon: "https://api.iconify.design/lucide:university.svg"
      }
    ]
  }
};

export const cvContentZh: CvContent = {
  pdfPath: "/assets/pdf/Kairui_Zhang_CV_full_en.pdf"
};
