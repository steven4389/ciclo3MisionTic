import React, {useState} from 'react'
import Header from '../header/Header'
import Search from '../search/Search'
import Gallery from '../gallery/Gallery'

const Home = () => {

    const [keyword, setKeyword] = useState('');

    return (
        <div>
            <Header />
            <Search keyword={keyword} setKeyword={setKeyword} />
            <Gallery keyword={keyword} />
        </div>
    )
}

export default Home
