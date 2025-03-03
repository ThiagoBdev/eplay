import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import street from '../../assets/images/Street.png'
import Games from '../../models/Games'

const promocoes: Games[] = [
  {
    id: 1,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: resident
  }
]

const emBreve: Games[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo IV',
    system: 'windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'Zelda',
    system: 'switch',
    infos: ['10/06'],
    image: zelda
  },
  {
    id: 7,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'StarWars',
    system: 'windows',
    infos: ['12/09'],
    image: starWars
  },
  {
    id: 8,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'PS5',
    infos: ['28/05'],
    image: street
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
