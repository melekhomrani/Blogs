import useFetch from './useFetch';
import BlogList from './BlogList';
import Loading from './Loading';

const Home = () => {

  const url = 'http://localhost:8000/blogs';
  const { data:blogs, loading, error } = useFetch(url);

  return (
    <div className='Home' style={{ lineHeight: '3rem' }}>
      {error && <h4 className='waves'>{`${error}...`}</h4> }
      {!error && loading && <Loading/> }
      {blogs && (
        <BlogList
          blogs={blogs}
          title='All Blogs'
        />
      )}
    </div>
  );
};

export default Home;
