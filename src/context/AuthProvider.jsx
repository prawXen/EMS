import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [authData, setAuthData] = useState(null)
    const refreshUserData = () => {
      const { employees, admin } = getLocalStorage();
      setAuthData({ employees, admin });
    };
    useEffect(() => {
      if (!localStorage.getItem('employees')) {
            setLocalStorage(); 
          }
      refreshUserData();
    },[])
    
  return (
    <div>
        <AuthContext.Provider value={{authData,refreshUserData}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider