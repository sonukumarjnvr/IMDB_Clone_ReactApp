import React ,{useEffect, useState} from "react";
import Cards from "../card/card";
import "./movielist.css";
import { useParams } from "react-router-dom";

const Movielist = ()=>{
    const [movieList, setmovielist] = useState([])
    const {type} = useParams()

    const getData = () => {
        const p= fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
        p.then((res)=>{
            return res.json();
        }).then((data)=>{
            setmovielist(data.results);
        })
    }

    useEffect(() =>{
        getData()
    }, [])

    useEffect(() =>{
        getData()
    }, [type])

    return(
        <div className="movie_list">
            <h2 className="movie_title">{(type ? type : "popular").toUpperCase()}</h2>
           
           <div className="movie_card">
               {
                   movieList.map(movie =>(
                    <Cards movie = {movie}/>
                   ))
               }
           </div>
        </div>
    );
}

export default Movielist;
