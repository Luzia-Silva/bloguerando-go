import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GenericProfile from '../../components/GenericProfile'


const Profile: React.FC = () => {
  return (
      <>
      <Navbar/>
        <GenericProfile/>
      <Footer/>
      </>
  )
}
export default Profile
