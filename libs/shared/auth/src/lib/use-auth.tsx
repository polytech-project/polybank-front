import { useQuery } from "react-query"
import { apiClient } from '@polybank/api-client'

export function useAuth() {
  function useMe () {
    return useQuery('me', async () => {
      const response = await apiClient.get('/authentication/me').build()

      return response.data
    })
  }

  return { useMe }
}