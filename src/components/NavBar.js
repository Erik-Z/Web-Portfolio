import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const NavBar = () => {
    return (
        <header className="bg-red-600">
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
                        activeClassName="text-red-100 bg-red-700" 
                        className="inline-flex items-center py-6 px-3 mr-4 cursive text-4xl hover:text-white tracking-widest">
                        About                        
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-6 px-3 mr-4 cursive text-4xl hover:text-white tracking-widest">
                        Projects                        
                    </NavLink>
                </nav>
                <div>
                    
                </div>
            </div>
        </header>
    )
}

export default NavBar