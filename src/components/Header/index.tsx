import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {
  HeaderBar,
  CartButton,
  Links,
  LinksItems,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="Eplay" />
          </Link>
          <nav>
            <Links>
              <LinksItems>
                <Link title="Clique aqui para acessar a pagina de categorias" to="/categories">Categorias</Link>
              </LinksItems>
              <LinksItems>
                <HashLink title="Clique aqui para acessar a seção de em breve" to="/coming-soon">Em breve</HashLink>
              </LinksItems>
              <LinksItems>
                <HashLink title="Clique aqui para acessar a seção de promoção" to="/#on-sale">Promoções</HashLink>
              </LinksItems>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span>- produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinksItems>
            <Link title="Clique aqui para acessar a pagina de categorias" to="/categories" onClick={() => setIsMenuOpen(false)}>Categorias</Link>
          </LinksItems>
          <LinksItems>
            <HashLink title="Clique aqui para acessar a seção de em breve" to="/coming-soon" onClick={() => setIsMenuOpen(false)}>Em breve</HashLink>
          </LinksItems>
          <LinksItems>
            <HashLink title="Clique aqui para acessar a seção de promoção" to="/#on-sale" onClick={() => setIsMenuOpen(false)}>Promoções</HashLink>
          </LinksItems>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
