import {useState} from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
  const [section,changeSection]= useState('Home');
  const [searchItem, setSearch]= useState("");

  const handleSearch=(e)=>{
    setSearch(e.target.value);
  };
  
  const handleClick=(e)=>{
    changeSection(e.target.innerText);
    console.log(section);
  }
  return(
    <h1 id="header">
        <div>
          <img className="plexlogo" src="/image.png"/>
        </div>
        <div id="srchbar">
          <img src="/search.png" style={{paddingLeft:"5px",height:"18px"}}/>
          <input type="text" placeholder="Search" value={searchItem}
          onChange ={e=> handleSearch(e)} />
        </div>
        <div id="middle">
          <button className="sections" onClick={handleClick}>
            <Link to="/">Home</Link>
          </button>
           <button className="sections" onClick={handleClick}>
            <Link to="/Live">Live TV</Link>
          </button>
           <button className="sections" onClick={handleClick}>
            On Demand
          </button>
           <button className="sections" onClick={handleClick}>
            Discover
          </button>
        </div>
    </h1>
  );
}
export default Navbar;