import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TeacherDashboard = () => {

  const extractToken = () => {
    return localStorage.getItem("token")
  }
	const [user, setUser] = useState('')
	const [id, setId] = useState('')
const naviGate = useNavigate()
 
  useEffect(() => {
    if (extractToken()) {
      const decode = jwtDecode(localStorage.getItem("token"))

      setId(decode?.id)
      axios(`http://localhost:4000/user/${decode?.id}/teacher`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then((res) => {
        console.log(res);
        setUser(res?.data)
      }).catch((err) => {
        console.log(err);
      })

    }
    else{
      naviGate('/teacherlogin')
    }
  }, [])
  const logout = () => {
    localStorage.removeItem("token");
  
      naviGate("/teacherlogin");
    };

  return (
    <>


{/* Frontend */}

<div className='w-full min-h-screen h-full bg-orange-400'>

<h1 className='text-2xl text-center font-semibold pt-5'>Teacher Dashboard</h1>
<div className='text-white flex flex-col gap-y-4 pl-4'>
  <div>

  <p className='flex items-center text-xl'>Name: {user?.name}</p>
  <p className='flex items-center text-xl'>Email: {user?.email}</p>
  </div>
  <div className=''>

  <button type="button" onClick={logout} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 w-fit font-medium rounded-lg text-sm px-5 py-2 ">Logout</button>
  </div>
</div>
</div>
    </>
  )
}

export default TeacherDashboard