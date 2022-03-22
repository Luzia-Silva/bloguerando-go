import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GenericMenu from '../components/GenericMenu'
import GenericProfile from '../components/GenericProfile'
import GenericAbout from '../components/GenericAbout'

const Home: React.FC = () => {
  return (

      <>

        <GenericMenu/>
        <GenericProfile/>
        <GenericAbout/>
      <Footer/>
      </>

  )
}
export default Home
{/* <main>
        <img src="../../pictureAbout.jpg" alt="About" />
      </main> */}
