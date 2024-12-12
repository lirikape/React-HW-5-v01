import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1 className='text-blue-500 text-[32px]'>404</h1>
        <p className='text-red-500 text-[24px]'>Що ти тут загубив???</p>
        <h3 className='text-blue-500 text-[18px]'>іди до  <Link to='/' className='text-blue-800'>дому</Link></h3>

    </div>
  )
}

export default NotFound