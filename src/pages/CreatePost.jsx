
function CreatePost() {
  return (
    <div className='container mt-2'>
      <h3 className='text-center'>Create a new post</h3>
      <form>
        <div className='mb-3'>
          <label htmlFor='post-title' className='form-label'>Post title</label>
          <input className='form-control' id='post-title' />
        </div>
        <div className='mb-3'>
          <label htmlFor='post-body' className='form-label'>Post body</label>
          <textarea className='form-control' id='post-body' rows='8'></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;