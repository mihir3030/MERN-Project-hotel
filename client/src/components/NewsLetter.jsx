import React from 'react'
import Title from './Title'
import img  from '../assets/exclusiveOfferCardImg1.png'

function NewsLetter() {
  return (
    <div className='mt-20 mb-10'>
      <div className="md:grid md:grid-cols-2 max-w-5xl bg-white mx-4 md:mx-auto rounded-xl">
            <img src={img} alt="newsletter" className="hidden md:block w-full max-w-lg rounded-xl" />
            <div className="relative flex items-center justify-center">
                
                <div className="max-md:py-20 px-6 md:px-10 text-center font-bold">
                    <Title title="Subscribe to our newsletter" 
                    subtitle="Be the first to get the latest news about trends, promotions, and much more!"/>
                    <form className="mt-8 flex">
                        <input type="email" placeholder="Your email address"
                            className="w-full outline-none rounded-l-md border border-r-0 border-gray-300 p-4 text-gray-900" />
                        <button type="submit" className="rounded-r-md bg-blue-600 px-7 py-2 text-white hover:bg-blue-700 transition-all cursor-pointer">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
