import { Imagem, Preços, Titulo } from './styles'
import Tag from '../Tag'
import Button from '../Button'

import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Preços>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            {formataPreco(game.prices.current)}
          </Preços>
        </div>
        <Button
          variant="primary"
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
