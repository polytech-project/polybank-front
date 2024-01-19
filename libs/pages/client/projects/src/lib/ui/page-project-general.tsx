import {TransactionEntity, ProjectEntity} from '@polybank/interfaces'
import {PROJECT_OVERVIEW_URL, PROJECT_REFUND_URL, PROJECT_SETTLEUP_URL, PROJECTS_GENERAL_URL} from '@polybank/routes'
import {SettingsProjectModalFeature} from '../forms/feature/settings-project-modal-feature'
import {useState} from 'react'
import {HeaderProject} from '../components/header_project'
import {Button, ButtonStyle} from '@polybank/ui'
import {AddExpenseFeature} from '../forms/feature/add-expense-feature'
import {Transaction} from "../components/transaction";

export interface PageProjectGeneralProps {
  project: ProjectEntity
  transactions: TransactionEntity[]
  balances: any[]
  expense: number
}

const tabs = [
  { name: 'Dépenses', href: (id: string): string => PROJECT_OVERVIEW_URL(id) + PROJECTS_GENERAL_URL, current: true },
  { name: 'Équilibres', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_SETTLEUP_URL, current: false },
  { name: 'Remboursements', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_REFUND_URL, current: false},
]

export function PageProjectGeneral ({ project, transactions, expense, balances }: PageProjectGeneralProps) {
  const [open, setOpen] = useState(false)
  const [expenseModalOpen, setExpenseModalOpen] = useState<boolean>(false)


  return (
    <>
      <HeaderProject
        project={project}
        expense={expense}
        transactions={transactions}
        balances={balances}
        setIsOpen={() => setOpen(true)}
        tabs={tabs}
      />

      <div className="px-3 overflow-auto h-[400px] pb-12">
        <div className="flex flex-col ">
          { transactions.length ? (
            <div className="flex flex-col divide-y divide-grey-400">
              { transactions.map((transaction) => (
                <Transaction
                  key={transaction.id}
                  transaction={transaction}
                  balances={balances}
                />
              ))}
            </div>
          ) : (
            <div>Aucune dépenses
            </div>
          )}
        </div>

        <div className="fixed bottom-20 w-full left-0 px-4">
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

        <SettingsProjectModalFeature
          onClose={() => setOpen(false)}
          open={open}
        />



      </div>

    </>

  )
}
