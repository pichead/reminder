
import Navbar from '@/components/layout/navbar'
import ProtectedAuth from '@/context/ProtectAuth'
import React from 'react'

function Home() {
  return (
    <React.Fragment>
      <ProtectedAuth>
        <Navbar />
        <div>Home page</div>
      </ProtectedAuth>
    </React.Fragment>
  )
}

export default Home