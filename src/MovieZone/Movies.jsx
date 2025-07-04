import { movies } from './data.js'
import { useState } from 'react'

const Movies = () => {
  const [movieList, setMovieList] = useState(movies)

  const catagory=(cat)=>{
     setMovieList(movies.filter((data)=>data.category == cat))
  }

  return (
    <>
    <div className=' bg-black text-center text-white text-4xl p-5'>
      <h1>MOVIE APP</h1>
    </div>
   <div className="flex justify-center flex-wrap gap-5 p-4 bg-black ">
  <button onClick={()=>setMovieList(movies)} className="px-4 py-2 cursor-pointer bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300">
    ALL
  </button>
  <button onClick={()=>catagory("Action")} className="px-4 py-2 cursor-pointer bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
    Action
  </button>
  <button onClick={()=>catagory("Thriller")} className="px-4 py-2 cursor-pointer bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
    Thriller
  </button>
  <button onClick={()=>catagory("Animation")} className="px-4 py-2 cursor-pointer bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
    Animation
  </button>
  <button onClick={()=>catagory("Horror")} className="px-4 py-2 cursor-pointer bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
    Horror
  </button>
  <button onClick={()=>catagory("Drama")} className="px-4 py-2 cursor-pointer bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
    Drama
  </button>
  <button onClick={()=>catagory("Sci-Fi")} className="px-4 py-2 cursor-pointer bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300">
    Sci-Fi
  </button>
</div>


      <div className='flex flex-wrap justify-center items-center gap-10 mx-auto py-5 bg-black'>
        {
          movieList.map((data) => <div className=' max-w-[280px] text-center border-b-1 border-amber-600 rounded-xl overflow-hidden  transition-transform duration-400  ease-in-out
            hover:scale-105' key={data.id}>
            <div className=' bg-gray-400 overflow-hidden'>
              <img src={data.poster_path} alt="" className='w-full h-4/5 rounded-t-xl' />
            </div>
            <div className='p-1 border-t-1 border-amber-500'>
              <h3 className="text-l font-semibold text-white">
                {data.title}
              </h3>
              <p className="text-sm mt-1 text-white">
                {data.release_date}
              </p>

            </div>
          </div>)
        }
      </div>
    </>
  )
}

export default Movies