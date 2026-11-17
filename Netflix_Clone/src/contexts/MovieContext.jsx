import React, { createContext, useContext, useState, useEffect } from 'react'
const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [addToList, setAddToList] = useState([]);

    useEffect(() => {
        const storedlist = localStorage.getItem("addToList");
        if (storedlist) setAddToList(JSON.parse(storedlist))
    }, [])
    // everytime the user clicks on the +, which is an update, it updates the local storage, thus dependency has addToList

    useEffect(() => {
        localStorage.setItem('addToList', JSON.stringify(addToList))
    }, [addToList])

    //add 
    //remove
    //check if fav
    const addToListMovies = (movie) => {
        setAddToList(prev => [...prev, movie])
    }

    const removeFromListMovies = (movieId) => {
        setAddToList(prev => prev.filter(movie => movie.id !== movieId))
    }

    const checkMovies = (movieId) => {
        return addToList.some(movie => movie.id === movieId)
    }

    const value = {
        addToList, addToListMovies, removeFromListMovies, checkMovies
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

export default MovieContext
