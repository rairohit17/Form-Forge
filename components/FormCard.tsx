
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent  } from './ui/card'
import {formatDistance} from "date-fns"
import { Button } from './ui/button'
import { FaRegEdit } from "react-icons/fa";
import { Skeleton } from './ui/skeleton'
import { Form } from '@/app/actions/form';
export function FormCard({form , loading} : {form ?  : Form  , loading:boolean}){
    return(
        <Card className='w-[200px] lg:w-[250px] h-[180px] cursor-pointer  border-2 rounded-xl'>
            <CardHeader className='flex justify-between '>
              <div className=' flex  justify-between'>
              {loading && <Skeleton className=' w-[30%] h-[20px] mx-[10px] mt-[5px]'></Skeleton>}
              {loading && <Skeleton className=' w-[30%] h-[20px] mx-[10px] mt-[5px]'></Skeleton>}
            
            {!loading &&  <div>{(form?.name)?.toUpperCase()}</div>}
            
            {!loading && <div> {form?.published?<div className='bg-orange-600 text-center rounded-md w-[80px] text-sm   text-white'>Published</div>:<div className='bg-red-500 rounded-md text-sm text-white w-[80px] text-center '>Draft</div>}</div>}
           
              </div>
              <div className='flex justify-between'>
              <div className='text-sm text-gray-400 w-full' >{loading && <Skeleton className='w-[30%] h-[10px] mx-[10px]'></Skeleton>}
              {!loading && <div>{form?.createdAt && !isNaN(new Date(form.createdAt).getTime())
               ? formatDistance(new Date(form.createdAt), new Date(), { addSuffix: true })
                : "Unknown date"}</div>}</div>
                <div>
                  {form?.published && <div className='text-md text-gray-300'><span className='mr-[10px]'>{form?.visited}</span><span>{form?.submissions}</span></div>}
                </div>
             
              </div>
              
               
            </CardHeader>
            <CardContent>
              {loading && <div className=''>
                <div className=' mb-[10px]'><Skeleton className='h-[20px] w-full mt-[10px]'></Skeleton></div>
                <div><Skeleton className='h-[20px] w-full mt-[10px] '></Skeleton></div>
              </div>
              }
              {!loading && <div className='text-center text-gray-400 text-md'>
                {form?.description}</div>}
              { !loading && !form?.published &&  <Button variant={'secondary'} className='w-full mt-[10px] cursor-pointer'> Edit Form <FaRegEdit></FaRegEdit> </Button>}
            </CardContent>
        </Card>
    )

}
