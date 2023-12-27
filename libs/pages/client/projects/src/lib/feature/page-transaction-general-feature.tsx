import {useParams} from 'react-router'
import {PageTransactionGeneral} from '../ui/page-transaction-general'
import {useFetchTransaction} from '@polybank/domains/projects'
import {useState} from "react";
import {useSelector} from "react-redux";
import {getUserState} from "@polybank/domains/users";

export function PageTransactionGeneralFeature () {
  const { projectId = '', transactionId = '' } = useParams()

  const { data: transaction } = useFetchTransaction(projectId, transactionId)
  const { user } = useSelector(getUserState)

  return (
    <div>
      { transaction &&
        <div>
          <PageTransactionGeneral
            transaction={transaction}
            user={user!}
          />
        </div>
      }
    </div>
  )
}
