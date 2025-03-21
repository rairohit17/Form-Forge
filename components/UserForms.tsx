import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent  } from './ui/card'
import { Form, getUserForms } from '@/app/actions/form'
import { Skeleton } from './ui/skeleton'
import AddForm from './AddForm'
import { Key } from 'lucide-react'

const UserForms =async() => {
    const forms : Form[] = await getUserForms()

  return (

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 justify-center'>
      <AddForm ></AddForm>{forms.map((individualForm : Form  , key  )=><FormCard key={key} loading = {false} form={individualForm as Form }></FormCard>)}</div>
  )
}

 export function FormCard({form , loading} : {form ?  : Form  , loading:boolean}){
    return(
        <Card className='w-[200px] lg:w-[250px] h-[150px] cursor-pointer hover:opacity-25 border-2 rounded-xl'>
            <CardHeader className='flex justify-between '>
              <div className=' flex  justify-between'>
              {loading && <Skeleton className=' w-[30%] h-[20px] mx-[10px] mt-[5px]'></Skeleton>}
              {loading && <Skeleton className=' w-[30%] h-[20px] mx-[10px] mt-[5px]'></Skeleton>}
            
            {!loading &&  <div>{(form?.name)?.toUpperCase()}</div>}
            
            {!loading && <div> {form?.published?<div className='bg-orange-300 rounded-md w-[40px]   text-white'>Published</div>:<div className='bg-red-500 rounded-md text-white w-[80px] text-center '>Draft</div>}</div>}
           
              </div>
            </CardHeader>
            <CardContent>
              {loading && <div className=''>
                <div className=' mb-[10px]'><Skeleton className='h-[20px] w-full mt-[10px]'></Skeleton></div>
                <div><Skeleton className='h-[20px] w-full mt-[10px]'></Skeleton></div>
              </div>
              }
              {!loading && <div className='text-center text-gray-400'>
                {form?.description}</div>}
            </CardContent>
        </Card>
    )

}

export default UserForms