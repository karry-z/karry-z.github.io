import type { Locale, Localized } from "../../i18n";
import type { ProjectCategory } from "../../content";

export type ProjectFilterKey = "all" | ProjectCategory;

export type ProjectFilterMode = "or" | "and";

export type ProjectSortKey = "newest" | "oldest" | "title";

export type ProjectControlOption<T extends string> = {
  value: T;
  label: string;
};

export type ProjectsControls = {
  searchLabel: string;
  searchPlaceholder: string;
  filtersLabel: string;
  filters: ProjectControlOption<ProjectFilterKey>[];
  filterModeLabel: string;
  filterModes: ProjectControlOption<ProjectFilterMode>[];
  sortLabel: string;
  sortOptions: ProjectControlOption<ProjectSortKey>[];
  noResults: string;
};

const projectsConfig: Localized<ProjectsControls> = {
  en: {
    searchLabel: "Search",
    searchPlaceholder: "Search projects",
    filtersLabel: "Project filters",
    filters: [
      { value: "all", label: "All" },
      { value: "multimodal-learning", label: "Multimodal Learning" },
      { value: "interpretability", label: "Interpretability" },
      { value: "survey", label: "Survey" },
      { value: "evaluation", label: "Evaluation" },
      { value: "robotics", label: "Robotics" },
      { value: "reinforcement learning", label: "Reinforcement Learning" }
    ],
    filterModeLabel: "Match filters",
    filterModes: [
      { value: "or", label: "Any" },
      { value: "and", label: "All" }
    ],
    sortLabel: "Sort",
    sortOptions: [
      { value: "newest", label: "Newest" },
      { value: "oldest", label: "Oldest" },
      { value: "title", label: "Title" }
    ],
    noResults: "No matching projects."
  },
  zh: {
    searchLabel: "搜索",
    searchPlaceholder: "搜索项目",
    filtersLabel: "项目筛选",
    filters: [
      { value: "all", label: "全部" },
      { value: "multimodal-learning", label: "多模态学习" },
      { value: "interpretability", label: "可解释性" },
      { value: "survey", label: "综述" },
      { value: "evaluation", label: "评估" },
      { value: "robotics", label: "机器人" },
      { value: "reinforcement learning", label: "强化学习" }
    ],
    filterModeLabel: "筛选匹配方式",
    filterModes: [
      { value: "or", label: "任一" },
      { value: "and", label: "全部" }
    ],
    sortLabel: "排序",
    sortOptions: [
      { value: "newest", label: "最新" },
      { value: "oldest", label: "最早" },
      { value: "title", label: "标题" }
    ],
    noResults: "没有匹配的项目。"
  }
};

export function getProjectsConfig(locale: Locale): ProjectsControls {
  return projectsConfig[locale];
}
