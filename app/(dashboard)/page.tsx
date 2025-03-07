import Header from "@/components/Header";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from "../../components/ui/card"
import { getStatsData } from "../actions/form";
import { ReactNode, Suspense ,  } from "react";
import { FaEye } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import { FaWpforms } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";

export default async  function Page() {
  return (
    <div className="pt-4">
      <Suspense fallback = {<StatsData loading = {true}></StatsData>}>
        <StatsCardWrapper></StatsCardWrapper>
        </Suspense>
    </div>
   
    
  );
}


async function StatsCardWrapper(){
  const stats = await getStatsData();
  return <StatsData loading={false} data = {stats}></StatsData>
}

interface StatsCardProps{
  data ? :Awaited< ReturnType<typeof getStatsData>>
  loading:boolean
}
 function StatsData({loading , data}:StatsCardProps){

  return (
    <div className="w-full gap-4  grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 mx-[20px] ">
      <StatsCard 
      title={"Total Visits"}
      helperText="total visits accross all forms "
      value={data?.visited as number}
      className="font-sans text-2xl w-[350px] shadow-lg shadow-blue-600 "
      loading = {loading}
      icon = {<FaEye className="text-blue-600"></FaEye>}
       ></StatsCard>
       <StatsCard 
      title={"Total Submissions"}
      helperText="total submissions accross all forms  "
      value={data?.submissions as number}
      className="font-sans text-2xl w-[350px] shadow-lg shadow-amber-400 "
      loading = {loading}
      icon = {<FaWpforms className="text-amber-400"></FaWpforms>}
       ></StatsCard>
       <StatsCard 
      title={"Submission Percentage"}
      helperText="percentage of all forms submitted  "
      value={data?.submissionRate as number}
      className="font-sans text-2xl w-[350px] shadow-lg shadow-green-500 "
      loading = {loading}
      icon = {<FaPercentage className="text-green-500"></FaPercentage>}
       ></StatsCard>


    </div>
  )
 }

 function StatsCard({title , helperText , value , className , loading , icon}:{
  title:string , 
  helperText:string , 
  value: number , 
  className : string , 
  loading : boolean , 
  icon : ReactNode
 }){

  return (
    <Card className={className}>
      <CardHeader>
      <CardTitle>{title}</CardTitle>
      {icon}
      </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">
      {loading && <Skeleton className="h-6 w-full" />}

          {!loading && value}
      </div>
      <div className="text-gray-400 text-sm mt-[5px]">
        {loading && <Skeleton className="h-6 w-full"></Skeleton>}
        {!loading && helperText}
      </div>
    </CardContent>
  </Card>

  )
 
 }
