import React, {useState} from 'react'
import './search.css'

const Search = ({keyword, setKeyword}) => {

    const changeInput = (e) => {
        console.log(e.target.value);
        setKeyword(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log('entro');
    }

    return (
        <div className="searchMain container">
            <form className="row">
                <div className="col-12 col-sm-10 col-md-10">
                    <input value={keyword} onChange={changeInput} type="text" className="form-control inputSearch" id="inputPassword2" placeholder="busca un producto" />
                </div>
                <div className="col-12 col-sm-2 col-md-2">
                    <button onClick={submit} type="submit" className="btn btn-primary mb-3">Buscar</button>
                </div>
            </form>
            <h1>{keyword}</h1>
        </div>
    )
}

export default Search
