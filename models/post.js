import mongoose from 'mongoose'

/* PostSchema will correspond to a collection in your MongoDB database. */
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  slug: {
    type: String
  },
  body: {
    type: String
  },
  imageUrl: {
    type: String
  },
  category: {
    type: String
  },
  tags: {
    type: Array
  },
}, { timestamps: true })

export default mongoose.models.Post || mongoose.model('Post', PostSchema)