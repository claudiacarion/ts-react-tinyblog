import React from 'react';
import { IBlogProps } from '../types/types';
import Post from './Post';
import '../styles/blog.css';

const Blog = ({ data }: IBlogProps) => (
  <main className='blog-section'>
    <section className='crime-section'>
      <h3 className='category'>crime</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('crime')) {
            return <>
              <Post posts={posts} />
            </>;
          }
          return null;
        })}
    </section>
    <section className='english-section'>
    <h3 className='category'>english</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('english')) {
            return <>
              <Post posts={posts} />
            </>;
          }
          return null;
        })}
    </section>
    <section className='love-section'>
    <h3 className='category'>love</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('love')) {
            return <>
              <Post posts={posts} />
            </>;
          }
          return null;
        })}
    </section>
    <section className='magical-section'>
    <h3 className='category'>magical</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('magical')) {
            return <>
              <Post posts={posts} />
            </>;
          }
          return null;
        })}
    </section>
    <section className='mystery-section'>
    <h3 className='category'>mystery</h3>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('mystery')) {
            return <>
              <Post posts={posts} />
            </>;
          }
          return null;
        })}
    </section>
 </main>
);

export default Blog;
