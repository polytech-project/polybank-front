import { CircleStackIcon, HomeIcon } from "@heroicons/react/24/outline";
import { classNames } from "@polybank/utils";



import { PropsWithChildren } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function LayoutPage ({ children }: PropsWithChildren) {
  const { pathname } = useLocation()

  const matchHomeRoute = pathname.includes('/home')
  const matchProjectsRoute = pathname.includes(`/projects`)

  return (
    <main className="h-screen overflow-x-hidden bg-grey-500">
      <div className="p-4">
        <div className="flex justify-between items-center border-b border-grey-400 pb-4">
          <img src="/logo.png" className="w-6 mx-auto" alt="logo polybank"/>
        </div>
      </div>

      <div className="">{ children }</div>

      <div className="fixed bottom-0 w-full bg-grey-600 z-50">
        <div className="border-t border-grey-400 p-3">
          <div className="flex items-center gap-4 justify-around">
            <Link to="/home">
              <div className="flex flex-col items-center gap-1">
                <div>
                  <HomeIcon className={classNames('w-6', matchHomeRoute ? 'text-slate-200' : 'text-slate-700')} />
                </div>
                <div className={classNames('text-sm',  matchHomeRoute ? 'text-slate-200' : 'text-slate-700')}>
                  Accueil
                </div>
              </div>
            </Link>
            <Link to="/projects">
              <div className="flex flex-col items-center gap-1">
                <div>
                  <CircleStackIcon className={classNames('w-6', matchProjectsRoute ? 'text-slate-200' : 'text-slate-700')} />
                </div>
                <div className={classNames('text-sm',  matchProjectsRoute ? 'text-slate-200' : 'text-slate-700')}>
                  Projets
                </div>
              </div>
            </Link>


          </div>

        </div>
      </div>

    </main>
  )
}

