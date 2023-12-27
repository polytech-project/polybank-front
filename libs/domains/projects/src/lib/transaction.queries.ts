import {useQuery} from "react-query";
import {apiClient} from "@polybank/api-client";
import {TransactionEntity} from "@polybank/interfaces";

export const useFetchTransaction = (
  projectId: string,
  transactionId: string
) => {
  return useQuery(
    ['transactions', transactionId],
    async () => {
      const response = await apiClient.get<TransactionEntity>(`/projects/${projectId}/transactions/${transactionId}`).build()
      return response.data
    }
  )
}
