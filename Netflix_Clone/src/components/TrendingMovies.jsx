import React, { useEffect, useState } from 'react'
import { MdAddCircle } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { fetchTrending } from '../services/api'
import '../css/trendingmovies.css'

import { useMovieContext } from '../contexts/MovieContext';

const Trending = ({ searchQuery }) => {

    const { addToList, checkMovies, addToListMovies, removeFromListMovies } = useMovieContext();
    const [trending, setTrending] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log("Current searchQuery:", searchQuery);
    useEffect(() => {
        const getTrendingMoviesFunc = async () => {
            try {
                const getTrendingMovies = await fetchTrending();
                setTrending(getTrendingMovies)
                console.log(getTrendingMovies)
            }
            catch (err) {
                console.log('Unable to get trending movies')
                setError(err)
            }
            finally {
                console.log('Trending movies');
                setLoading(false)
            }
        }
        getTrendingMoviesFunc()
    }, [])

    return (
        <section className="trendingComponent">
            {trending.map((individualtrendingmovies) => {
                const isAdded = checkMovies(individualtrendingmovies.id);

                // 2. Toggle add or remove when clicked
                const handleToggleList = (e) => {
                    e.stopPropagation(); // Prevents triggering parent clicks if you have any
                    if (isAdded) {
                        removeFromListMovies(individualtrendingmovies.id);
                    } else {
                        console.log("ADDED TO LIST!!!!!!!!!!!!!!!!")
                        addToListMovies(individualtrendingmovies);
                    }
                };
                return (individualtrendingmovies?.title || "").toLowerCase().startsWith((searchQuery || "").toLowerCase()) &&
                    <div class="individualtrendingmovies_class">
                        <div
                            key={individualtrendingmovies.id}
                            className="individualtrendingmovies_img"
                            style={{ '--trendingmovieimg': `url("https://image.tmdb.org/t/p/original/${individualtrendingmovies?.backdrop_path}")` }}>
                        </div>
                        <div class="individualtrendingmovies_details">
                            <p>{individualtrendingmovies.title || individualtrendingmovies.original_name}</p>
                            <button className="list-btn" onClick={handleToggleList}>{isAdded ? <FaCheckCircle size={30} color="white" /> : <MdAddCircle size={30} color="white" />}</button>
                        </div>
                    </div>

            })
            }
        </section >
    )
}

export default Trending
