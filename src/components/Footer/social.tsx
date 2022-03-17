import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { SmallIcons } from "./styles";

export default function SocialFollow() {
  return (
    <SmallIcons>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x"  />
      </a>
      <a href="https://www.facebook.com/luzia.gabrielaabreu" className="Facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x"  />
      </a>
      <a href="https://github.com/Luzia-Silva/" className="Github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.instagram.com/luziabreu_/?hl=pt-br" className="Instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </SmallIcons>
  );
}