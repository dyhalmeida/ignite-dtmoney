import { createContext, ReactNode, useEffect, useState } from "react"
import { ITransaction } from "../../interfaces/transaction.interface"

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
      const url = new URL('http://localhost:3333/transactions')
      if (query) url.searchParams.append('q', query)
      const response = await fetch(url)
      const data = await response.json()

      setTransactions(data)
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