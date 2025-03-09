import { Link } from 'react-router-dom'
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
                <Link to="/categories">Categorias</Link>
              </LinksItems>
              <LinksItems>
                <a>Novidades</a>
              </LinksItems>
              <LinksItems>
                <a>Promoções</a>
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
            <Link to="/categories">Categorias</Link>
          </LinksItems>
          <LinksItems>
            <a>Novidades</a>
          </LinksItems>
          <LinksItems>
            <a>Promoções</a>
          </LinksItems>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
