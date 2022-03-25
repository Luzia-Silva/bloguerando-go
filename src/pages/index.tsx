import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GenericMenu from '../components/GenericMenu'
import GenericProfile from '../components/GenericProfile'
import GenericAbout from '../components/GenericAbout'
import GenericQuiz from '../components/GenericQuiz'

const Home: React.FC = () => {
  return (
       <>
        <GenericMenu/>
        <GenericProfile/>
        <GenericAbout/>
        <GenericQuiz/>
      <Footer/>
      </>

  )
}
export default Home
{/* <main>
        <img src="../../pictureAbout.jpg" alt="About" />
      </main> */}
