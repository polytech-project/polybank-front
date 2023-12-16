import { MetaState } from '../states'
import { UserEntity } from '../entity'

export interface UsersResponse {
  data: UserEntity[]
  meta: MetaState
}
