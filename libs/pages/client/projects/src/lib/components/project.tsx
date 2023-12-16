import {EllipsisVerticalIcon, UserIcon} from '@heroicons/react/24/outline'
import {ProjectEntity, UserEntity} from '@polybank/interfaces'
import {Link} from 'react-router-dom'
import {PROJECTS_GENERAL_URL} from "@polybank/routes";
import {CakeIcon} from "@heroicons/react/20/solid";
import {useEffect} from "react";
import {Avatar} from "@polybank/ui";

export interface ProjectProps {
    project: ProjectEntity
}
export default function Project ({ project }: ProjectProps) {
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
          <span className="">Total Cost: <span className="ml-2">100.000€</span></span>
          <span>You Owed: <span className="ml-2">54.000€</span></span>
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
          username={user.username}
          url={user.avatar_url}
          className="relative z-0 inline-block !h-6 !w-6 rounded-full ring-2 ring-grey-300"
        />
      ))}

    </div>
  )
}
