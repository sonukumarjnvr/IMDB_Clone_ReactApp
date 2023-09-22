
import React,{useEffect, useState} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({movie}) =>{
      const [isloading, setislanding] = useState(true);

      useEffect(()=>{
          setTimeout(()=>{setislanding(false)}, 1500)
      }, [])

      return (
         isloading ?
         <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
         </div>
         :
         <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>
            <div className="cards">
                 <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}` }/>
                 <div className="cards_overlay">
                     <div className="cards_title">{movie ? movie.original_title:""}</div>
                     <div className="cards_runtime">
                        {movie ? movie.release_date : ""}
                        <span className="cards_rating">{movie ? movie.vote_average:""}<i class="fa fa-star"/></span>
                     </div>
                     <div className="cards_description">{movie ? movie.overview.slice(0,118) : ""}</div>
                 </div>
                 
            </div>
         </Link>  
      )
}

export default Cards;
