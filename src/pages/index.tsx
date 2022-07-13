import React from 'react'
import Footer from '../components/Footer'
import GenericMenu from '../components/GenericMenu'
import GenericProfile from '../components/GenericProfile'
import GenericAbout from '../components/GenericAbout'
import GenericQuiz from '../components/GenericQuiz'
import Contact from "../components/Contact";

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

