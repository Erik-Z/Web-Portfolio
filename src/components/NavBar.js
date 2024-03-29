import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const NavBar = () => {
    return (
        <header className="bg-green-300">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-white" 
                        className="inline-flex items-center py-6 px-3 mr-4 cursive text-4xl hover:text-white tracking-widest">
                        Erik Zhou                        
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        activeClassName="text-red-100 bg-green-400" 
                        className="inline-flex items-center py-6 px-3 mr-4 cursive text-4xl hover:text-white tracking-widest">
                        About                        
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        activeClassName="text-red-100 bg-green-400"
                        className="inline-flex items-center py-6 px-3 mr-4 cursive text-4xl hover:text-white tracking-widest">
                        Projects                        
                    </NavLink>
                    <NavLink 
                        to="/posts" 
                        activeClassName="text-red-100 bg-green-400"
                        className="inline-flex items-center py-6 px-3 mr-4 cursive text-4xl hover:text-white tracking-widest">
                        Blog                       
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://www.linkedin.com/in/erik-zhou-332b99154/"
                        className="mr-3" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width: 35}}
                    />
                    <SocialIcon 
                        url="https://github.com/Erik-Z"
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{height: 35, width: 35}}
                    />
                </div>
            </div>
        </header>
    )
}

export default NavBar