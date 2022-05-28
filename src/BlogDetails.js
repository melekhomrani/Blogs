import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import Loading from './Loading';

const BlogDetails = () => {
  const { id } = useParams();
  const url = 'http://localhost:8000/blogs';
  const { data: blog, loading, error } = useFetch(`${url}/${id}`);
  const history = useHistory();
  function handleDelete() {
    fetch(`${url}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        history.push('/');
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className='blog-details'>
      {error && <h4 className='waves'>{`${error}...`}</h4>}
      {!error && loading && <Loading />}
      {blog && (
        <div className='blog-details' style={{cursor: "pointer"}} >
          <h2 className='blog-title'> {blog.title} </h2>
          <div className='blog-body'> {blog.body}</div>
          <p className='blog-author'> {`written by ${blog.author}`} </p>
        </div>
      )}
      {blog && <button className='button' onClick={handleDelete} style={{marginBottom: "50px"}}>Delete Blog</button>}
    </div>
  );
};

export default BlogDetails;
