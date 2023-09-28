import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function PostDetails() {
  const [post, setPost] = useState(null)
  const [error, setError] = useState('')
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div className='container mt-2'>
      {
        post
          ? (
            <>
              <h4 className='text-center'>{post.title}</h4>
              <p>{post.body}</p>
            </>
          )
          : <p className='text-danger'>{error}</p>
      }
    </div>
  )
}

export default PostDetails