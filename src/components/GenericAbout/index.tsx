import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faJs
} from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import SmallAbout from './styles';
const GenericAbout = () =>{
  return(
    <>
    <SmallAbout>
      <div className="card">
        <div className="text-About">
          <h1>Porque área de TI? </h1>

        </div>
        <div className='text-About'>
            <p>
              Eu adoro uma oportunidade de dar x motivos, então não de forças ao monstro IA que habita na minha alma, por favor. <br/>
              Vamos lá explicar a escolha de um curso superior de doidos e antissociais tudo em uma mesma sala. Primeiro que não nada melhor que fazer tudo em equipe, e uma equipe de TI boa e unida até o chão estremece com tanta sintonia. Segundo como não escolher uma área que o primeiro algoritmo foi desenvolvido por uma mulher? É Ada que fala, né.  <br/>
              Terceiro que não precisa ter motivos para escolher um curso, até porque ele escolhe você ou você pode fazer um teste online para ver qual profissão nosso pai Google recomenda.
              Quarto que a vida é uma só então faça o que você curte e ganhe dinheiro, porque os boletos brotam depois dos 20 anos.
            </p>
        </div>
        <div className='imageAbout'>
            <img src="../../assets/mat.jpg" />
        </div>
      </div>
    </SmallAbout>
    </>
  )
}

export default GenericAbout;

