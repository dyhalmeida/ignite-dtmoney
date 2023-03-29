import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../context/TransactionsContext'

export const useCreateTransaction = () => {
  const createTransaction = useContextSelector(TransactionsContext, (contex) => contex.createTransaction)

  if (!createTransaction) {
    throw new Error(
      'useCreateTransaction must be used within an TransactionsProvider',
    )
  }

  return createTransaction
}
