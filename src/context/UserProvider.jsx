import React, { createContext, useState } from 'react'

export const UserContext= createContext()

export const UserProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [isLoggedIn, setIsLoggedIn]=useState(true)
    const login =()=>{
       setIsLoggedIn(true)
    }
    const logout =()=>{
        setIsLoggedIn(false)
     }

    const register = data=>{
        setUser(data)
    }
    const contextValue= {
        user, login, register, isLoggedIn, logout
    }
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
