import Head from 'next/head'
import Image from 'next/image'

import dbConnect from '@/lib/dbConnect'
import Post from '@/models/post'


export default function PostScreen({ post }) {


    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content="The news Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main class="max-w-screen-xl mx-auto">
                <div class="mt-10">
                    <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-96">
                        <div class="absolute left-0 bottom-0 w-full h-full z-10"
                            //style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"
                            ></div>
                        <img src={post.imageUrl} class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                        <div class="p-4 absolute bottom-0 left-0 z-20">
                            <a href="#"
                                class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{post.category}</a>
                            <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                            {post.title}
                            </h2>
                            <div class="flex mt-3">
                                <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                    class="h-10 w-10 rounded-full mr-2 object-cover" />
                                <div>
                                    <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                                    <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        <p class="pb-6">{post.body}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getServerSideProps(req, res) {
    await dbConnect()

    const { slug } = req.params

    /* find all the data in our database */
    const result = await Post.findOne({ slug })

    return { props: { post: JSON.parse(JSON.stringify(result)) } }
}
