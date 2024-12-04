'use client'
import Modal from '@/components/ui/Modal'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const SetupPage
 = () => {
  return (
    <>
    {/* <div>
        <Modal title='test' description='test desc' isOpen onClose={() => {}}>
            Children
        </Modal>
    </div> */}
    
    <UserButton  afterSignOutUrl='/'/>
    </>
      )
}

export default SetupPage
