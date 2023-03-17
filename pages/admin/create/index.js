import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'

export default function CreatePost() {
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [body, setBody] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [category, setCategory] = useState("")

    const savePost = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("/api/posts",
                {
                    title,
                    slug,
                    body,
                    imageUrl,
                    category
                }
            )
            console.log(data)
            setTitle("")
            setSlug("")
            setBody("")
            setImageUrl("")
            setCategory("")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <title>Create Post</title>
                <meta name="description" content="The news Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px]">
                        <form onSubmit={savePost}>
                            <div className="mb-5">
                                <label
                                    for="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="slug"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Slug
                                </label>
                                <input
                                    type="text"
                                    name="slug"
                                    id="slug"
                                    placeholder='Slug' value={slug} onChange={(e) => setSlug(e.target.value)}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="image"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Image url
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    placeholder='Image url' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="category"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Category
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="body"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Body
                                </label>
                                <textarea
                                    rows="4"
                                    name="body"
                                    id="body"
                                    placeholder='Body' value={body} onChange={(e) => setBody(e.target.value)}
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

