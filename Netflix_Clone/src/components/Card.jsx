import React, { useEffect, useState } from 'react'
import { fetchNetflixOriginals } from '../services/api'
import "../css/card.css"
import { genreMap } from "../services/genreMap";

const Card = () => {
    const [netflixOriginals, setNetflixOriginals] = useState([])

    useEffect(() => {
        const netflixori = async () => {
            try {
                let netflixoriginalslist = await fetchNetflixOriginals();
                //console.log(netflixoriginalslist)

                let random = Math.floor(Math.random() * netflixoriginalslist.length)
                let singlenetflixoriginals = netflixoriginalslist[random]
                let singlenetflixoriginalsbg = netflixoriginalslist[random].backdrop_path
                setNetflixOriginals(singlenetflixoriginals)
            }
            catch {
                console.log("Error to fetch netflix originals")
            }
            finally {
                console.log("something")
            }
        }

        netflixori()
    }, [])

    return (

        <div className="content-wrapper">
            <div className="netflixOriginalscard" style={{ '--bg-image': `url("https://image.tmdb.org/t/p/original/${netflixOriginals?.backdrop_path}")` }}>
                <div className='netflixOriginalsdetails'>
                    <h2>{netflixOriginals.name}</h2>
                    <p id="netflixOriginals_genre">{genreMap[netflixOriginals.genre_ids]}</p>
                    <p>{netflixOriginals.first_air_date?.split('-')[0]}</p>
                    <p> {netflixOriginals.overview}</p>
                </div>

                <div className='netflixOriginalsButtons'>
                    <button>Play</button>
                    <button>More Info</button>
                </div>
            </div>
        </div>


    )
}

export default Card
