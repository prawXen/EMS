import React, { useEffect, useState, useContext} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const { authData } = useContext(AuthContext)

  useEffect(()=>{
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
  },[])
  
  
  const handleLogin =(email,password)=>{
    if(authData){
      const admin = authData.admin.find(e=>email == e.email && password == e.password)
      if(admin){
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))
        return;
      }
      
      const employee = authData.employees.find(e=>email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))  
        return;
      }
    } 
    alert('Invalid creds')
  }

  const logOut=()=>{
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setLoggedInUserData(null)
  }
  
  return (
    <>  
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user=='admin'? <AdminDashboard logOut={logOut} data={loggedInUserData} /> : <EmployeeDashboard logOut={logOut} data={loggedInUserData} />}
    </>
  )
}

export default App