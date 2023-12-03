import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit"
import { ProjectEntity, ProjectsState } from '@polybank/interfaces'
import { apiClient } from '@polybank/api-client'
import { useMutation, useQueryClient } from "react-query"
export const PROJECT_KEY = 'project'

export const projectAdapter = createEntityAdapter<ProjectEntity>()

export const fetchProjects = createAsyncThunk('projects/fetch', async (data) => {
  const response = await apiClient.get<ProjectEntity[]>('/projects').build()

  return response.data
})

export const useCreateProject = (
  onSuccessCallback?: (result: ProjectEntity) => void,
) => {
  const queryClient = useQueryClient()

  return useMutation(
    async ({ data }: { data: CreateProjectRequest }) => {
      const response = await apiClient.post('/projects').payload(data).build()

      return response.data
    }
  )
}

export const initialProjectsState: ProjectsState = projectAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null
})