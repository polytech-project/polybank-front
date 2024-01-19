import { PROJECTS_GENERAL_URL, PROJECT_OVERVIEW_URL, PROJECT_REFUND_URL, PROJECT_SETTLEUP_URL } from "@polybank/routes"
import { HeaderProject } from "../components/header_project"
import { useState } from "react"
import { ProjectEntity, RefundEntity, TransactionEntity } from "@polybank/interfaces"
import { Refund } from "../components/refund"
import { RefundModalFeature } from "../forms/feature/refund-modal-feature"

export interface PageProjectRefundProps {
  project: ProjectEntity
  transactions: TransactionEntity[]
  balances: any[]
  refunds: RefundEntity[]
  expense: number
}

const tabs = [
  { name: 'Dépenses', href: (id: string): string => PROJECT_OVERVIEW_URL(id) + PROJECTS_GENERAL_URL, current: false },
  { name: 'Équilibres', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_SETTLEUP_URL, current: false },
  { name: 'Remboursements', href: (id: string) => PROJECT_OVERVIEW_URL(id) + PROJECT_REFUND_URL, current: true},
]

export function PageProjectRefund({ project, transactions, expense, balances, refunds }: PageProjectRefundProps) {
  const [open, setOpen] = useState(false)
  const [refundModalOpen, setRefundModalOpen] = useState<boolean>(false)
  const [selectedRefund, setSelectedRefund] = useState<RefundEntity | undefined>()
  console.log(refunds)
  
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

      <div className="px-3 overflow-auto h-[400px] pb-12 mt-2">
        <div className="flex flex-col">
          { refunds.length ? (
            <div className="flex flex-col gap-3">
              {refunds.map((refund, index) => (
                <Refund refund={refund} key={index} handleClick={() => {
                  setRefundModalOpen(true)
                  setSelectedRefund(refund)
                }} />
              ))}
            </div>
          ) : (
            <div>Aucun remboursement</div>
          )}
        </div>
      </div>

      <RefundModalFeature 
        onClose={() => setRefundModalOpen(false)}
        projectId={project.id}
        open={refundModalOpen}
        refund={selectedRefund!}
      />
    </>
  )
}