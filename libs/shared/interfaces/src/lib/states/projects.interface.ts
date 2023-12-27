import { ProjectEntity } from "../entity";
import { DefaultEntityState } from "./default-entity-state.interface";

export interface ProjectsState extends DefaultEntityState<ProjectEntity> {
  project: ProjectEntity | null
}

export interface CreateProjectRequest {
  title: string
  description?: string
  device?: string
  users: string[]
}
