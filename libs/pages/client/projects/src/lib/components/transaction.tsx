import {Balance, TransactionEntity} from '@polybank/interfaces'
import {useSelector} from "react-redux";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {getUserState} from "@polybank/domains/users";
import {useEffect, useState} from "react";
import {classNames} from "@polybank/utils";
import {Link} from "react-router-dom";
import {useParams} from "react-router";

export interface TransactionProps {
  transaction: TransactionEntity
  balances: Balance[]
}

export function Transaction ({ transaction, balances }: TransactionProps) {
  const { projectId = '' } = useParams()
  const [currentBalance, setCurrentBalance] = useState<Balance | null>(null)
  const user = useSelector(getUserState).user!

  useEffect(() => {
    if (!user) return
    const balance = balances.find(b => b.id === transaction.paid_by)
    setCurrentBalance(balance!)
  }, [balances, user]);

  return (
    <Link to={`/projects/${projectId}/transactions/${transaction.id}`} key={transaction.id} className="flex justify-between gap-x-6 py-5">
      <div className="flex items-center gap-2">
        <div className="flex flex-col text-xs text-grey-100 text-center text-thin">
          <span>17</span>
          <span>Aug</span>
        </div>
        <div className="flex min-w-0 items-center gap-4">
          { transaction.paidByUser && (
            <>
              { transaction.paidByUser.avatar_url ? (
                <img className="h-10 w-10 flex-none rounded-lg bg-gray-800 opacity-75" src={transaction.paidByUser.avatar_url} alt="" />
              ) : (
                <div className="h-10 w-10 flex-none rounded-lg bg-red-500">
                  H
                </div>
              )}
            </>
          )}

          <div className="min-w-0 flex flex-col">
            { user.id === transaction.paid_by ? (
              <p className="text-sm leading-6 text-slate-100 font-thin">Tu as payé { transaction.amount}€</p>
            ) : (
              <p className="text-sm leading-6 text-slate-100 font-thin">{transaction.paidByUser?.username} a payé { transaction.amount}€</p>
            )}

            <p className="text-xs text-slate-400 font-thin">{ transaction.title }</p>
          </div>
        </div>
      </div>
      <div>
        { currentBalance && (
          <>
            { user.id === transaction.paid_by ? (
              <div>
                <div className={classNames(
                  'text-green-500 text-xs flex flex-col gap-1 text-right',
                  parseFloat(currentBalance.amount) > 0 ? 'text-green-500' : 'text-red-500'
                )}>
                  <div>
                    { parseFloat(currentBalance.amount) > 0 ? (
                      <span>Tu as prété</span>
                    ) : (
                      <span>Tu dois</span>
                    )}
                  </div>
                  <span>{currentBalance.amount}€</span>
                </div>
              </div>

            ) : (
              <div className={classNames(
                'text-green-500 text-xs flex flex-col gap-1 text-right',
                parseFloat(currentBalance.amount) > 0 ? 'text-green-500' : 'text-red-500'
              )}>
                <div>
                  { parseFloat(currentBalance.amount) > 0 ? (
                    <span>Il a prété</span>
                  ) : (
                    <span>Il doit</span>
                  )}
                </div>
                <span>{currentBalance.amount}€</span>
              </div>
            )}
          </>
        )}

      </div>
    </Link>
  )
}
