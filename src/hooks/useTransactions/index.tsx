import { useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext'

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  if (!context) {
    throw new Error(
      'useTransactions must be used within an TransactionsProvider',
    )
  }

  return context
}
