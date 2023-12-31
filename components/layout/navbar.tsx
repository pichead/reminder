"use client"

import React from 'react'
import Link from 'next/link'
import { authSignOut } from '@/firebase/auth'

function Navbar() {

    const clickSignOut = async () => {
        const signOut = await authSignOut()
        if(signOut){
            location.reload()
        }
    }

    return (
        <React.Fragment>
            <div className='py-4 text-white bg-gray-800 px-3'>
                <div className='d-flex justify-content-between w-75 mx-auto'>
                    <Link href={"/"}>
                    <h4 className='text-white'>Remind ME!</h4>

                    </Link>
                    <button className='btn btn-sm btn-danger' onClick={clickSignOut}>Sign Out</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar