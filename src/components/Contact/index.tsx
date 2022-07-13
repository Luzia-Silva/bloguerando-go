import {ContactForm, InputForms, ButtonForms, Error} from './styles';
import React , {useCallback , useState} from 'react';
import {IoAlertCircleOutline } from 'react-icons/io5'


const Contact = () =>{
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [isFocused, setIsFocused] = useState(false);

  function handleClick(){
    if(name == undefined || email == undefined)
        setIsFocused(true)
    else
      window.location.href = "https://api.whatsapp.com/send?phone=5511999480735&text=" + name + " %2C+" + email
  }
  return(
    <ContactForm >
            <InputForms
              type="text"
              placeholder='Nome'
              value={name}
              onChange={(e)=> setName(e.target.value)}
              isFocused={isFocused}
               />{isFocused &&
               <Error title="Informe o seu email">
                  <IoAlertCircleOutline color="#ff0000" size={14} />
                  <span>Informe o seu nome</span>
              </Error>}
            <InputForms
              className='message'
              type="text"
              placeholder='Messagem'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              isFocused={isFocused}/>{isFocused &&
              <Error title="Informe o seu email">
                <IoAlertCircleOutline color="#ff0000" size={14} />
                <span>Informe uma mensagem</span>
              </Error>}
             <ButtonForms onClick={handleClick} type='submit' disabled={false}>
               Enviar
             </ButtonForms>
    </ContactForm>
  )
}
export default Contact;

