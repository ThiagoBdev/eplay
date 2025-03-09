import { colors } from '../../styles'
import { PacmanLoader } from 'react-spinners'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={colors.white} />
  </Container>
)

export default Loader
