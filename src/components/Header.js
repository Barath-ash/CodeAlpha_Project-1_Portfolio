
import '../App.css'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header(){
    const [toogleMenu, setToogleMenu] = useState(false);
    return(
         <>


         <header className="flex  justify-between px-5 py-2 bg-primary">
            <a className="font-bold text-black text-2xl  " href="/">D Barath </a>
            <nav className="hidden md:block">
            <ul className="flex text-white text-xl font-medium hover:text-secondary">
            <li> <a className='hover:text-blue-950 duration-500' href='/'>Home</a></li>  
            <li><a className='hover:text-blue-950 duration-500' href='#about'>About</a></li>
            <li><a className='hover:text-blue-950 duration-500' href='#projects'>Projects</a></li>
            <li><a className='hover:text-blue-950 duration-500' href='#resume'>Resume</a></li>
            <li><a className='hover:text-blue-950 duration-500' href='#contact'>Contact</a></li>

            </ul>
            </nav>
            { toogleMenu && <nav className=" block  md:hidden ">
            <ul onClick={() => setToogleMenu(!toogleMenu)} className=" h-full gap-1  flex flex-col text-white mb-5 mobile-nav ">
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>

            </ul>
            </nav>}
            <button onClick={() => setToogleMenu(!toogleMenu)} className="block md:hidden"><Bars3Icon className="text-white h-5 "/> </button>
         </header>




         </>
    )
}