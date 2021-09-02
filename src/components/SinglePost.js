import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import sanityClient from "../client"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source) => {
    return builder.image(source)
}
const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null)
    const {slug} = useParams()

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            publishedAt,
            body,
        }`)
        .then((data) => setSinglePost(data[0]))
        .catch(console.error)
    })

    if (!singlePost) return <div>Loading...</div>
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return (
        <main>
            <article>
                <div>
                    <h1 className="font-bold text-xl text-gray-500 tracking-normal ml-10 mt-5">
                        {new Date(singlePost.publishedAt).toLocaleDateString(undefined, options)}
                    </h1>
                    <h1 className="font-bold text-5xl text-gray-800 tracking-normal ml-10">
                        {singlePost.title}
                    </h1>
                </div>
                <header>
                    <img 
                        src={singlePost.mainImage.asset.url}
                        alt={singlePost.title} 
                        className="w-full object-cover rounded p-10 mt-5"
                    />
                    <div className="px-16 lg:px-48 lg:py-10 prose max-w-full">
                        <BlockContent blocks={singlePost.body} 
                            projectId="o5ljwefr"
                            dataset="production"
                        />
                    </div>
                </header>
                
            </article>
        </main>
    )
}

export default SinglePost