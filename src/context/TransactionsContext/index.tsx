import { createContext, ReactNode, useEffect, useState } from "react"
import { ITransaction } from "../../interfaces/transaction.interface"

interface ITransactionContextType {
    transactions: ITransaction[]
}

interface ITransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionContextType)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {

    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/transactions')
            .then(response  => response.json())
            .then(data => setTransactions(data))
    }, [])
    
    return (
        <TransactionsContext.Provider
          value={{
            transactions,
          }}
        >
          {children}
        </TransactionsContext.Provider>
      )
}