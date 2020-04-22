import React, { useState } from 'react'
import Axios from 'axios'

export default function SearchBar() {

  const [search, setSearch] = useState('');
  const [gifs, setGifs] = useState([]);
  const key = 'F1kim5zv5e29QtrG2mrlHMgO6zNlA6Pl'
  let limit = 10
  let url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`

  Axios.get(url).then((res) => {
    console.log('res', res)
    const url = res.data.data
    console.log(url)
    setGifs(url)
  })
    .catch(function (err) {
      console.error(err);
    })

  return (
    <>
      <div className='search'>
        <h1>GIFs</h1>
        <input onChange={e => setSearch(e.target.value)} placeholder="Procurar gifs"/>
        {gifs.map((gif) => (
          <iframe key={gif.id} src={gif.embed_url} frameBorder="0" />
        ))}
      </div>
    </>
  )
}