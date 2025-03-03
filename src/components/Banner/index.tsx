import { Imagem, Preços, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Marvel&apos;s Spider-man: Miles Morales PS4 & PS5</Titulo>
      <Preços>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Preços>
    </div>
  </Imagem>
)

export default Banner
