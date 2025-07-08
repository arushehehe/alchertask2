import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const [isLoading,setLoading]=useState(true);
  const [error,setError]=useState();

  useEffect(()=> {
    const abortfetch= new AbortController();
    
    fetch(url,{signal: abortfetch.signal})
    .then(response=> {
      if(!response.ok)
        throw Error('!!could not fetch data!!')
      return response.json();
    })
    .then(obj=>{
      setData(obj.data);
      setPage(obj.current_page);
      setLoading(false);
    })
    .catch(err=> {
      if(err.name=== 'AbortError'){
        console.log('fetch aborted');
      }else{
      setError(err.message);}
    });

    return ()=> console.log('cleaned up!');
  }, []);
  
  return {data,page,isLoading,error};
}

export default useFetch;