"use client"

import React from 'react'
import { authSignOut } from '@/firebase/auth'

function Navbar() {

    const clickSignOut = async () => {
        const signOut = await authSignOut()
        console.log(signOut)
    }

    return (
        <React.Fragment>
            <div className='py-4 text-white bg-gray-800 px-3'>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-sm btn-danger' onClick={clickSignOut}>Sign Out</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar