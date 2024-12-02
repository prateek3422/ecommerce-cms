import React from 'react'
import * as z from "zod"
import { zodResolver } from './../../../node_modules/@hookform/resolvers/zod/src/zod';
import { Model } from '../ui/model'
import { useStoreModel } from '@/store/use-store-model'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object( {
    name:z.string().min(1)

})
export default function StoreModel() {

    const form  = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log(values)
    }
const storeModel = useStoreModel()
  return (
    <Model descritpion='Add a new store to manage product and category' title='Creare Store'
    isOpen={storeModel.isOpen}
    onClose={storeModel.onClose}
    >
        <Form{...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="name" render={({field}) => (
                    <FormItem>
                        <FormLabel>
                            Name
                        </FormLabel>
                        <FormControl>
                            <Input placeholder='E-commerce' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}/>
                <div className='pt-6 space-x-2 flex items-center justify-end'>
                    <Button
                    variant="outline"
                    onClick={storeModel.onClose}
                    >
                        Cencel
                    </Button>
                    <Button type="submit">Contniue</Button>
                </div>
            </form>
        </Form>
    </Model>
  )
}
