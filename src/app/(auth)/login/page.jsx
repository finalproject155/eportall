"use client"


import React from 'react'
import Image from 'next/image'
import lautech from '@/asset/lau.jpg'
import { Input } from '@/components/ui/input'
export default function login() {
  return (
    <div className='h-screen w-full flex flex-row '>

        <div>
            <Image src={lautech} className='h-screen '/>
        </div>

        <div className='w-full flex justify-center items-center px-10 '>

           <div className='flex flex-col w-full'>
             <h1 className='text-primary font-bold font-lex text-[30px] '>WELCOME TO <br/>LAUTECH E~PORTAL</h1>
             <p>Enter Your Matriculation Number and Password to Continue.</p>


                <form action="" className='w-full'>

                    <label htmlFor="">
                        <p className='font-lex'>Matriculation Number</p>
                        <input type="number" className='w-full' />
                    </label>

                    
                    <label htmlFor="">
                       <div className='flex flex-row justify-between items-center'>
                         <p>Password</p>
                          <a href='#'>Forgot Password?</a>
                       </div>
                        <input type="text" className='w-full' />
                    </label>

                </form>
           </div>
        </div>
      
    </div>
  )
} 
