import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game, isLoading } = useGetGameQuery(id!)


  if (!id) {
    return <p>Jogo não encontrado</p>
  }

  if (isLoading) {
    return <h3>Carregando...</h3>
  }

  if (!game) {
    return <p>Jogo não encontrado</p>
  }
  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br /> <b>Desenvolvedor:</b>
          {game.details.developer}
          <br /> <b>Editora:</b>
          {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name="jogo teste"
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
