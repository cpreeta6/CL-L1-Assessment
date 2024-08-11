import { Project } from '../models/Project';

let projects: Project[] = [];
let nextProjectId = 1;

export const createProject = (name: string, contributorId: number, approverId: number, reviewerId: number): Project => {
  const newProject = {
    id: nextProjectId++,
    name,
    contributorId,
    approverId,
    reviewerId,
  };
  projects.push(newProject);
  return newProject;
};

export const getProjects = (): Project[] => {
  return projects;
};
