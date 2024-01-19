import { UserEntity } from "./user.entity";

export interface RefundEntity {
  from: UserEntity
  to: UserEntity
  amount: number
}