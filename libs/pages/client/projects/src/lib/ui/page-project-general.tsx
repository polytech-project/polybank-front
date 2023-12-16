import {ExpenseEntity, ProjectEntity} from '@polybank/interfaces'
import {PROJECT_OVERVIEW_URL, PROJECT_STATS_URL, PROJECTS_GENERAL_URL} from '@polybank/routes'
import {SettingsProjectModalFeature} from '../forms/feature/settings-project-modal-feature'
import {useState} from 'react'
import {HeaderProject} from '../components/header_project'
import {Button, ButtonStyle} from '@polybank/ui'
import {AddExpenseFeature} from '../forms/feature/add-expense-feature'

export interface PageProjectGeneralProps {
  project: ProjectEntity
  expenses: ExpenseEntity[]
}

const tabs = [
  { name: 'Dépenses', href: (id: string): string => PROJECT_OVERVIEW_URL(id) + PROJECTS_GENERAL_URL, current: true },
  { name: 'Statistiques', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_STATS_URL, current: false },
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
