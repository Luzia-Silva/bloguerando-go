import * as React from 'react';
import SmallNavbar  from './styles';

const Navbar = () => {
    return(
      <SmallNavbar>

        <div id='Nav-Head'>
          <a href='#'>Home</a>
          <a href='Profile'>Perfil Profissional</a>
          <a href='About'>Sobre mim</a>
          <a href='#'>Contato</a>
        </div>
        <div id='Logo'>
          <a>BLOGUERANDO.COM</a>
        </div>
      </SmallNavbar>

    )
}
export default Navbar;
