import {useQuery, useQueryClient} from "react-query";
import {apiClient} from "@polybank/api-client";
import {ProjectEntity, ProjectResponse} from "@polybank/interfaces";

export const useFetchProjects = () => {
  const queryClient = useQueryClient()

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
    ['project', projectId],
    async () => {
      const response = await apiClient.get<ProjectEntity>(`/projects/${projectId}`).build()
      return response.data
    }
  )
}
