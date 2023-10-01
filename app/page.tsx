"use client"
import Addcard from '@/components/element/addcard'
import Carditems from '@/components/element/card'
import Navbar from '@/components/layout/navbar'
import ProtectedAuth from '@/context/ProtectAuth'
import React, { useState, useEffect } from 'react'
import { getAllDocuments } from "@/firebase/firestore"


export default function Home() {
  const [cardData, setcardData] = useState<any>([])
  const getData = async () => {
    const get: any = await getAllDocuments()
    setcardData(get)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <React.Fragment>
      <ProtectedAuth>
        <Navbar />
        <div className='p-3 p-md-5'>
          <div className='my-2 d-flex justify-end'>
            <Addcard />
          </div>
          <div className='row'>
            {cardData?.map((d: any,i:any) => (

              <div key={i} className='col-md-2'>
                <Carditems data={d} />

              </div>
            ))
            }
          </div>
        </div>
      </ProtectedAuth>
    </React.Fragment>
  )
}

