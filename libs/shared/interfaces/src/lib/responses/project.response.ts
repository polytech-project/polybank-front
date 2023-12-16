import {MetaState} from '../states/meta.interface'
import { ProjectEntity} from '../entity/project.entity'

export interface ProjectResponse {
  data: ProjectEntity[]
  meta: MetaState
}
