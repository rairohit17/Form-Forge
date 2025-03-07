"use server"
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

class UserNotFoundErr extends Error{};

 export async function getStatsData(){
    const user = await currentUser();
    if (!user) throw new UserNotFoundErr()
    
    const stats = await  prisma.form.aggregate({
        where:{
            userId:user.id
        }, 
        _sum:{
            submissions:true,
            visited:true
        }
    })
    const submissions = stats._sum.submissions || 0
    const visited = stats._sum.visited || 0
    const submissionRate = visited==0?0:((submissions/visited)*100)

    return {  visited , submissions , submissionRate}
    

}


