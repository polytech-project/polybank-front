import {useQuery} from "react-query";
import {apiClient} from "@polybank/api-client";
import {NewsResponse} from "@polybank/interfaces";

interface useFetchNewsProps {
  actif?: boolean,
}

export const useFetchNews = ({
  actif
}: useFetchNewsProps) => {
  return useQuery(
    ['news'],
    async () => {
      const queriesParams: string[] = []

      if (actif) {
        queriesParams.push("actif=true")
      }

      const response = await apiClient.get<NewsResponse>(`/news?${queriesParams.join('&')}`).build()

      return response.data
    }
  )
}
