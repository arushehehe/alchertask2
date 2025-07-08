import {Link} from 'react-router-dom';

const Card=(props)=>{
  
  const movies=props.movs;
  return(
    <>
      {movies.map((movie)=>(
        <div className="movieCard" key={movie.movie_id}>
          <Link to={{pathname:"/movie/details" , state:{movie}}}>
            <img className="poster" src={movie.poster_path}/>
            <div className="title">{movie.original_title}</div>
            <div className="year">{movie.release_date.slice(-4)}</div>
          </Link>
        </div>
      ))}
    </>
  );
}
export default Card;