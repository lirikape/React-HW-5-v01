import { useHttp } from 'hooks/UseHttp'
import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { fetchUsersById } from 'services/api'

const DetailUser = () => {
    const {userId}= useParams()
    const location =useLocation()
    const goBack= useRef(location.state?.from || '/')
    console.log(goBack);
   // ми можемо замість звичайного юзефект використати власний хук для використання його! перейди на useHttp
    // const [user,setUser]=useState(null)
    // useEffect(()=>{
    //     fetchUsersById(userId).then(data=>{setUser(data)})
       
    // },[ userId])
    //це власний хук
    const [user,setUser]=useHttp(fetchUsersById, userId)

    if (!user) {
        return <p>Loading user data...</p>; // Відображення стану завантаження
    }

  return (
    <div>
        <Link to={goBack.current}>Go back</Link>
        <img src={user.image} alt={user.firstName} />
        <p>Name: {user.firstName} {user.laststName}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>

        <div className='flex'>
        <NavLink
                to='about'
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold py-2 px-4'
                        : 'text-gray-700 py-2 px-4'
                }
            >
                About
            </NavLink>
            <NavLink
                to='posts'
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold py-2 px-4'
                        : 'text-gray-700 py-2 px-4'
                }
            >
                Posts
            </NavLink>
        </div>
        <Outlet/>

    </div>
  )
}

export default DetailUser