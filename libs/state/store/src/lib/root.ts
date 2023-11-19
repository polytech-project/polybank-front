import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit"
// eslint-disable-next-line @nx/enforce-module-boundaries
import { userReducer, initialUserState } from '@polybank/domains/users'

export const rootReducer = combineReducers({
  user: userReducer
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
  user: initialUserState
})