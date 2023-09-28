import { useState, useEffect } from 'react'
import axios from 'axios'

import PostCard from '../components/PostCard';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data.slice(0, 10))
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div className='container mt-2'>
      <h3 className='text-center'>Posts</h3>
      {
        error
          ? <h5 className='text-danger'>{error}</h5>
          : posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))
      }
    </div>
  );
}

export default Posts;