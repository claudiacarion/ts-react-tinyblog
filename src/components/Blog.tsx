import React from 'react';
import { IBlogProps } from '../types/types';
import Post from './Post';

const Blog = ({ data }: IBlogProps) => (
  <main className='blog-section'>
    <section className='crime-section'>
      <h3>crime</h3>
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
    <h3>english</h3>
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
    <h3>love</h3>
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
    <h3>magical</h3>
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
    <h3>mystery</h3>
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
