import {ProjectEntity} from "@polybank/interfaces";
import {Link} from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import {Cog8ToothIcon} from "@heroicons/react/24/outline";
import {classNames} from "@polybank/utils";

export interface HeaderProjectProps {
  project: ProjectEntity
  setIsOpen: () => void
  tabs: { name: string, href: (id: string) => string, current: boolean}[]
}

export function HeaderProject ({ project, setIsOpen, tabs }: HeaderProjectProps) {
  return (
    <div className="flex content-end flex-col text-slate-400">
      <Link to='/projects' className="absolute top-4 left-3">
        <ArrowLeftIcon className="w-5 font-bold"  />
      </Link>

      <div className="absolute top-4 right-3" onClick={setIsOpen}>
        <Cog8ToothIcon className="w-5" />
      </div>

      <div className=" h-full items-end flex flex-row justify-between">
        <div className="flex items-center justify-between w-full px-3 pb-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-100">{ project.title }</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-grey-500 border border-grey-400 shadow shadow-grey-700 m-4 rounded-md px-3 py-2">
        <div className="flex flex-col text-center p-4 border-b gap-1 border-grey-400">
          <span className="text-xs">Total spending</span>
          <span className="text-xl text-gray-100">2000.00€</span>
          <span className="text-xs">You are owed <span className="text-green-200">1500€</span> overall</span>
        </div>
        <div className="flex items-center divide-x mt-4 divide-grey-400">
          <div className="flex flex-col gap-2 w-1/2 text-center p-4">
            <span className="text-xs">Total you paid</span>
            <span className="text-gray-100 text-xl">2000.00€</span>
          </div>
          <div className="flex flex-col gap-2 w-1/2 p-4 text-center">
            <span className="text-xs">Total your share</span>
            <span className="text-gray-100 text-xl">500.00€</span>
          </div>
        </div>
      </div>

      <div>
        <nav className="w-full px-3 " aria-label="Tabs">
          <div className="bg-grey-600 rounded-xl border border-grey-400 max-w-md w-full p-1  sm:px-0 flex items-center text-center">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href(project.id)}
                className={classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  tab.current
                    ? 'bg-white text-grey-800 shadow'
                    : 'text-gray-600 hover:bg-grey-200 hover:text-white'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </div>

        </nav>
      </div>
    </div>
  )
}
