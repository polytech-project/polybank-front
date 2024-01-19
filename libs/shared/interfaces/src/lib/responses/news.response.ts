import { type MetaState} from '../states/meta.interface'
import { type NewsEntity } from '../entity'
export interface NewsResponse {
  data: NewsEntity[]
  meta: MetaState
}
