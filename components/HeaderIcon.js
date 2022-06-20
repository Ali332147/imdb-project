import React from 'react'

export default function HeaderIcon({Icon,title}) {
  return (
    <div>
      <Icon className="h-8 ml-2  text-gray-500"></Icon>
      <p>{title}</p>
    </div>
  )
}
