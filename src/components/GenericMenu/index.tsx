import Footer  from '../../components/Footer'
import Navbar  from '../../components/Navbar'
import SmallMenu from './styles'

const GenericMenu = () =>{
  return(
    <>
    <SmallMenu>
      <div className='text-menu'>
          <h1>Bloguerando.com</h1>
          <h2>Seja um blogueirinhoooo!</h2>
          <p>Esse blog é para você meu leitor que curte coisas novas e surtos de uma mente feminina em colapso. Mas essa mente feminina ama você, ama suas escolhas (mesmo eu querendo dar na sua cara), ama seu cabelo, ama sua roupa e ama você todinho. Você nem me conhece, como pode me amar? Eu amo você só pelo fato de você estar aqui e me dar a oportunidade de nos conhecermos. Sim, eu amo você! Seja muito bem-vindo aos meus mais profundos pensamentos e desabafos!</p>
      </div>
      <div className='button-menu'>
        <button><a href='#'>Começar</a></button>
      </div>
    </SmallMenu>
    </>
  )
}

export default GenericMenu;

