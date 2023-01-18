import React, { useState } from 'react';
import { IBlogProps } from '../types/types';
import Post from './Post';
import '../styles/blog.css';

const Blog = ({ data }: IBlogProps) => {
  const [section, setSection] = useState(false);

  const toggleClass = () => {
    setSection(!section);
  };

  return (
  <main className='blog-section'>
    <section className='category-section'>
      <h3 onClick={ toggleClass } className='category'>crime</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('crime')) {
            return <div className={section ? 'show-crime' : 'hide'}>
              <Post posts={posts} />
            </div>;
          }
          return null;
        })}
    </section>
    <section className='category-section'>
    <h3 onClick={ toggleClass } className='category'>english</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('english')) {
            return <div className={section ? 'show-english' : 'hide'}>
              <Post posts={posts} />
            </div>;
          }
          return null;
        })}
    </section>
    <section className='category-section'>
    <h3 className='category' onClick={ toggleClass }>love</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('love')) {
            return <div className={section ? 'show-love' : 'hide'}>
              <Post posts={posts} />
            </div>;
          }
          return null;
        })}
    </section>
    <section className='category-section'>
    <h3 className='category' onClick={ toggleClass }>magical</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('magical')) {
            return <div className={section ? 'show-magical' : 'hide'}>
              <Post posts={posts} />
            </div>;
          }
          return null;
        })}
    </section>
    <section className='category-section'>
    <h3 className='category' onClick={ toggleClass }>mystery</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('mystery')) {
            return <div className={section ? 'show-mystery' : 'hide'}>
              <Post posts={posts} />
            </div>;
          }
          return null;
        })}
    </section>
 </main>
  );
};

export default Blog;
