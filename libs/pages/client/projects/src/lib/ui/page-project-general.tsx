import {ExpenseEntity, ProjectEntity} from '@polybank/interfaces'
import {PROJECT_OVERVIEW_URL, PROJECT_SETTINGS_URL, PROJECT_STATS_URL, PROJECTS_GENERAL_URL} from "@polybank/routes";
import {SettingsProjectModalFeature} from "../forms/feature/settings-project-modal-feature";
import {useState} from "react";
import {HeaderProject} from "../components/header_project"
import {Button, ButtonStyle} from "@polybank/ui";
import {AddExpenseFeature} from "../forms/feature/add-expense-feature";
export interface PageProjectGeneralProps {
  project: ProjectEntity
  expenses: ExpenseEntity[]
}

const tabs = [
  { name: 'Dépenses', href: (id: string): string => PROJECT_OVERVIEW_URL(id) + PROJECTS_GENERAL_URL, current: true },
  { name: 'Statistiques', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_STATS_URL, current: false },
]

const people = [


  {
    name: 'Escorte VIP',
    text: 'You paid 400.00€',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kalash de Brodi',
    text: 'Tristan le zbeub paid 400.00€',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQHtmJgdvU36OQ/profile-displayphoto-shrink_100_100/0/1676498332968?e=1707955200&v=beta&t=CkAbUhj4eft-HRKSzuYfPaYUp9XL_9e0RtX-dMzxOAw',
  },
]

export function PageProjectGeneral ({ project, expenses }: PageProjectGeneralProps) {
  const [open, setOpen] = useState(false)
  const [expenseModalOpen, setExpenseModalOpen] = useState<boolean>(false)
  return (
    <>
      <HeaderProject project={project} setIsOpen={() => setOpen(true)} tabs={tabs} />
      <div className="px-3">
        <div className="flex flex-col">
          { expenses.length ? (
            <div>Afficher les dépenses</div>
          ) : (
            <div>Aucune dépenses
            </div>
          )}
        </div>

        <div className="absolute bottom-20 w-full left-0 px-4">
          <Button
            onClick={() => setExpenseModalOpen(true)}
            style={ButtonStyle.DARK}
            className="w-full lg:w-10"
          >
            Ajouter une dépense


          </Button>
        </div>

        <AddExpenseFeature
          onClose={() => setExpenseModalOpen(false)}
          open={expenseModalOpen}
          project={project}
        />

      </div>
      <SettingsProjectModalFeature onClose={() => setOpen(false)} open={open} />
    </>

  )
}

function Test ({ expense }) {
  return (
    <li key={expense.name} className="flex justify-between gap-x-6 py-5">
      <div className="flex items-center gap-2">
        <div className="flex flex-col text-xs text-grey-100 text-center text-thin">
          <span>17</span>
          <span>Aug</span>
        </div>
        <div className="flex min-w-0 items-center gap-4">
          <img className="h-10 w-10 flex-none rounded-lg bg-gray-800 opacity-75" src={expense.imageUrl} alt="" />
          <div className="min-w-0 flex flex-col">
            <p className="text-sm leading-6 text-slate-100 font-thin">{ expense.text }</p>
            <p className="text-xs text-slate-400 font-thin">{ expense.name }</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-green-500 text-xs flex flex-col gap-1 text-center">
          <span>you lent</span>
          <span>5728.00€</span>
        </div>
      </div>
    </li>
  )
}
