import React from 'react'
import Header from './Header'

const SkeletonLoader = () => {
  return (
    <div className='bg-black'>
       <Header/>
        <div className="relative border animate-pulse rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white hover:border hover:border-[#F2CA51] flex flex-col h-full group">
              <div className="w-full h-52 bg-slate-400 animate-pulse overflow-hidden flex-shrink-0">
                
              </div>
              <div className="p-4 bg-[#131313] flex flex-col gap-3 flex-1">
                <div className="animate-pulse flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-xl text-white line-clamp-2 flex-1">
                    
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                  
                  </div>
                </div>
                <p className="text-sm text-[#C9C6C5] flex-1">
                 
                </p>
                <div className="border-t animate-pulse border-[#353534] flex justify-between items-center py-4 mt-auto">
                  <p className="text-[#F2CA51] text-lg font-bold"></p>
                  <button className="animate-pulse bg-[#F2CA51] text-black py-1.5 px-5 text-sm rounded-lg hover:bg-[#e6b800] transition-colors">
                    
                  </button>
                </div>
                
                <div className="text-center border-t border-[#353534] pt-2">
                  <button className="text-xs text-[#C9C6C5] hover:text-[#F2CA51] transition-colors flex items-center justify-center gap-1 w-full">
                   
                    <span className="text-[#F2CA51]"></span>
                  </button>
                </div>
              </div>
              <p className="absolute top-2 right-2 border-2 border-[#F2CA51] text-[#F2CA51] text-sm py-1 px-2 bg-[#212121] rounded-xl">
           
              </p>
            </div>
    </div>
  )
}

export default SkeletonLoader