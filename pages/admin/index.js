import dbConnect from '@/lib/dbConnect'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import moment from 'moment';
import { useRouter } from 'next/router'

export default function Admin() {
    const [posts, setPosts] = useState([])
    const router = useRouter()

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        try {
            const { data } = await axios.get("/api/posts")
            setPosts(data.posts)
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (id) => {
        try {
            const { data } = await axios.delete(`/api/posts/${id}`)

            getPosts()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Head>
                <title>Admin</title>
                <meta name="description" content="The news Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="bg-white p-8 rounded-md w-full">
                    <div className=" flex items-center justify-between pb-6">
                        <div>
                            <h2 className="text-gray-600 font-semibold">Posts</h2>
                            <span className="text-xs">All posts item</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex bg-gray-50 items-center p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                            </div>
                            <div className="lg:ml-40 ml-10 space-x-8">
                                <Link href="/admin/create" className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</Link>
                                <Link href="/admin/create" className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Category
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Created at
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map((post) => {
                                            return (<tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-20 h-15">
                                                            <img className="w-full h-full"
                                                                src={post.imageUrl}
                                                                alt="" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {post.title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{post.category}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {moment(post.createdAt).format('DD/MM/YY')}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden
                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                        <span className="relative">Activo</span>
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <button
                                                        onClick={() => deletePost(post._id)}
                                                        className="text-sm text-indigo-50 transition duration-150 hover:bg-red-400 bg-red-600 font-semibold py-1 px-2 rounded">
                                                        Delete
                                                    </button>
                                                    <button
                                                        onClick={() => router.push(`admin/edit/${post._id}`)}
                                                        className="text-sm ml-1 text-indigo-50 transition duration-150 hover:bg-teal-400 bg-teal-600 font-semibold py-1 px-2 rounded">
                                                        Edit
                                                    </button>
                                                </td>
                                            </tr>)
                                        })}
                                    </tbody>
                                </table>
                                <div
                                    className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span className="text-xs xs:text-sm text-gray-900">
                                        Showing 1 to 4 of 50 Entries
                                    </span>
                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                            Prev
                                        </button>
                                        &nbsp; &nbsp;
                                        <button
                                            className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
