import Post from '@/models/post'
import dbConnect from '../../../lib/dbConnect'


export default async function handler(req, res) {
  const { method } = req
  const { title, slug, body, imageUrl, category, tags } = req.body

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const posts = await Post.find({})
        res.status(200).json({ posts })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      if (!title || !slug || !body || !imageUrl || !category) {
        res.status(400).json({ success: false })
        break
      }
      try {
        const post = await Post.create(req.body)
        res.status(201).json({ post })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}