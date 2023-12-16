import React from 'react'
import { NavbarBeranda } from '../components/NavbarBeranda'
import { Banner } from '../components/Banner'
import { KategoriBelajar } from '../components/KategoriBelajar'
import { KursusPopuler } from '../components/KursusPopuler'
import { Search } from '../components/Search'

export const BerandaNoLogin = () => {
  return (
    <div className='flex flex-col'>
        <NavbarBeranda/>
        <Search/>
        <Banner/>
        <div>
        <h1 className="bg-[#EBF3FC] px-4 font-semibold text-md text-xl  laptop:hidden ">
          Kategori
        </h1>
        <div className=' flex overflow-x-auto laptop:flex-wrap'>
        <KategoriBelajar/>
        </div>
        </div>
        <KursusPopuler/>
    </div>
  )
}
