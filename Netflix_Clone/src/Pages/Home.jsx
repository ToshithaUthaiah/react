import React, { useState } from 'react'
import Card from '../components/card'
import Header from '../components/Header'
import Trending from '../components/TrendingMovies'
import TrendingDocu from '../components/TrendingDocu'

const Home = () => {
    const [search, setSearch] = useState("");
    const [submittedSearch, setSubmittedSearch] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        setSubmittedSearch(search)
        console.log("handle text")
    }
    return (
        <>
            <Header search={search} setSearch={setSearch} handleSearch={handleSearch} />
            <Card />
            <h2>Trending Movies</h2>
            <Trending searchQuery={submittedSearch} />
            <h2>Trending Documentaries</h2>
            <TrendingDocu searchQuery={submittedSearch} />
        </>
    )
}

export default Home
