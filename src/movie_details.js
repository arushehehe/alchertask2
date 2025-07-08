import {useParams ,useLocation } from 'react-router-dom';
import Cast from './cast';
import './movDetail.css';

const Movie_details =()=>{
  const loc=useLocation();
  const movie= loc.state?.movie;
  const director=(movie.casts).find(a => a.character==="Director");
  console.log(movie);
  return(
    <>
    <div id="details">

        {!movie&& <div>No movie</div>}
        {movie&& (
          <>
          <div className="info">
          <img src={movie.poster_path} className="poster"/>
          <div>
            <h2>
            {movie.original_title}
          </h2>
          {director&&<div>Directed by {director?.original_name}</div>}
          <div className="contain">
            <div id="age">{movie.adult|| "U"}</div>
            <div id="yr">{movie.release_date.slice(-4)}</div>
          </div>
          <div className="contain">
            <div className="rating">
              <img className="icon-imdb" src="/icons8-imdb-48.png"/>
              {movie.vote_average}
            </div>
            <div className="rating">
              <img src="/icons8-rotten-tomatoes-48.png" className="icon-tomato"/>
              {movie.popularity}%
            </div>
          </div>
          <div className="buttons">
            <button className="icons"><img className="bttn" src="/icons8-play-30.png"/> Watch now</button>
            <button className="icons"><img className="bttn" src="/icons8-bookmark-24.png"/></button>
            <button className="icons"><img className="bttn" src="/icons8-film-reel-48.png" /></button>
            <button className="icons"><img className="bttn" src="/icons8-tick-in-circle-78.png" /></button>
            <button className="icons"><img className="bttn" src="/icons8-share-24.png" /></button>
          </div>
          <p id="overview">
            {movie.overview}
            </p>
          </div>
          </div>
          <br />
          <br />
          <br />
          <div id="casts">
            Cast of {movie.original_title}
            <br />
            <br/>
            <Cast casts={movie.casts}/>
          </div>
          </>
        )}
      </div>
    <div id="imgcontain">
      <img src={movie.backdrop_path} className="bgimg"/>
    </div>
    </>
  );
}

export default Movie_details;