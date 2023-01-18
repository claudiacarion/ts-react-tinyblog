import React from 'react';
import { IPostProps } from '../types/types';
import '../styles/post.css';

const Post = ({ posts }: IPostProps) => (
  <section className='post-section'>
    <h4 className='post-title'>{posts.title}</h4>
    <p className='post-body'>{posts.body}</p>
        {posts.tags.map((tag, i) => (
            <ul className='post-tags' key={i}>#{tag}</ul>
        ))}
  </section>
);

export default Post;
