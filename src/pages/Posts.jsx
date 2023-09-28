import PostCard from '../components/PostCard';

function Posts(props) {
  const { postsList, errorMessage } = props

  return (
    <div className='container mt-2'>
      <h3 className='text-center'>Posts</h3>
      {
        errorMessage
          ? <h5 className='text-danger'>{errorMessage}</h5>
          : postsList.map(post => (
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