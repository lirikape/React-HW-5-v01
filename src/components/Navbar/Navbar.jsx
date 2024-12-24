import { UserContext } from 'context/UserProvider'
import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const {logout}= useContext(UserContext)
    return (
        <nav className='w-[300px] h-[100vh] bg-blue-200 flex flex-col'>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold py-2 px-4'
                        : 'text-gray-700 py-2 px-4'
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/about'
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold py-2 px-4'
                        : 'text-gray-700 py-2 px-4'
                }
            >
                About
            </NavLink>
            <NavLink
                to='/users'
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold py-2 px-4'
                        : 'text-gray-700 py-2 px-4'
                }
            >
                Users
            </NavLink>
            <NavLink
                to='/register'
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold py-2 px-4'
                        : 'text-gray-700 py-2 px-4'
                }
            >
                Sign Up
            </NavLink>

            <button onClick={logout} className='border border-blue-500 rounded px-4 py-2'>Exit</button>
        </nav>
    )
}
