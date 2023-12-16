import {UserEntity} from "./user.entity";
import {ProjectEntity} from "./project.entity";

export interface ExpenseEntity {
  id: string
  title: string
  amount: number
  project_id: string
  paid_by: string
  user_id: string
  user?: UserEntity
  paidByUser?: UserEntity
  project?: ProjectEntity
  created_at: string
  updated_at: string
}
