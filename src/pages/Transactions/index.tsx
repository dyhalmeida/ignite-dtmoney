import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
              <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de Software</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 14.000,00
                                </PriceHighlight>
                            </td>
                            <td>
                                Entrada
                            </td>
                            <td>
                                26/03/2022
                            </td>
                        </tr>
                        <tr>
                            <td>Internet</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 130,00
                                </PriceHighlight>
                            </td>
                            <td>
                                Saída
                            </td>
                            <td>
                                26/03/2022
                            </td>
                        </tr>
                    </tbody>
              </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}