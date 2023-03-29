import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../context/TransactionsContext'

export const useFetchTransactions = () => {
  const fetchTransactions = useContextSelector(TransactionsContext, (contex) => contex.fetchTransactions)

  if (!fetchTransactions) {
    throw new Error(
      'useFetchTransactions must be used within an TransactionsProvider',
    )
  }

  return fetchTransactions
}
