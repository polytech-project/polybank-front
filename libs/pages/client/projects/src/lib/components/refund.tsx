import { RefundEntity } from "@polybank/interfaces";

export interface RefundProps {
  refund: RefundEntity
  handleClick: () => void
}

export function Refund({ refund, handleClick }: RefundProps) {
  return (
    <div 
      onClick={handleClick}
      className="flex items-center justify-between p-2 border border-grey-400 rounded-md text-slate-400"
    >
      <div className="flex flex-col">
        <span className="text-blue-300">{ refund.from.username }</span>
        <span className="text-xs">doit à</span>
        <span className="text-blue-300">{refund.to.username}</span>
      </div>

      <div>
        { refund.amount.toFixed(2)}€
      </div>
    </div>
  )
}