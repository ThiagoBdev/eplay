import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, Links, LinksItems } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Eplay" />
      <nav>
        <Links>
          <LinksItems>
            <Link to="/categories">Categorias</Link>
          </LinksItems>
          <LinksItems>
            <a href="#">Novidades</a>
          </LinksItems>
          <LinksItems>
            <a href="#">Promoções</a>
          </LinksItems>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
