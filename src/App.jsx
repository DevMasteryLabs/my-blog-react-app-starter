import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetails from './pages/PostDetails'
import NotFound from './pages/NotFound'

function App() {
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
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts postsList={posts} errorMessage={error} />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App