import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export default function ItemDetails(movie_id) {

  let {id,mediaType}= useParams();
  const [movieDetails, setMovieDetails] = useState({});


  async function getMovieDetails(movie_id) {

    let {data} =  await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`);
    setMovieDetails(data);
    

  }

  useEffect(() => {

    getMovieDetails(id);
   
  }, []);
  
  console.log(movieDetails);

  return (

    <>
    <div className='container'>

      {movieDetails.adult == false ? 
      <div className='row'>

      <div className="col-md-3">
        <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="" />
      </div>

      <div className="col-md-9">
        <h2>{movieDetails.title}</h2>
      
        <p className='text-dark-emphasis'>  {movieDetails.tagline}</p>
        <p className=''>vote : <span className='text-dark-emphasis'>{movieDetails.vote_average}</span></p>
        <p className=''>vote count : <span className='text-dark-emphasis'> {movieDetails.vote_count}</span></p>
        <p className=''>popularity : <span className='text-dark-emphasis'>{movieDetails.popularity}</span></p>
        <p className=''>Release Date : <span className='text-dark-emphasis'>{movieDetails.release_date}</span></p>
        <p className='text-dark-emphasis'>  {movieDetails.overview}</p>
      </div>
    </div>
      
      : <div className='text-center '> <i className='fas fa-spinner fa-spin fa-3x'></i></div>}

      
    </div>
    </>
    
  )
}
