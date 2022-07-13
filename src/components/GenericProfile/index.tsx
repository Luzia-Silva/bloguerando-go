import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faNode,
  faCss3,
  faReact,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import SmallProfile from './styles';


const GenericProfile = () =>{
  return (
    <>
    <SmallProfile id={'Profile'}>
        <div className='imageProfile'>
          <img src="../../pictureAbout.jpg"  alt='img'/>
        </div>
        <div id='informationProfile'>
             <h1>Luzia Gabriela Abreu da Silva Santos</h1>
             <ul className='informationAcademic'>
                <li><b>Email:</b> aluziagabriela@gmail.com</li>
                <li><b>GitHub:</b> Luzia-Silva</li>
                <li><b>Phone:</b> +55 1199948-0735</li>
             </ul>
             <ul className='informationObject'>
                <b>Formação Acadêmica:</b>
                <li> Ciência de Dados - Fatec Santana de Parnaíba - 4º Semestre</li>
                <li> Desenvolvimento de Sistemas - ETEC Dr. Emílio Hernandez Aguilar - Técnico</li>
              </ul>
             <ul className='informationCourse'>
                {/* <b>Linguagens de Programação:</b> */}
                <i><FontAwesomeIcon icon={faHtml5} /></i>
                <i><FontAwesomeIcon icon={faCss3}  /></i>
                <i><FontAwesomeIcon icon={faReact}  /></i>
                <i><FontAwesomeIcon icon={faJs}  /></i>
                <i><FontAwesomeIcon icon={faNode}  /></i>
                <i><FontAwesomeIcon icon={faPython}  /></i>
             </ul>
        </div>
      </SmallProfile>
    </>
  )
}
export default GenericProfile;
