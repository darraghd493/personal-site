export interface Project {
  name: string;
  description: string[];
  type: ProjectType;
  url?: string;
  image?: string;
  date?: string;
  info: {
    languages?: string[];
    frameworks?: string[];
  };
}

export enum ProjectType {
  OPEN_SOURCE = "Open Source",
  CLOSED_SOURCE = "Closed Source",
  LOST_SOURCE = "Lost Source",
  PAID_PRODUCT = "Paid Product",
}
