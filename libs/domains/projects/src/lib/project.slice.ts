import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import {CreateProjectRequest, ProjectEntity, ProjectsState, ProjectResponse} from '@polybank/interfaces'
import { apiClient } from '@polybank/api-client'
import {useMutation, useQueryClient} from "react-query"
// eslint-disable-next-line @nx/enforce-module-boundaries
import {RootState} from "@polybank/state/store";
export const PROJECT_KEY = 'project'

export const projectAdapter = createEntityAdapter<ProjectEntity>()

export const fetchProjects = createAsyncThunk('projects/fetch', async (data) => {
  console.log("test fethc projects")
  const response = await apiClient.get<ProjectResponse>('/projects?me=true').build()

  return response.data
})

export const useCreateProject = (
  onSuccessCallback?: (result: ProjectEntity) => void,
) => {
  const queryClient = useQueryClient()

  return useMutation(
    async (data: CreateProjectRequest) => {
      const response = await apiClient.post('/projects').payload(data).build()

      return response.data
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries('projects')
      }
    }
  )
}

export const initialProjectsState: ProjectsState = projectAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
  meta: null
})

export const projectsSlice = createSlice({
  name: PROJECT_KEY,
  initialState: initialProjectsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state: ProjectsState) => {
        state.loadingStatus = 'loading'
      })
      .addCase(fetchProjects.fulfilled, (state: ProjectsState, action) => {
        projectAdapter.upsertMany(state, action.payload.data)
        state.meta = action.payload.meta

        state.loadingStatus = 'loaded'
      })
  }
})

export const projects = projectsSlice.reducer
export const projectsActions = projectsSlice.actions

const { selectAll } = projectAdapter.getSelectors()

export const getProjectState = (rootState: RootState): ProjectsState => rootState['project'].projects

export const selectAllProjects = createSelector(getProjectState, selectAll)
