import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Gallery from './components/gallery/Gallery';

function App() {

  const [keyword, setKeyword] = useState('');

  return (
    <div className="App">
      <Header />
      <Search keyword={keyword} setKeyword={setKeyword} />
      <Gallery keyword={keyword} />
    </div>
  );
}

export default App;
