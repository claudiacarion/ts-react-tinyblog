import React, { useEffect, useState } from 'react';
import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import { PostData } from './types/types';

function App() {
  const [data, setData] = useState<PostData[]>([{
    id: 0,
    title: '',
    body: '',
    userId: 0,
    tags: [''],
    reactions: 0,
  }]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://dummyjson.com/posts');
      const fetchedData = await res.json();
      setData(fetchedData.posts);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Blog data={ data }/>
        <Footer />
    </div>
  );
}

export default App;
