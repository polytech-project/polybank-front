import { RefundEntity } from "@polybank/interfaces"
import { RefundModal } from "../ui/refund-modal";
import { useCreateTransaction } from "@polybank/domains/projects";
import { useQueryClient } from "react-query";

export interface RefundModalFeature {
  onClose: () => void
  open: boolean
  refund?: RefundEntity
  projectId: string
}

export function RefundModalFeature ({ onClose, open, refund, projectId }: RefundModalFeature) {
  const { mutate: createTransaction } = useCreateTransaction()
  const queryClient = useQueryClient()

  function onSubmit () {
    const payload = {
      title: 'Remboursement',
      amount: refund?.amount,
      paid_by: refund?.from.id,
      users: [refund?.to.id],
      type: 'refund'
    }

    createTransaction({
      data: payload,
      projectId
    })
    queryClient.invalidateQueries(['refunds', projectId])
    onClose()

  
  }

  return (
    <div>
      { refund && (
        <RefundModal 
          closeModal={onClose}
          isModalOpen={open}
          refund={refund}
          onSubmit={onSubmit}
        />
      )}
    </div>
  )
}