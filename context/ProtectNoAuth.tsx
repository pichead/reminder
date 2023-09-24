"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'

const ProtectedAuth = ({ children }:any) => {
  const { user }:any = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [router, user])

  return <>{!user ? children : null}</>
}

export default ProtectedAuth