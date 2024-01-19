import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit"
// eslint-disable-next-line @nx/enforce-module-boundaries
import { userReducer, initialUserState } from '@polybank/domains/users'
// eslint-disable-next-line @nx/enforce-module-boundaries
import {initialProjectsState, projects} from '@polybank/domains/projects'
// eslint-disable-next-line @nx/enforce-module-boundaries
import {initialNewsState, news} from '@polybank/domains/news'

export const projectReducer = combineReducers({
  projects: projects
})

export const newsReducer = combineReducers({
  news: news
})

export const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  news: newsReducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true
      })
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const initialRootState = (): RootState => ({
  user: initialUserState,
  project: {
    projects: initialProjectsState
  },
  news: {
    news: initialNewsState
  }
})
