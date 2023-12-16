import {TransactionEntity} from './transaction.entity'
import {UserEntity} from './user.entity'

export interface ProjectEntity {
  id: string
  title: string
  description: string
  devise: string
  created_at: string
  updated_at: string
  transactions: TransactionEntity[]
  users: UserEntity[]
}
