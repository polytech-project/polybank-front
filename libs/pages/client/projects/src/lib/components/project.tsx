import {EllipsisVerticalIcon, UserIcon} from '@heroicons/react/24/outline'
import {ProjectEntity, UserEntity} from '@polybank/interfaces'
import {Link} from 'react-router-dom'
import {PROJECTS_GENERAL_URL} from "@polybank/routes";
import {CakeIcon} from "@heroicons/react/20/solid";
import {useEffect, useState} from "react";
import {Avatar} from "@polybank/ui";
import {useSelector} from "react-redux";
import {getUserState} from "@polybank/domains/users";
import {am} from "vitest/dist/types-198fd1d9";

export interface ProjectProps {
    project: ProjectEntity
}
export default function Project ({ project }: ProjectProps) {
  const [amount, setAmount] = useState(0)
  const user = useSelector(getUserState).user
  useEffect(() => {
    if (!user) return
    const refund = project.refunds.find((r) => r.id === user.id)
    if (!refund) return

    setAmount(refund.amount)
  }, [project, user])
  return (
    <Link
      to={`/projects/${project.id}` + PROJECTS_GENERAL_URL}
      className="flex flex-col border bg-grey-600 rounded-md border-grey-400 text-white"
    >
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-red-500 rounded-md p-1">
            <CakeIcon />
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-gray-50">{ project.title}</span>
            <span className="text-sm text-grey-200">3 APR 2023</span>

          </div>
        </div>
        <div className="">
          <EllipsisVerticalIcon className="w-5" />
        </div>
      </div>
      <div className="border-t p-3 border-grey-400">
        <div className="flex flex-col text-grey-100  text-sm">
          <span className="">Total des dépenses: <span className="ml-2">{ project.expense.toFixed(2)}€</span></span>
          <span className="flex items-center">

            { amount < 0 ? (
              <span>Tu dois:</span>
            ) : (
              <span>On te doit:</span>
            )}
            <span className="ml-2">{Math.abs(amount).toFixed(2)}€</span>
          </span>

        </div>

        <div>
          <ListAvatars users={project.users} />
        </div>

      </div>
    </Link>
  )
}


interface ListAvatarsProps {
  users: UserEntity[]
}
function ListAvatars ({ users }: ListAvatarsProps) {
  return (
    <div className="isolate flex -space-x-1  p-1">
      { users.map((user) => (
        <Avatar
          key={user.id}
          username={user.username}
          url={user.avatar_url}
          className="relative z-0 inline-block !h-6 !w-6 rounded-full ring-2 ring-grey-300"
        />
      ))}

    </div>
  )
}
