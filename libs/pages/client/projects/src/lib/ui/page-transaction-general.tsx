import {TransactionEntity, UserEntity} from '@polybank/interfaces'
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";

export interface PageTransactionGeneralProps {
  transaction: TransactionEntity
  user: UserEntity
}

export function PageTransactionGeneral ({ transaction, user }: PageTransactionGeneralProps) {
  return (
    <div>
      <header className="border-b mx-3 border-grey-400">
        <Link to={`/projects/${transaction.project_id}/general`} className="absolute top-4 left-3">
          <ArrowLeftIcon className="w-5 font-bold" />
        </Link>
        <div className=" py-4">
          <div className="flex flex-col text-center ">
            <h1 className="text-xl font-bold">{ transaction.title }</h1>
            <span className="font-medium text-gray-300">{ transaction.amount.toFixed(2)}€</span>
          </div>

          <div className="flex justify-between items-center pt-4 text-xs">
            <div>
              Payé par {transaction.paidByUser!.username}
              {transaction.paid_by === user.id && (
                <span> (moi)</span>
              )}
            </div>
            <div>16/12/2023</div>
          </div>

        </div>
      </header>
      <div className="px-3 pt-8">
        <div className="bg-grey-400 p-2 rounded-md text-center text-gray-400">
          Pour {transaction.users?.length} participants
          { transaction.users!.map((u) => u.id).includes(user.id) && (
            <span>, dont <span>moi</span></span>
          )}
        </div>
        <div className="flex flex-col divide-y divide-grey-400 pt-4">
          {transaction.users!.map((user) => (
            <div className="flex items-center justify-between py-2">
              <span>{ user.username }</span>
              <span>{ (transaction.amount / transaction.users!.length).toFixed(2)}€</span>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
