import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { UserEntity, UserState } from '@polybank/interfaces'
import { apiClient } from '@polybank/api-client'
import { type RootState } from '@polybank/state/store'

export const USER_KEY = 'user'

export const userAdapter = createEntityAdapter<UserEntity>()

export const fetchUser = createAsyncThunk('user/fetch', async (): Promise<UserState> => {
  const response = await apiClient.get<UserEntity>('/authentication/me').build()

  return {
    user: response.data,
    isLoading: false,
    isAuthenticated: true
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
        state.user = action.payload.user
        state.isLoading = false
        state.isAuthenticated = !!action.payload.user?.id
      })
  }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

export const getUserState = (root: RootState) => root[USER_KEY]

export const selectUser = createSelector(getUserState, (state) => state)