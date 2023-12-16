import {useQuery} from "react-query";
import {apiClient} from "@polybank/api-client";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {AddNewMembers} from "../ui/add-new-members";
import {UsersResponse} from "@polybank/interfaces";
import {FormProvider, useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";

export interface AddNewMembersFeatureProps {
  onClose: () => void
  open: boolean
  setIds: Dispatch<SetStateAction<string[]>>
  ids: string[]
}

export function AddNewMembersFeature({ onClose, open, setIds, ids }: AddNewMembersFeatureProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  let timerId: NodeJS.Timeout

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      search: ''
    }
  })

  const { data } = useQuery(['members', searchParams.toString()], async () => {
    const response = await apiClient.get<UsersResponse>(`/users?excludeSelf=true&${searchParams.toString()}`).build()

    return response.data
  }, {
    enabled: open
  })

  useEffect(() => {
    console.log(searchParams.toString())
  }, [searchParams])

  useEffect(() => {
    const subscribe = methods.watch((data) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        if (data.search) {
          searchParams.set('search', data.search!)
        } else {
          searchParams.delete('search')
        }

        navigate(`/projects?${searchParams.toString()}`)
      }, 500)

    })

    return () => subscribe.unsubscribe()
  }, [methods])



  return (
    <FormProvider {...methods}>
      <AddNewMembers
        users={data?.data}
        isOpen={open} onClose={onClose}
        ids={ids} setIds={setIds}
      />
    </FormProvider>
  )
}
