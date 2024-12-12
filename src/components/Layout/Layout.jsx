import { Navbar } from 'components/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <main className='flex' >
            < Navbar />
            <div className='p-10'>
                <Outlet />
            </div>
        </main >
    )
}
