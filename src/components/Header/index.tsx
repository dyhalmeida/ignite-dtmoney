import { HeaderContainer, HeaderContent, HeaderTransactionButton } from "./styles";
import logoSVG from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoSVG} alt="" />
                <HeaderTransactionButton>Nova Transação</HeaderTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}