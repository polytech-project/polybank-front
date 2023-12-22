import {UserEntity} from "./user.entity";
import {ProjectEntity} from "./project.entity";

export interface TransactionEntity {
  id: string
  title: string
  amount: number
  project_id: string
  type: string
  paid_by: string
  user_id: string
  user?: UserEntity
  users?: UserEntity[]
  paidByUser?: UserEntity
  project?: ProjectEntity
  created_at: string
  updated_at: string
}
