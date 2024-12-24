import { useHttp } from 'hooks/UseHttp'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
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
const [searchParams,setSearchParams]=useSearchParams()
const name= searchParams.get('name')?? ''
const handleChangeParams= e=>{
    const value = e.target.value
setSearchParams(value ? {name: value} : {})
}
const getFilteredData= ()=>{
    return users?.filter(user=>user.firstName.toLowerCase().includes(name.toLowerCase())||
    user.lastName.toLowerCase().includes(name.toLowerCase()))
}
  return (
    <div>
        <input value={name} onChange={handleChangeParams}  className='border border-red-500 px-4 py-2'/>

        {name==='' ? null : <h2>Filter name: {name}</h2>}
        
        <ul className='list-disc'>
            {getFilteredData()?.map(user=>(
                <li key={user.id} className='cursor-pointer hover:text-blue-500'>
                    <Link state={{ from: location}} to={user.id.toString()}>{user.lastName} {user.firstName}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users