import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "./details.css";

function Details() {
    const {id} = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=5c291c5c3ce259fccb18540798c90d70`)
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovieDetail()
    }, [id])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="container mx-auto px-4 py-8 cover">
            <NavLink to={`/movies/${data.id}`} className="flex justify-center items-center">
                <div className="w-40 h-60 bg-black rounded-md overflow-hidden shadow-md mr-4">
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}  className="w-full h-full object-cover"  alt={data.original_title} />
                </div>
                <p  className="text-xl font-semibold mb-2">{data.original_title}</p>
            </NavLink>
        </div>
    )
}

export default Details
