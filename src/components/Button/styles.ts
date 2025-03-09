import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button<{
  $variant: 'primary' | 'secondary'
}>`
  border: 2px solid
    ${(props) => (props.$variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.$variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
