import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Signup from '../assets/signup.json'
import PageLoader from '../assets/spinner.json'
import Lottie from 'lottie-react'
import Spinner from './Spinner'
import axios from 'axios'
const StudentRegister = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [buttonLoading, setButtonLoading] = useState(false)
	const [loader, setLoader] = useState(false)
	const naviGate = useNavigate()



	const handleSubmit = (e) => {
		
		setLoader(true)
		e.preventDefault();
		axios('http://localhost:4000/auth/register', {
			method: "POST",
			data: {
				name: name,
				email: email,
				password: password,

			},

		},

			{
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			}).then((res) => {
				console.log(res);
				if (res?.data?.success) {
					naviGate('/studentlogin')
					alert(res?.data?.message) 
					
				}
				if(!res?.data?.success){
					alert(res?.data?.message)
				}
				console.log(name, password, email);
				setLoader(false)
			}).catch((err) => {
				console.log(err);
				setLoader(false)
				alert(err?.message)
			})
	}



	return (
		<>
			{loader && (
				<Lottie
					animationData={PageLoader}
					className={
						"fixed z-[500] w-full top-0 h-screen  bg-black bg-opacity-20 text-center"
					}
				/>
			)}


			<div className='md:flex'>
				<div className='w-1/2 flex flex-col justify-center items-center bg-blue-600 '>
					<Link to={'/'} className='fixed top-3 left-2'>
						Home
					</Link>
					<Lottie className='w-[80%] h-[80%] md:block hidden' animationData={Signup} />
				</div>

				<div className="flex items-center justify-center h-screen md:shadow-xl px-2 md:w-1/2 bg-blue-600 md:bg-white">
					<div className="p-2 max-w-md w-full bg-white rounded-lg shadow-md md:shadow-none">
						<h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
							Student	Sign up
						</h2>

						<form  onSubmit={handleSubmit}>




							<div className="mb-2">
								<label
									htmlFor="firstname"
									className="block text-gray-700 text-sm font-medium mb-1"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your Username"
									value={name}
									onChange={(e) => {
										setName(e.target.value)
									}}
									required
								/>
							</div>






							{/* <div className="mb-2">
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-medium mb-1"
								>
									Profile Pitcure
								</label>
								<input
									type="file"
									id="profile"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your email"

									required
								/>
							</div> */}

							<div className="mb-2">
								<label
									htmlFor="email"
									className="block text-gray-700 text-sm font-medium mb-1"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value)
									}}
									required
								/>
							</div>
							<div className="mb-2">
								<label
									htmlFor="password"
									className="block text-gray-700 text-sm font-medium mb-1"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									placeholder="Enter your password"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value)
									}}
									required
								/>
							</div>
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition-colors duration-300"
							>
								Sign up
							</button>
						</form>
						<p className="text-gray-600 text-sm mt-4">
							Already have an account?{" "}
							<Link
								to="/studentlogin"
								className="text-blue-500 font-semibold hover:underline"
							>
								Login
							</Link>
						</p>

					</div>
				</div>
			</div>

		</>
	)
}

export default StudentRegister