import { IoStar } from 'react-icons/io5'

const FeaturedDishCard = ({ dish }) => {
  return (
    <div className="relative border border-primary/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white hover:border hover:border-[#F2CA51] flex flex-col h-full group">
         <div className="w-full h-52 overflow-hidden flex-shrink-0">
           <img 
             src={dish?.image} 
             alt={dish?.name || 'Dish'} 
             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
           />
         </div>
         <div className="p-4 bg-[#131313] flex flex-col gap-3 flex-1">
           <div className="flex justify-between items-start gap-2">
             <h3 className="font-semibold text-xl text-white line-clamp-2 flex-1">
               {dish?.name || 'Delicious Dish'}
             </h3>
             <div className="flex items-center gap-1 flex-shrink-0">
               <IoStar className='text-md text-[#F2CA51]' />
               <p className="text-[#C9C6C5]">{dish?.rating || '0'}</p>
             </div>
           </div>
           <p className="text-sm text-[#C9C6C5] flex-1">
             Calories: {dish?.caloriesPerServing || 'N/A'}
           </p>
           <div className="border-t border-[#353534] flex justify-between items-center py-4 mt-auto">
             <p className="text-[#F2CA51] text-lg font-bold">${dish?.price || '0.00'}</p>
             <button className="bg-primary/20 hover:bg-primary text-primary hover:text-black xl:text-xs border border-primary/50 text-black py-1.5 px-5 text-sm rounded-lg hover:bg-[#e6b800] transition-colors md:px-3">
               ADD TO CART
             </button>
           </div>
           
           <div className="text-center border-t border-[#353534] pt-2">
             <button className="text-xs text-[#C9C6C5] hover:text-[#F2CA51] transition-colors flex items-center justify-center gap-1 w-full">
               View Full Details    {/* please add link here */}
               <span className="text-[#F2CA51]">→</span>
             </button>
           </div>
         </div>
         <p className="absolute top-2 right-2 border-2 border-[#F2CA51] text-[#F2CA51] text-sm py-1 px-2 bg-[#212121] rounded-xl">
           {dish?.cuisine || 'Cuisine'}
         </p>
       </div>
  )
}

export default FeaturedDishCard