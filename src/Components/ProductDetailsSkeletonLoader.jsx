

import React from 'react'
import ProductDetailsHeader from '../SubSections/ProductDetailsPageSubSections/ProductDetailsHeader'
import Footer from './Footer'

const ProductDetailsSkeletonLoader = () => {
  return (
     <div className="bg-black min-h-screen pt-24">
        <ProductDetailsHeader />
        <div className="w-[95%] xl:w-[85%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 p-3">
            <div className="lg:w-[50%]">
              <div className="w-full h-[400px] bg-gray-800 rounded-2xl animate-pulse"></div>
            </div>
            <div className="lg:w-[50%] space-y-4">
              <div className="h-10 bg-gray-800 rounded w-3/4 animate-pulse"></div>
              <div className="h-8 bg-gray-800 rounded w-1/4 animate-pulse"></div>
              <div className="h-24 bg-gray-800 rounded w-full animate-pulse"></div>
              <div className="flex gap-4">
                <div className="h-20 bg-gray-800 rounded w-1/2 animate-pulse"></div>
                <div className="h-20 bg-gray-800 rounded w-1/2 animate-pulse"></div>
              </div>
              <div className="h-10 bg-gray-800 rounded w-full animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-6 bg-gray-800 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default ProductDetailsSkeletonLoader