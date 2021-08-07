import React from "react"
import image from "../background.jpg"
const Home = () =>{
    return (
        <main>
            <img 
                src={image} 
                alt="Gradient Background"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-blue-200 font-bold serif leading-none lg:leading-snug home-name"> Hello, I am Erik</h1>
            </section>
        </main>
    )
}

export default Home