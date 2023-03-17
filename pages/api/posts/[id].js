import dbConnect from '../../../lib/dbConnect'
import Post from '@/models/post'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const post = await Post.findById(id)
        if (!post) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ post })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const post = await Post.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          })
          if (!post) {
            return res.status(400).json({ success: false })
          }
          res.status(200).json({ post })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const post = await Post.findByIdAndDelete(id)

        res.status(200).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}