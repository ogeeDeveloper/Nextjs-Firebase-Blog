// Loading spinner which takes one prop the show boolean which will decides weather or not to show the loading spinner

const Loader = ({show})  => {
  return <>{
    show ? <div className="loader"></div> :" null"
  }</>
}

export default Loader