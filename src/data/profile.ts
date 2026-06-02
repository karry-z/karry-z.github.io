export type Link = {
  label: string;
  href: string;
};

export const profile = {
  name: "Kairui Zhang",
  chineseName: "张恺睿",
  title: "PhD Student",
  program: "Engineering Mathematics",
  institution: "University of Bristol",
  phdPeriod: "2024-2028",
  mainResearch: "audio-visual-language learning · interactive AI · Mechanistic Interpretability",
  email: "pu22650@bristol.ac.uk",
  image: "/images/profile/prof_pic.jpg",
  cv: {
    en: "/assets/pdf/Kairui_Zhang_CV_full_en.pdf"
  },
  links: {
    homepage: "https://karry-z.github.io/",
    googleScholar: "https://scholar.google.com/citations?user=oGI5qrgAAAAJ&hl=en",
    github: "https://github.com/karry-z",
    orcid: "https://orcid.org/0009-0009-9354-3859",
    bristolProfile: "https://research-information.bris.ac.uk/en/persons/kairui-zhang/",
    intelligentSystemsLab: "https://www.bristol.ac.uk/research/groups/intelligent-systems/",
    zahraa: "https://www.bristol.ac.uk/people/person/Zahraa-Abdallah-06844ace-4e4b-4cf5-8212-7266bec7ede8/",
    martha: "https://marthaflinderslewis.github.io/",
    calmLab: "https://sites.google.com/view/calm-lab",
    undergradSupervisorOrGroup: "https://jszy.hhu.edu.cn/wzy102/"
  },
  supervision: [
    "Current PhD at University of Bristol, Engineering Mathematics, 2024-2028.",
    "Co-supervised by Zahraa S. Abdallah and Martha Lewis.",
    "Current research environment: Intelligent Systems Laboratory, University of Bristol."
  ],
  education: {
    en: [
      "PhD, Engineering Mathematics, University of Bristol, 2024-2028.",
      "MSc, Engineering Mathematics, University of Bristol; supervised by Martha Lewis.",
      "BEng background, Robotics Engineering.",
      "Undergraduate research from third year with Engineering Dredging Center of the Ministry of Education / Hohai University-related group."
    ],
    zh: [
      "博士，Engineering Mathematics，University of Bristol，2024-2028。",
      "硕士，Engineering Mathematics，University of Bristol；导师 Martha Lewis。",
      "本科背景：Robotics Engineering。",
      "本科三年级起参与 Engineering Dredging Center of the Ministry of Education / Hohai University 相关课题组研究。"
    ]
  }
} as const;

export const footerLinks: Link[] = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Google Scholar", href: profile.links.googleScholar },
  { label: "GitHub", href: profile.links.github },
  { label: "ORCID", href: profile.links.orcid },
  { label: "Bristol profile", href: profile.links.bristolProfile }
];
