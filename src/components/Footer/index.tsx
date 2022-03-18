import React from "react";
import SmallFooter from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
  <SmallFooter>
     <div className="SmallPages">
        <a href="#"><li>Home</li></a>
        <a href="Profile"><li>Perfil Profissional</li></a>
        <a href="About"><li>Sobre mim</li></a>
        <a href="#"><li>Contato</li></a>
    </div>
    <div className="SmallIcons">
      <a href="https://www.youtube.com/c/jamesqquick"
        className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="1x"  />
      </a>
      <a href="https://www.facebook.com/luzia.gabrielaabreu" className="Facebook social">
        <FontAwesomeIcon icon={faFacebook} size="1x"  />
      </a>
      <a href="https://github.com/Luzia-Silva/" className="Github social">
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
      <a href="https://www.instagram.com/luziabreu_/?hl=pt-br" className="Instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
    <div className="SmallFooterCopyright">
        <p>@Copyright Bloguerando.com 2022</p>
    </div>
  </SmallFooter>
    )
}
export default Footer;
