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

export default function nav() {
  return (
    <div className='bg-background w-full h-[100px] px-8 flex flex-row items-center justify-between shadow-md z-20'>
      <div className='flex flex-row items-center gap-2'>
        <img src={logo} alt="" width={30} height={30} />
        <h1 className='font-lex font-bold text-[30px] '>LAUTECH PORTAL</h1>
      </div>




      <div className='flex flex-row items-center gap-4'>
        <Bell className='w-[40px] h-[40px] '/>
        <Settings className='w-[40px] h-[40px] '/>
        <Dialog>
            <DialogTrigger>
                 <CircleUserRound className='w-[75px] h-[75px] cursor-pointer  '/>
            </DialogTrigger>
            <DialogContent className='w-[400px] h-[300px]'>
              <DialogHeader>
                <DialogTitle>User Profile</DialogTitle>
                <DialogDescription>
                  This is where user profile information will be displayed.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
        </Dialog>
       
      </div>


    </div>
  )
}
