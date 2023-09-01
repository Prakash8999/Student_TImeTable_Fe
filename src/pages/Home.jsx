import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/COLLEGE.jpeg'

const Home = () => {
	//  Template Code
	return (
		<>
			<div className='  w-full h-screen overflow-hidden ' style={{backgroundImage:`url(${image})`}}>
				<nav class="navbar" className='py-4 bg-blue-500'>
				
					<ul className='flex justify-center items-center gap-x-12 text-xl '>
						<li><a href="#" >Vasanatdada Patil College OF Engineering</a></li>
						<li><a href="https://pvppcoe.ac.in/" target='_blank'>Home</a></li>
						<li><a href="https://pvppcoe.ac.in/contact-us/" target='_blank'>Contact</a></li>
						<li><a href="https://pvppcoe.ac.in/#" target='_blank'>About Us</a></li>
					</ul>
				</nav>
<div className='flex justify-center items-center h-full gap-x-20'>


				<Link to={'/studentlogin'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Student Login</Link>
				<Link to={'/teacherlogin'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Teacher Login</Link>
</div>
			</div>
		</>
	)
}

export default Home
