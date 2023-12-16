import {ExpenseEntity} from '@polybank/interfaces'
import {useSelector} from "react-redux";
import {getUserState} from "@polybank/domains/users";

export interface ExpenseProps {
  expense: ExpenseEntity
}

export function Expense ({ expense }: ExpenseProps) {
  const user = useSelector(getUserState).user!

  return (
    <li key={expense.id} className="flex justify-between gap-x-6 py-5">
      <div className="flex items-center gap-2">
        <div className="flex flex-col text-xs text-grey-100 text-center text-thin">
          <span>17</span>
          <span>Aug</span>
        </div>
        <div className="flex min-w-0 items-center gap-4">
          { expense.paidByUser && (
            <>
              { expense.paidByUser.avatar_url ? (
                <img className="h-10 w-10 flex-none rounded-lg bg-gray-800 opacity-75" src={expense.paidByUser.avatar_url} alt="" />
              ) : (
                <div className="h-10 w-10 flex-none rounded-lg bg-red-500">
                  H
                </div>
              )}
            </>
          )}

          <div className="min-w-0 flex flex-col">
            { user.id === expense.paid_by ? (
              <p className="text-sm leading-6 text-slate-100 font-thin">You paid { expense.amount}€</p>
            ) : (
              <p className="text-sm leading-6 text-slate-100 font-thin">{expense.paidByUser?.username} { expense.amount}€</p>
            )}

            <p className="text-xs text-slate-400 font-thin">{ expense.title }</p>
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
