import { Timer, Scroll } from 'phosphor-react'

import { HeaderContainer } from './styles'
import imgLogoIgnite from '../../assets/images/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={imgLogoIgnite} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
