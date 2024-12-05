'use client'
import Modal from '@/components/ui/Modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { UserButton } from '@clerk/nextjs'
import React, { use, useEffect } from 'react'

const SetupPage
 = () => {
const onOpen = useStoreModal((state) => state.onOpen)
const isOpen = useStoreModal((state) => state.isOpen)

useEffect(() => {
  if(!isOpen) {
    onOpen()
  }
}, [isOpen, onOpen])

  return (
    <>
    <div>
      root page
    </div>
        </>
      )
}

export default SetupPage
