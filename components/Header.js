import React from 'react'
import { HomeIcon,UserIcon,PhoneIcon,InformationCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'

export default function Header() {
  return (
    <div className='flex justify-between'>

    <div className='flex space-x-4'>
    <HeaderIcon Icon={HomeIcon} title="Home" />
    <HeaderIcon Icon={UserIcon} title="Account" />
    <HeaderIcon Icon={InformationCircleIcon} title="About" />
    <HeaderIcon Icon={PhoneIcon} title="Contact" />
    <div>

   
    </div>
      
    </div>
    <Image width={100}
    height={100}
     src='https://th.bing.com/th/id/OIP.znUllnJHDmR5cGknd71yiwAAAA?pid=ImgDet&w=214&h=214&c=7&dpr=2.25' alt=''></Image>
    </div>
  )
}
