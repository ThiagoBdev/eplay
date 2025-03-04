import { Imagem, Preços, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-man: Miles Morales PS4 & PS5</Titulo>
        <Preços>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Preços>
      </div>
      <Button
        variant="primary"
        type="link"
        to="/produtos"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
