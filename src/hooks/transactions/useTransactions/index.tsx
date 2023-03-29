import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../context/TransactionsContext'

export const useTransactions = () => {
  const transactions = useContextSelector(TransactionsContext, (contex) => contex.transactions)

  if (!transactions) {
    throw new Error(
      'useTransactions must be used within an TransactionsProvider',
    )
  }

  return transactions
}
