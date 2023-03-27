import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/Summary";
import { ITransaction } from "../../interfaces/transaction.interface";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {

    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/transactions')
            .then(response  => response.json())
            .then(data => setTransactions(data))
    }, [])

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
              <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr>
                                <td>{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>
                                        {transaction.price}
                                    </PriceHighlight>
                                </td>
                                <td>
                                    {transaction.category}
                                </td>
                                <td>
                                    {transaction.createdAt}
                                </td>
                            </tr>
                        ))}
                    </tbody>
              </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}