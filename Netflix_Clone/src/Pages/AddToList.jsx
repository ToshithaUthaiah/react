import React from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import '../css/trendingmovies.css'
import { IoMdRemoveCircle } from "react-icons/io";
import Header from '../components/Header'
const AddToList = () => {
    const { addToList, removeFromListMovies } = useMovieContext();

    if (addToList.length > 0) {
        return (
            <div>
                <Header />
                <h1 style={{ paddingTop: 70 }}>Add to List movies</h1>
                <div class="individualtrendingmovies">
                    {addToList.map((movie) => (
                        <div class="individualtrendingmovies_classtwo">
                            <div
                                key={movie.id}
                                className="individualtrendingmovies_img2"
                                style={{
                                    '--trendingmovieimg': `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
                                }}
                            >
                            </div>
                            <div class="individualtrendingmovies_details">
                                <h3>{movie.title || movie.name}</h3>
                                <button className="list-btn" onClick={() => removeFromListMovies(movie.id)}>
                                    <IoMdRemoveCircle size={30} color="white" />
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
            </div >
        );
    } else {
        return (
            <div>
                <Header />
                <h1 style={{ paddingTop: 70 }}>Add to List movies</h1>
                <p>No movies added yet.</p>
            </div>
        );
    }
};

export default AddToList;