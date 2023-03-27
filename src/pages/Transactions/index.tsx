import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/Summary";
import { useTransactions } from "../../hooks/useTransactions";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {

   const { transactions } = useTransactions()

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