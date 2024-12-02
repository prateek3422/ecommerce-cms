import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useStoreModel } from './../store/use-store-model';

export const Route = createFileRoute('/')({
  component: Home,
})


function Home() {
  const onOpen = useStoreModel((state) => state.onOpen)
  const isOpen = useStoreModel((state) => state.isOpen)
  // useEffect(() =>{
  //   if(!isOpen){
  //     onOpen();
  //   }
  // }, [isOpen, onOpen])
  
  return (
<div>
  Root 
</div>
  )
}