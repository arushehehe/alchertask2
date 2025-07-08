function Cast(props){
  const members=props.casts.filter((person)=> person.character!=="Director");
  console.log(members);
  return(
    <div id="all-cast">
    {members.map((each)=> (
    <div className="cast" key="each.id">
      <img className="profile" src={each.profile_path||'/icons8-test-account-48.png'} onError={(e)=>(e.target.src='/icons8-test-account-48.png')} />
      <div>{each.original_name}</div>
      <div>{each.character}</div>
    </div>
  ))}
  </div>
  );
}
export default Cast;