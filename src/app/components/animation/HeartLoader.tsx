import './HeartLoader.css'
const HeartLoader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-red-100">
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  )
}

export default HeartLoader
