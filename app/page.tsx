
import Addcard from '@/components/element/addcard'
import Carditems from '@/components/element/card'
import Navbar from '@/components/layout/navbar'
import ProtectedAuth from '@/context/ProtectAuth'
import React from 'react'

function Home() {
  return (
    <React.Fragment>
      <ProtectedAuth>
        <Navbar />
        <div className='p-3 p-md-5'>
          <div className='my-2 d-flex justify-end'>
            <Addcard/>
          </div>
          <div className='row'>
            <div className='col-md-2'>
              <Carditems/>
            </div>
          </div>
        </div>
      </ProtectedAuth>
    </React.Fragment>
  )
}

export default Home