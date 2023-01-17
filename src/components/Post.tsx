import React from 'react';
import { IPostProps } from '../types/types';
import '../styles/post.css';

const Post = ({ posts }: IPostProps) => (
  <section className='post-section'>
    <h1 className='post-title'>{posts.title}</h1>
    <p className='post-body'>{posts.body}</p>
        {posts.tags.map((tag, i) => (
            <ul key={i}>{tag}</ul>
        ))}
  </section>
);

export default Post;
