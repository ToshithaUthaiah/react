import React, { useEffect, useState } from 'react'
import '../css/trendingmovies.css'
import { fetchTrendingDoc } from '../services/api';
import { useMovieContext } from '../contexts/MovieContext';
import { MdAddCircle } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const TrendingDocu = ({ searchQuery }) => {
    const { addToList, checkMovies, addToListMovies, removeFromListMovies } = useMovieContext();
    const [trendingdoc, setTrendingDoc] = useState([]);


    useEffect(() => {
        const getTrendingDocFunc = async () => {
            try {
                const getTrendingDoc = await fetchTrendingDoc();
                setTrendingDoc(getTrendingDoc)
                //  console.log(getTrendingDoc)
            }
            catch (err) {
                console.log('Unable to get trending docs')
            }
            finally {
                console.log('Trending doc')
            }
        }
        getTrendingDocFunc()
    }, [])
    return (
        <section className="trendingComponent">
            {trendingdoc.map((individualtrendingdoc) => {
                const isAdded = checkMovies(individualtrendingdoc.id);

                // 2. Toggle add or remove when clicked
                const handleToggleList = (e) => {
                    e.stopPropagation(); // Prevents triggering parent clicks if you have any
                    if (isAdded) {
                        removeFromListMovies(individualtrendingdoc.id);
                    } else {
                        addToListMovies(individualtrendingdoc);
                    }
                };
                return (individualtrendingdoc?.title || "").toLowerCase().startsWith((searchQuery || "").toLowerCase()) &&
                    <div class="individualtrendingmovies_class">
                        <div
                            key={individualtrendingdoc.id}
                            className="individualtrendingmovies_img"
                            style={{ '--trendingmovieimg': `url("https://image.tmdb.org/t/p/original/${individualtrendingdoc?.backdrop_path}")` }}>
                        </div>
                        <div class="individualtrendingmovies_details">
                            <p>{individualtrendingdoc.title || individualtrendingdoc.original_name}</p>
                            <button className="list-btn" onClick={handleToggleList}>{isAdded ? <FaCheckCircle size={30} color="white" /> : <MdAddCircle size={30} color="white" />}</button>
                        </div>
                    </div>

            })
            }
        </section >
    )
}

export default TrendingDocu
