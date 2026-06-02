import { works, type WorkItem } from "./works";

export type ProjectCategory = Exclude<WorkItem["category"], "control">;

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = WorkItem & {
  category: ProjectCategory;
  featured: true;
  primaryHref: string;
  primaryLabel: string;
};

function isFeaturedProject(work: WorkItem): work is Project {
  return (
    work.featured === true &&
    work.category !== "control" &&
    typeof work.primaryHref === "string" &&
    typeof work.primaryLabel === "string"
  );
}

export const projects: Project[] = works.filter(isFeaturedProject);
