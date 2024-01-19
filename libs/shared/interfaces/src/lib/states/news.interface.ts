import { type DefaultEntityState } from './default-entity-state.interface'
import { type NewsEntity} from '../entity/news.entity'

export interface NewsState extends DefaultEntityState<NewsEntity> {
  fetch: boolean
}
