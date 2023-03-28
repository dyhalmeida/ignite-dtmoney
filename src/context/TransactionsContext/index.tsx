import { createContext, ReactNode, useEffect, useState } from "react"
import { ITransaction } from "../../interfaces/transaction.interface"
import { api } from "../../lib/axios"

interface ITransactionContextType {
    transactions: ITransaction[]
    fetchTransactions: (query?: string) => Promise<void>
}

interface ITransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionContextType)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {

    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const fetchTransactions = async (query?: string) => {
      const response = await api.get('transactions', {
        params: {
          q: query
        }
      })
      setTransactions(response.data)
    }

    useEffect(() => {
       fetchTransactions()
    }, [])
    
    return (
        <TransactionsContext.Provider
          value={{
            transactions,
            fetchTransactions
          }}
        >
          {children}
        </TransactionsContext.Provider>
      )
}