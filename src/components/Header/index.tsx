import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import {
  HeaderContainer,
  HeaderContent,
  HeaderTransactionButton,
} from './styles'
import logoSVG from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSVG} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderTransactionButton>Nova Transação</HeaderTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
