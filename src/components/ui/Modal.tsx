import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog'
import { DialogDescription, DialogTrigger } from '@radix-ui/react-dialog'

interface ModalProps {
    title:string
    description:string
    isOpen:boolean
    onClose:()=>void
    children:React.ReactNode
}

const Modal = ({
    title,
    description,
    isOpen,
    onClose,
    children
}:ModalProps) => {
const isChange = (open:boolean) =>{
    if(!open){
        onClose()
    }
}

  return (
    <Dialog open={isOpen}  onOpenChange={isChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div>
            {children}
            </div>
            
        </DialogContent>
   
    </Dialog>
    
  )
}

export default Modal