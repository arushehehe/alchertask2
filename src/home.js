import Card from './moviecard.jsx';
import useFetch from './useFetch';

function Home(){

  const {data:movies,page,isLoading,error} =useFetch('https://jsonfakery.com/movies/paginated/');

  return (
      <>
        <div id="movie-list">
          {error && <div>ERROR MESSAGE</div>}
          {!error && isLoading && <div className='loading'>loading...</div>}
          {movies&& <Card movs={movies} />}
        </div>
        <div className='pageno'>Page {page}</div>
      </>
  )
}
export default Home;