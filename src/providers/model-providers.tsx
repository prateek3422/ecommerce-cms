'use client'
import StoreModal from '@/components/modals/storeModal'
import React, { useEffect, useState } from 'react'

const ModelProvider = () => {
    const [Mounted, isMounted] = useState(false)

    useEffect(() =>{
        isMounted(true)
    },[])

    if(!Mounted) return null    

  return (
    <div>
        <StoreModal/>
    </div>
  )
}

export default ModelProvider