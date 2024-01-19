import {type Balance, ProjectEntity} from '@polybank/interfaces'
import {PROJECT_OVERVIEW_URL, PROJECT_REFUND_URL, PROJECT_SETTLEUP_URL, PROJECTS_GENERAL_URL} from "@polybank/routes";
import {HeaderProject} from "../components/header_project";
import {useState} from "react";
import { BalanceItem } from '../components/balance-item'
export interface PageProjectSettleupProps {
  balances: Balance[]
  project: ProjectEntity
  expense: number
  extremeBalance: number
}

const tabs = [
  { name: 'Dépenses', href: (id: string): string => PROJECT_OVERVIEW_URL(id) + PROJECTS_GENERAL_URL, current: false },
  { name: 'Équilibres', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_SETTLEUP_URL, current: true },
  { name: 'Remboursements', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_REFUND_URL, current: false},
]
export function PageProjectSettleup({ balances, project, expense, extremeBalance }: PageProjectSettleupProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <HeaderProject
        project={project}
        setIsOpen={() => setOpen(true)}
        tabs={tabs}
        balances={balances}
        transactions={project.transactions}
        expense={expense}
      />

      <div className="m-4">
        <div className="flex flex-col divide-y divide-grey-400">
          {balances.map((balance) => (
            <BalanceItem
              balance={parseFloat(balance.amount)}
              max={extremeBalance}
              userId={balance.id}
              username={balance.username}
              key={balance.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}


