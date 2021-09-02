import React, {useState, useEffect} from "react"
import sanityClient from "../client"
const Project = () => {
    const [projects, setProjects] = useState(null)
    useEffect(() =>{
        sanityClient.fetch(`
        *[_type == "project"]{
            title,
            date,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            },
            description,
            link,
            tags
        }`)
        .then(data => setProjects(data))
        .catch(console.error)
    }, [])
    return (
        <main className="bg-blue-200 min-h-screen p-12">
            <section className="container mx-auto">
                {/* <h1 className="text-5xl flex justify-center serif">My Projects</h1> */}
                <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects && projects.map((project, index) => (
                    // <article className="relative rounded-lg shadow-xl bg-white p-16">
                    //     <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    //         <a 
                    //             href={project.link} 
                    //             alt={project.title} 
                    //             target="_blank"
                    //             rel="noopener noreferrer"
                    //         >
                    //             {project.title}
                    //         </a>
                    //     </h3>
                    //     <div className="text-gray=500 text-xs ">
                    //         <span>
                    //             <strong className="font-bold">Finished On</strong>:
                    //             {new Date(project.date).toLocaleDateString()}
                    //         </span>
                    //         <p className="my-6 text-s text-gray-700 ">
                    //             {project.description}
                    //         </p>
                    //         <span></span>
                    //     </div>
                    // </article>
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <div class="sm:w-full">
                            <div className="bg-white hover:shadow-xl shadow rounded-lg border">
                            <img className="rounded-t-lg shadow h-60 w-full"src={project.image.asset.url} alt={project.image.alt}/>
                                <div className="p-5 text-gray-600">
                                <small className="text-sm font-semibold">{new Date(project.date).toLocaleDateString()}</small>
                                    <div className="text-gray-500 text-2xl font-thin">{project.title} </div>
                                    <p className="pt-1 text-gray-500 font-semibold">
                                    {project.description}
                                    </p>
                                    <hr />
                                    {project.tags && project.tags.map(tag => (
                                        <div className=" text-xs inline-flex items-center font-bold  uppercase px-3 py-1 my-1 mr-1 rounded-full text-gray-700 border">
                                        {tag}
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
                </section>
            </section>
        </main>
    )
}

export default Project