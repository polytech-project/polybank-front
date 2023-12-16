import { type EntityState } from '@reduxjs/toolkit'
import { LoadingStatus } from '../types/loading-status.type'
import {MetaState} from "./meta.interface";

export interface DefaultEntityState<T> extends EntityState<T> {
  loadingStatus: LoadingStatus
  error: string | null | undefined
  meta: MetaState | null
}
