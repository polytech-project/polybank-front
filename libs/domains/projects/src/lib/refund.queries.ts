import { apiClient } from "@polybank/api-client"
import { RefundEntity } from "@polybank/interfaces"
import { useQuery } from "react-query"

export const useFetchRefunds = (
  projectId: string
) => {
  return useQuery(
    ['refunds', projectId],
    async () => {
      const response = await apiClient.get<RefundEntity[]>(`/projects/${projectId}/refunds`).build()
      return response.data
    }
  )
}