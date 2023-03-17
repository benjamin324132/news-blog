import Head from 'next/head'
import Image from 'next/image'

import dbConnect from '@/lib/dbConnect'
import Post from '@/models/post'


export default function Category() {


  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="The news Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       Category
      </main>
    </>
  )
}

export async function getServerSideProps(req, res) {
  await dbConnect()

  const { page } = req.query

  /* find all the data in our database */
  const result = await Post.find({})

  return { props: {  posts: JSON.parse(JSON.stringify(result)) } }
}
