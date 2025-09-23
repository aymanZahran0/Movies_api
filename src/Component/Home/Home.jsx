import React, { useEffect, useState } from 'react'
import axios from "axios"
import homeStyle from './Home.module.css'
import { Link } from 'react-router-dom';


export default function Home() {

  const [trendingMovies, setTrendingMovies] = useState([]);

   async function getTrindingMovie(){

    let {data} = await axios.get (`http://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
    console.log(data.results);

    setTrendingMovies(data.results);
    }

    useEffect(() => {
     
        getTrindingMovie();
     
    }, []); 
    
 

  return (
    <>


    <div className="container">
        <div className="content">
        <div className='row justify-content-center align-content-lg-center '>

            
             { trendingMovies.length >  0 ? trendingMovies.map((movie, index) =>  
           
             <div key ={index} className='col-md-4 gy-5'>
                <Link to={`/itemdetails/ ${movie.id}/${movie.media_type}`}>  
                    <div className='' >

                        <div className={`${homeStyle.movie} position-relative`}>

                            <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                            <h5 className={homeStyle.movieName}>{movie.title}</h5>
                            <div className="vote rounded-1 d-flex position-absolute me-2 top-0 end-0 p-2">{movie.vote_average.toFixed(1)}</div>

                        </div>
                    </div>
                </Link>
             </div>
             ):<div className='text-center '> <i className='fas fa-spinner fa-spin fa-3x'></i></div> }
          
        

        </div>
        </div>
    </div>
    </>
  )
}

