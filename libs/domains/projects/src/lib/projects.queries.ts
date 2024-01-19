import {useMutation, useQuery, useQueryClient} from "react-query";
import {apiClient} from "@polybank/api-client";
import {ProjectEntity, ProjectResponse} from "@polybank/interfaces";

interface useFetchProjectsProps {
  me?: boolean,
  transactions?: boolean,
  users?: boolean
}
export const useFetchProjects = ({ me, transactions, users }: useFetchProjectsProps) => {
  return useQuery(
    ['projects'],
    async (): Promise<ProjectEntity[]> => {
      const queriesParams: string[] = []
      if (me) {
        queriesParams.push('me=true')
      }
      if (transactions) {
        queriesParams.push('transactions=true')
      }
      if (users) {
        queriesParams.push('users=true')
      }
      const response = await apiClient.get<ProjectResponse>(`/projects?${queriesParams.join('&')}`).build()
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
