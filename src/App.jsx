import React from 'react'
import Header from './components/header';
import Tags from './components/tags';
import Blogs from './components/blogs/blogs';
import Pages from './components/pages';

const App = () => {
  return (
    <div>
      <Header />
      <hr/>
      <Tags />
      <Blogs />
      <Pages />
    </div>
  )
}

export default App;