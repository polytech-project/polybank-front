import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { RefundEntity } from "@polybank/interfaces";
import { Avatar, Button, ButtonStyle, SlideUpMenu } from "@polybank/ui";

export interface RefundModalProps {
  isModalOpen: boolean
  closeModal: () => void
  refund: RefundEntity
  onSubmit: () => void
}

export function RefundModal({ isModalOpen, closeModal, refund, onSubmit }: RefundModalProps) {
  return (
    <SlideUpMenu isOpen={isModalOpen} onClose={closeModal}>
      <div className="pb-8 pt-4 flex flex-col">
        <h3 className="font-bold text-2xl">Remboursement</h3>


        <div className="rounded-md bg-grey-400 p-3 flex mt-4 flex-col gap-2">
          <div className="text-center">
            <span className="text-sm text-center text-slate-400">{refund.from.username } rembourse <span className="font-semibold text-blue-400">{refund.amount.toFixed(2)}€</span> à {refund.to.username}</span>
          </div>
          <div className="w-1/2 mx-auto">
            <div className="flex items-center justify-between gap-6 mx-auto">
              <Avatar className="!w-16 !h-16" rounded="rounded-md" username={refund.from.username} url={refund.from.avatar_url}  />
              <div>
                <ArrowRightIcon className="text-white w-6" />
              </div>
              <Avatar className="!w-16 !h-16" rounded="rounded-md" username={refund.to.username} url={refund.to.avatar_url}  />
            </div>
          </div>

          <div className="w-full mt-6 mx-auto">
            <Button
              onClick={onSubmit}
              className="w-full"
              style={ButtonStyle.CONFIRM}
            >
              Enregistrer
            </Button>
          </div>
        
        </div>


      </div>
    </SlideUpMenu>
  )
}