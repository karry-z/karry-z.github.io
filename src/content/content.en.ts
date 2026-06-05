import type { CvContent, HomeContent, Project } from "./contentTypes";

export const projectsEn = [
  {
    id: "ai-image-training-audit",
    categories: ["multimodal-learning", "evaluation"],
    imagePath: "/images/projects/ai-image-training-audit.png",
    venue: "Mathematics in Industry Reports (MIIR)",
    title: "Detecting inappropriate material used to train AI image generation models",
    description:
      "A model-auditing report on detecting whether diffusion models were fine-tuned on inappropriate material without generating identifiable harmful images.",
    keywords: ["diffusion models", "model auditing", "image forensics"],
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
      "A sparse-autoencoder training setup that aligns dictionary directions with vocabulary anchors, then checks named features through token examples and reconstruction behavior.",
    keywords: ["sparse autoencoders", "feature naming", "vocabulary anchors"],
    projectPageLink: "https://karry-z.github.io/VASAE/",
    date: "2026"
  },
  {
    id: "avl-survey",
    categories: ["multimodal-learning", "survey"],
    imagePath: "/images/projects/avl-survey.png",
    venue: "Preprint",
    title: "Recent Advances in Audio-Visual-Language Modeling",
    description:
      "A survey and resource map that organizes AVL work by task setup, modality alignment, benchmark coverage, evaluation metrics, and gaps in current datasets.",
    keywords: ["task taxonomy", "benchmark map", "evaluation metrics"],
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
      "A controlled Blocks World benchmark that separates object-presence cues from relational prompts, testing whether CLIP distinguishes spatial relations in synthetic scenes.",
    keywords: ["Vision-Language Model", "Compositionality", "Spatial Relations"],
    projectPageLink: "https://doi.org/10.1109/BIGDATA59044.2023.10386915",
    date: "2023"
  },
  {
    id: "uav-landing-control",
    categories: ["robotics", "reinforcement learning"],
    imagePath: "/images/projects/uav-landing.png",
    venue: "智能系统学报, 17(5), 931-940",
    title: "旋翼无人机在移动平台降落的控制参数自学习调节方法",
    description: "A control-parameter self-learning adjustment method for rotary-wing UAV landing on a moving platform.",
    keywords: ["UAV control", "Moving Platform", "DDPG"],
    date: "2022"
  }
] satisfies Project[];

export const homeContentEn: HomeContent = {
  about: {
    name: "Kairui Zhang",
    researchInterests: ["Audio-Visual-Language Learning", "Interactive AI", "Mechanistic Interpretability"],
    avatarPath: "/images/profile/prof_pic.jpg",
    description:
      'I am a PhD student in Engineering Mathematics at the Intelligent Systems Laboratory (<a href="https://www.bristol.ac.uk/research/groups/intelligent-systems/">ISL</a>), University of Bristol. I am co-supervised by <a href="https://www.bristol.ac.uk/people/person/Zahraa-Abdallah-06844ace-4e4b-4cf5-8212-7266bec7ede8/">Zahraa S. Abdallah</a> and <a href="https://marthaflinderslewis.github.io/">Martha Lewis</a>. My research focuses on how multimodal large language models utilize audio, visual, and linguistic information when interacting with the environment, as well as how the various circuits within these models function.'
  },

  selectedProjects: {
    projectIds: ["vasae", "avl-survey", "clip-blocksworld"]
  },

  news: [
    {
      date: "May 2026",
      item: "VASAE is listed as an ICML workshop poster on OpenReview.",
      link: "https://openreview.net/forum?id=zj4NqaShSf&referrer=%5Bthe%20profile%20of%20Kairui%20Zhang%5D(%2Fprofile%3Fid%3D~Kairui_Zhang2)"
    },
    {
      date: "2025",
      item: "Released the project page for Recent Advances in Audio-Visual-Language Modeling.",
      link: "https://karry-z.github.io/awesome-audio-visual-language-learning/"
    },
    {
      date: "Dec 2023",
      item: "Published work on CLIP relationship understanding at IEEE BigData 2023.",
      link: "https://dblp.org/rec/conf/bigdataconf/ZhangL23"
    }
  ],

  contacts: {
    description: "Feel free to reach out by email or find my work through the links below.",
    socialLinks: [
      { label: "Email", href: "mailto:pu22650@bristol.ac.uk", icon: "https://api.iconify.design/lucide:mail.svg" },
      {
        label: "Google Scholar",
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

export const cvContentEn: CvContent = {
  pdfPath: "/assets/pdf/Kairui_Zhang_CV_full_en.pdf"
};
