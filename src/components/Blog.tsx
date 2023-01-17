import React from 'react';
import { IBlogProps } from '../types/types';
import Post from './Post';

const Blog = ({ data }: IBlogProps) => (
  <main className='blog-section'>
        {data.map(posts => {
          const { tags } = posts;
          if (tags.includes('crime')) {
            return <>
              <Post posts={posts} />
            </>;
          }
          return null;
        })}
 </main>
);

export default Blog;
