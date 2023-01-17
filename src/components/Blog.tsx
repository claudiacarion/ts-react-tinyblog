/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import { IBlogProps } from '../types/types';

const Blog = ({ data }: IBlogProps) => (
  <div>
        {data.map(post => {
          const { tags } = post;
          if (tags.includes('english')) {
            return <><h3>{post.title}</h3><p>{post.body}</p></>;
          }
        })}
 </div>
);
export default Blog;
