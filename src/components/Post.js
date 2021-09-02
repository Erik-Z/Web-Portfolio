import React, {useState, useEffect} from "react"
import sanityClient from "../client"
import { Link } from "react-router-dom"
const Post = () => {
    const [postData, setPostData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == 'post']{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                publishedAt,
                body
            }
        `)
        .then((data) => {setPostData(data)})
        .catch(console.error)
    })
    return (
        <main className="bg-blue-200 min-h-screen">
            <section className="container mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    { postData && postData.map((post, index) => (
                        <Link to={"/posts/" + post.slug.current} key={post.slug.current}>
                            <div className="mx-auto max-w-xl my-5">
                                <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" key={index}>
                                    <div class="md:flex-shrink-0">
                                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-64 rounded-lg rounded-b-none" />
                                    </div>
                                    <div class="px-4 py-2 mt-2">
                                        <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{post.title}</h2>
                                            <p class="text-sm text-gray-700  mr-1">
                                                {post.body[0].children[0].text.substring(0,200) + "..."}
                                            </p>
                                        <div class="author flex items-center -ml-3 my-3">
                                            <h2 class="text-sm tracking-tighter text-gray-900">
                                                <span class="px-3 text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Post