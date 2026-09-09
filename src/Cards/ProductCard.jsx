import React from 'react'
import { IoStar } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import AllPaths from '../routes/AllPaths'
import { useGlobalContextHook } from '../Context/GlobalContext'

const ProductCard = ({ product }) => {
  const {addToCart} = useGlobalContextHook()
  return (
    <div className="relative border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white hover:border hover:border-[#F2CA51] flex flex-col h-full group">
      <div className="w-full h-52 overflow-hidden flex-shrink-0">
        <img 
          src={product?.image || 'https://via.placeholder.com/400x300/9D4300/FFFFFF?text=No+Image'} 
          alt={product?.name || 'Dish'} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-[#131313] flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-xl text-white line-clamp-2 flex-1">
            {product?.name || 'Delicious Dish'}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <IoStar className='text-md text-[#F2CA51]' />
            <p className="text-[#C9C6C5]">{product?.rating || '0'}</p>
          </div>
        </div>
        <p className="text-sm text-[#C9C6C5] flex-1">
          Calories: {product?.caloriesPerServing || 'N/A'}
        </p>
        <div className="border-t border-[#353534] flex justify-between items-center py-4 mt-auto">
          <p className="text-[#F2CA51] text-lg font-bold">${product?.price || '0.00'}</p>
          <button onClick={()=>{addToCart(product)}} className="bg-[#F2CA51] text-black py-1.5 px-5 text-sm rounded-lg hover:bg-[#e6b800] transition-colors">
            ADD TO CART
          </button>
        </div>
        
        <div className="text-center border-t border-[#353534] pt-2">
         <Link to={AllPaths.productsDetails.replace(':id', product?.id || '0')}>
          <button className="text-xs text-[#C9C6C5] hover:text-[#F2CA51] flex items-center justify-center gap-1 w-full hover:scale-105 transition-all duration-300">
            View Full Details    {/* please add link here */}
            <span className="text-[#F2CA51]">→</span>
          </button>
          </Link>
        </div>
      </div>
      <p className="absolute top-2 right-2 border-2 border-[#F2CA51] text-[#F2CA51] text-sm py-1 px-2 bg-[#212121] rounded-xl">
        {product?.cuisine || 'Cuisine'}
      </p>
    </div>
  )
}

export default ProductCard