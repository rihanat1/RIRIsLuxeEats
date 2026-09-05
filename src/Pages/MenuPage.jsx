import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProductCard from '../Cards/ProductCard'
import axios from 'axios'
import { IoSearch } from 'react-icons/io5'
import MenuFooter from '../Components/MenuFooter'
import SkeletonLoader from '../Components/SkeletonLoader'
import { useGlobalContextHook } from '../Context/GlobalContext'



const MenuPage = () => {
 const { productDetails, setProductDetails } = useGlobalContextHook()
  const [searchValue, setSearchValue] = useState("")
  const [selectedCity, setSelectedCity] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

 function handleSearchValue(e){
  setSearchValue(e.target.value)
  // console.log(e.target.value)
 }
 function handleSelectedCity(e){
  setSelectedCity(e.target.value)
  // console.log(e.target.value)
 }

const filteredSearch = productDetails.filter((data)=>{
  const searchName= data?.name.toLowerCase().includes(searchValue.toLowerCase())
  const searchCuisine =  data?.cuisine.toLowerCase().includes(selectedCity.toLowerCase())
  const cuisineFilter = selectedCity === "all" || data?.cuisine?.toLowerCase().includes(selectedCity.toLowerCase())

  return (searchName || searchCuisine) && cuisineFilter
})

const cuisine = [...new Set(productDetails.map((cuis)=>cuis?.cuisine))]

  useEffect(()=>{
    async function getProductDetails(){
      try {
        setIsLoading(true)
        const response = await axios(`${import.meta.env.VITE_API_URL}/recipes`,{
          method:"GET"
        })
        setIsLoading(false)
        const productDetailWithPrice = response.data?.recipes.map(recipe=>({...recipe, price:(Math.random()* 55 + 10).toFixed(2)}))
        // console.log(response.data?.recipes);
     setProductDetails(productDetailWithPrice || []);
      setIsLoading(false)
      } catch (error) {
        console.log(error)
     
      }
      // finally{
      //   setIsLoading(false)
      // }
    }getProductDetails()
  },[])
  
  if(isLoading === true){
    return (
      <div className="bg-black w-[100%] min-h-screen ">
        <div className="bg-black w-[95%] md:w-[85%] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-24">
        {
          Array.from({length:9}).map((_,i)=>{
            return <SkeletonLoader key={i}/>
          })
        }
      </div>

      </div>
    )
  }
  return (
    <div className='bg-black min-h-screen pt-20'> 
      <Header/>

      <div className="pb-2 pt-2 sticky top-20 z-40 backdrop-blur-sm border-[#99907C] bg-black/50 border-b flex flex-col w-[95%] md:w-[85%] mx-auto gap-3 md:flex-row">
        <div className="w-[100%] border-2 border-[#99907C] bg-transparent p-[6px] rounded-xl overflow-hidden flex items-center">
          <IoSearch className='text-[#F2CA51]' />
          <input 
          onChange={handleSearchValue}
          value={searchValue}
            type="text" 
            placeholder='Search by name (Or cuisine)' 
            className='placeholder:text-[#6B7280] text-white bg-transparent w-[92%] outline-none p-2' 
          />
        </div>
        <select value={selectedCity} onChange={handleSelectedCity} name="cuisine" id="cuisine" className=' bg-transparent border-2 border-[#99907C] w-[30%] outline-none rounded-lg p-2 text-[#6B7280]'>
          <option value="all" className='p-2 text-[#6B7280]'>Search by cuisine</option>
          {
            cuisine.map((each,i)=>{
              return(
                <option key={i} value={each}>
                  {each}
                </option>
              )
            })
          }
        </select>
      </div>

      <div className="w-[95%] md:w-[85%] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-8">
        
        {
          filteredSearch.map((product)=>{
            return(
                <ProductCard key={product.id} product={product}/>
            )
          })
        }
        
      </div>
      <MenuFooter/>
    </div>
  )
}

export default MenuPage  // ← REMOVED THE . here!