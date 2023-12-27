import {Balance, ProjectEntity, TransactionEntity} from "@polybank/interfaces";
import {Link} from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import {Cog8ToothIcon} from "@heroicons/react/24/outline";
import {classNames} from "@polybank/utils";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
// eslint-disable-next-line @nx/enforce-module-boundaries
import {getUserState} from "@polybank/domains/users";

export interface HeaderProjectProps {
  project: ProjectEntity
  setIsOpen: () => void
  tabs: { name: string, href: (id: string) => string, current: boolean}[]
  balances: Balance[]
  transactions: TransactionEntity[]
  expense: number
}

export function HeaderProject ({ project, setIsOpen, tabs, expense, balances, transactions}: HeaderProjectProps) {
  const user = useSelector(getUserState)
  const [currentBalance, setCurrentBalance] = useState<Balance>()
  const [totalPaid, setTotalPaid] = useState(0)
  const [totalShare, setTotalShare] = useState(0)

  useEffect(() => {
    if (!user) return
    const balance = balances.find(b => b.id === user.user?.id)
    setCurrentBalance(balance)
  }, [user, balances])

  useEffect(() => {
    setTotalPaid(0)
    setTotalShare(0)

    transactions.forEach((transaction) => {
      const usersIds = transaction.users!.map((u) => u.id)
      if (usersIds.includes(user.user!.id)) {
        setTotalPaid((oldValue) => oldValue + transaction.amount / transaction.users!.length)
      }

      if (transaction.paid_by === user.user!.id) {
        setTotalShare((oldValue) => oldValue + transaction.amount)
      }
    })
  }, [transactions])


  return (
    <div className="flex content-end flex-col text-slate-400">
      <Link to='/projects' className="absolute top-4 left-3">
        <ArrowLeftIcon className="w-5 font-bold"  />
      </Link>

      <div className="absolute top-4 right-3" onClick={setIsOpen}>
        <Cog8ToothIcon className="w-5" />
      </div>

      <div className=" h-full items-end flex flex-row justify-between">
        <div className="flex items-center justify-between w-full px-3 pb-3">
          <div>
            <h1 className="text-2xl font-bold text-slate-100">{ project.title }</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-grey-500 border border-grey-400 shadow shadow-grey-700 m-4 rounded-md px-3 py-2">
        <div className="flex flex-col text-center p-4 border-b gap-1 border-grey-400">
          <span className="text-xs">Total des dépenses</span>
          <span className="text-xl text-gray-100">{ expense.toFixed(2) }€</span>
          { currentBalance && parseFloat(currentBalance.amount) > 0 ? (
            <span className="text-xs">On vous doit <span className="text-green-200">{currentBalance.amount}€</span> au total</span>
          ) : (
            <div>Vous devez de l'argent</div>
          )}

        </div>
        <div className="flex items-center divide-x mt-4 divide-grey-400">
          <div className="flex flex-col gap-2 w-1/2 text-center p-4">
            <span className="text-xs">Total que vous avez payé</span>
            <span className="text-gray-100 text-xl">{totalPaid.toFixed(2)}€</span>
          </div>
          <div className="flex flex-col gap-2 w-1/2 p-4 text-center">
            <span className="text-xs">Total que vous avez partagé</span>
            <span className="text-gray-100 text-xl">{totalShare.toFixed(2)}€</span>
          </div>
        </div>
      </div>

      <div>
        <nav className="w-full px-3 " aria-label="Tabs">
          <div className="bg-grey-600 rounded-xl border border-grey-400 max-w-md w-full p-1  sm:px-0 flex items-center text-center">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href(project.id)}
                className={classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  tab.current
                    ? 'bg-white text-grey-800 shadow'
                    : 'text-gray-600 hover:bg-grey-200 hover:text-white'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </div>

        </nav>
      </div>
    </div>
  )
}
