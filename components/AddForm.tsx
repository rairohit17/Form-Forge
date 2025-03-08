"use client"
import React, { useState  } from 'react'
import {  Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger, } from './ui/dialog'
import { GrFormAdd } from "react-icons/gr";
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { IoAdd } from "react-icons/io5";
import {useForm} from "react-hook-form"
import { addFormToUser , Form } from '@/app/actions/form';
import {ClipLoader} from "react-spinners"


const AddForm = () => {
    const [loading, setLoading] = useState(false)
    // const [open , setOpen] = useState(false)
    const {register , handleSubmit  } = useForm<FormProps>()
interface FormProps{
    name:string
    description:string
}
    async function handlFormSubmit(values:FormProps){
        const formData:Form = { 
            name:values.name , 
            description :values.description,
            visited:500, 
            submissions:250,

    }
       try {
        const newform = await  addFormToUser(formData)
        console.log("form added successfully")
        setLoading(false)
        
       } catch (error: any ) {
        console.log(error.message)
        
       }

    }
  return (
    <div  className='w-[200px] h-[150px] text-center border-2 border-dotted border-gray-400 hover:bg-gray-100 opacity-50 hover:opacity-80 dark:hover:bg-gray-700  rounded-lg shadow-md flex items-center justify-center cursor-pointer'>
        <Dialog  >
        <DialogTrigger className=' m-[30px] ' asChild>
            <IoAdd className='text-[30px] font-light w-full h-full '></IoAdd>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className= 'font-sans text-2xl text-center'>
                    Add Form
                </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(handlFormSubmit)}>
            <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder='give a name to your form ' className="col-span-3" {...register('name')} name='name' />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input id="username" placeholder='describe your form ' className="col-span-3" {...register('description')} name='description' />
          </div>
        </div>
        <DialogFooter>
            <Button type='submit' onClick={()=>setLoading(true)} className='w-full cursor-pointer'>
                {loading && <ClipLoader size={25} className='text-md'></ClipLoader>}
                {!loading && "Submit"}
            </Button>
        </DialogFooter>

            </form>
            
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddForm