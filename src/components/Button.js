import styled from 'styled-components'
import { colors } from '../utils/colors'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: ${({ width }) => width};
  height: 40px;
  background: ${colors.primary};
  border-radius: 40px;
  border: none;
  color: ${colors.white};
  font-size: 1em;
  font-weight: 800;
  transition: box-shadow 0.3s ease;

  ${({ theme }) => theme.media.tablet} {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
  }

  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`
export default Button
