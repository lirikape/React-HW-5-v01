import { useHttp } from 'hooks/UseHttp'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { fetchUsers } from 'services/api'

const Users = () => {
    const location =useLocation()
    console.log(location);
    // const [users, setUsers]= useState([])
    //використання власного хука замість юзефекта
    // useEffect(()=>{
    //     fetchUsers().then((data)=>setUsers(data))
    // },[])
    const [users, setUsers]= useHttp(fetchUsers)
  return (
    <div>
        <ul className='list-disc'>
            {users?.map(user=>(
                <li key={user.id} className='cursor-pointer hover:text-blue-500'>
                    <Link state={{ from: location}} to={user.id.toString()}>{user.lastName} {user.firstName}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users