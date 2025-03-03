import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" alt="capadojogo" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem iDescricaosum dolor sit amet consectetur adipisicing elit. Facere
      quae ea esse recusandae natus a, ex sed totam. Ipsum iure rerum maxime
      sapiente explicabo. Suscipit dignissimos nam ab laudantium numquam.
    </Descricao>
  </Card>
)

export default Product
