import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { UserEntity, UserState } from '@polybank/interfaces'
import { apiClient } from '@polybank/api-client'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { type RootState } from '@polybank/state/store'

export const USER_KEY = 'user'

export const userAdapter = createEntityAdapter<UserEntity>()

export const fetchUser = createAsyncThunk('user/fetch', async (): Promise<UserState | undefined> => {
  try {
    const response = await apiClient.get<UserEntity>('/authentication/me').build()

    return {
      user: response.data,
      isLoading: false,
      isAuthenticated: true
    }
  } catch (err: any) {
    console.log(err);
    console.log(window.location.pathname);


    if (err.response.status === 401 && !window.location.pathname.includes('/login')) {
      window.location.href = '/login'
    }
  }
})

export const initialUserState: UserState = {
  isAuthenticated: false,
  isLoading: false
}

export const userSlice = createSlice({
  name: USER_KEY,
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload!.user
        state.isLoading = false
        state.isAuthenticated = !!action.payload!.user?.id
      })
  }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

export const getUserState = (root: RootState) => root[USER_KEY]

export const selectUser = createSelector(getUserState, (state) => state)
