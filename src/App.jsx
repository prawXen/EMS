import React, { useEffect, useState, useContext} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const { authData, refreshUserData } = useContext(AuthContext)


  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
  
  useEffect(()=>{
      if(loggedInUser){
        const userData = loggedInUser
        setUser(userData.role)
      }
  },[])
  const loggedInUserData = authData && loggedInUser?.role === 'employee'
  ? authData.employees.find(e => e.email === loggedInUser.data.email)
  : authData?.admin?.find(a => a.email === loggedInUser?.data.email)
  
  
  const handleLogin =(email,password)=>{
    if(authData){
      const admin = authData.admin.find(e=>email == e.email && password == e.password)
      if(admin){
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))
        return;
      }
      
      const employee = authData.employees.find(e=>email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))  
        
        return;
      }
    } 
    alert('Invalid creds')
  }

  const logOut=()=>{
    localStorage.removeItem('loggedInUser')
    setUser(null)
    refreshUserData()
  }
  
  return (
    <>  
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user=='admin'? <AdminDashboard logOut={logOut} data={loggedInUserData} /> : <EmployeeDashboard logOut={logOut} data={loggedInUserData} />}
    </>
  )
}

export default App