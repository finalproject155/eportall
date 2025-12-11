import React from 'react'
import { Bell } from 'lucide-react';
import { Settings } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,  
} from "@/components/ui/dialog"
import logo from "@/asset/logo.png"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatar from '@/asset/avatar.png';
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Nav() {
  return (

    <div className=' bg-background w-full h-full flex flex-row items-center justify-between px-4 py-10 shadow z-20'>

      <div className='flex flex-row items-center gap-2'>
        <Image src={logo} alt="" width={60} height={60} />
        <h1 className='font-lex text-primary font-bold text-[30px] '>LAUTECH PORTAL</h1>
      </div>




      <div className='flex flex-row items-center gap-4 '>
         <SidebarTrigger className='w-[40px] h-[40px] border-[3px] '/>
        <Bell className='w-[40px] h-[40px] '/>
        <Dialog>
            <DialogTrigger>
                 <CircleUserRound className='w-[40px] h-[40px] text-primary cursor-pointer '/>
            </DialogTrigger>
            <DialogContent className='w-[400px] h-[300px]'>
              <DialogHeader>
                <DialogTitle>User Profile</DialogTitle>
                <DialogDescription>
                
                    <Avatar className='py-3'>
                        <AvatarImage src={avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
               

                 <div>
                  <div>
                      <ul className='grid grid-cols-2 py-3 space-y-3'>
                        <li>Name:<br />Akinrinde Joel</li>
                         <li>Matric Number:<br />2021000010</li>
                          <li>Level:<br />100 Level</li>
                    </ul>
                  </div>

                    
                 </div>

                 <div>
                    <Button className='mt-4 w-full'>Logout</Button>
                 </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
        </Dialog>
       
      </div>


    </div>
  )
}
