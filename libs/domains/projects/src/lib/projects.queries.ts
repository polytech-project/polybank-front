import {useMutation, useQuery, useQueryClient} from "react-query";
import {apiClient} from "@polybank/api-client";
import {ProjectEntity, ProjectResponse} from "@polybank/interfaces";

export const useFetchProjects = () => {
  return useQuery(
    ['projects'],
    async (): Promise<ProjectEntity[]> => {
      const response = await apiClient.get<ProjectResponse>('/projects?me=true').build()
      return response.data.data
    }, {
      onSuccess: () => {

      },
      //onError: (err) => toastError(err as Error)
    }
  )
}

export const useFetchProject = (
  projectId: string
) => {
  return useQuery(
    ['projects', projectId],
    async () => {
      const response = await apiClient.get<{ project: ProjectEntity, expenses: number, balances: any[]}>(`/projects/${projectId}`).build()
      return response.data
    }
  )
}

export const useCreateTransaction = () => {
  const queryClient = useQueryClient()
  return useMutation(async ({ projectId, data }: { projectId: string, data: {}}) => {
    const response = await apiClient.post(`/projects/${projectId}/transactions`)
      .payload(data).build()

    return {
      ...response.data,
      projectId
    }
  }, {
    onSuccess: async (data) => {
      await queryClient.invalidateQueries(['projects', data.projectId])
    }
  })
}
