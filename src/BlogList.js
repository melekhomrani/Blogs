import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h2>{title} </h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className='blog-title'>{blog.title} </h2>
            <p className='blog-author'>written by {blog.author} </p>
            <div className='blog-body'>{`${blog.body.slice(0,150)}...`}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
