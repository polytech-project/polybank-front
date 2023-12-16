import { UserEntity } from './user.entity'

export interface TransactionEntity {
  id: string
  title: string
  amount: number
  project_id: string
  paid_by: string
  user_id: string
  user: UserEntity
  paidByUser: UserEntity
}
