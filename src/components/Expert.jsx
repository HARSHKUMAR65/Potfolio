import React from 'react'
import Img from '../assets/image/Harsh.JPG'
function Expert() {
  return (
    <div className="max-w-[1240px] my-10 mx-auto md:grid grid-cols-2 py-2 shadow-2xl p-5 md:backdrop-blur-lg">

      {/* Image */}
      <div className="col-span-1 flex justify-center items-center  rounded-full">
        <img src={Img} alt="Error" className="max-w-full h-80" />
      </div>



      {/* Content */}
      <div className="col-span-1 flex flex-col justify-center items-center py-4 px-6">
        <h1 className="text-blue-600 font-bold my-2 text-2xl">Learn React with me</h1>
        <p className="my-2 text-lg text-pretty text-center text-white">
          In our personal and professional lives, we are constantly hit with one adversity after the other, most of which we have no control over. But the four things we have total control over are how we react, how we adapt, how we breathe, and how we take action.
        </p>
        {/* <h2 className="text-sm text-red-800">By: Ashish Yadav</h2> */}
        {/* <button className="bg-black text-white rounded p-3 w-[30%] my-2">Download Resume</button> */}
      </div>

    </div>

  )
}

export default Expert
