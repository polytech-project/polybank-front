import {useSelector} from 'react-redux'
// eslint-disable-next-line @nx/enforce-module-boundaries
import {getUserState} from '@polybank/domains/users'
import {classNames} from '@polybank/utils'
import {useEffect} from "react";

export interface BalanceItemProps {
  username: string
  balance: number
  max: number
  userId: string
}

function calculatePercentage(partialValue: number, totalValue: number): number {
  return (partialValue / totalValue) * 100;
}

export function BalanceItem({ balance, username, max, userId }: BalanceItemProps) {
  const barColorClass = balance === 0 ? 'bg-none' : balance < 0 ? 'bg-red-600' : 'bg-green-600'
  const { user } = useSelector(getUserState)

  useEffect(() => {
    const t = calculatePercentage(balance, Math.abs(max))
    console.log(t)
  }, [balance]);

  return (
    <div className="grid grid-cols-2 items-center py-0.5">
      <div
        className={classNames(
          'px-3 py-1',
          balance < 0 ? 'text-left order-1' : 'text-right order-0'
        )}
      >
        <span className="text-sm text-gray-300">
          { username }
          { user && user.id === userId && (
            <span> (moi)</span>
          )}
        </span>
      </div>

      <div
        className={classNames(
          'flex w-full',
          balance < 0 ? 'justify-end' : 'justify-start'
        )}
      >
        <div
          className={classNames(
            barColorClass,
            'rounded-md px-1 py-1'
          )}
          style={{
            width: `${Math.abs(calculatePercentage(balance, Math.abs(max))).toFixed(0)}%`
          }}
        >
          <span className="text-xs">{ balance.toFixed(2) }€</span>
        </div>

      </div>
    </div>
  )
}
