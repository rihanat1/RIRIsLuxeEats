import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ProductCard from "../Cards/ProductCard";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import MenuFooter from "../Components/MenuFooter";
import SkeletonLoader from "../Components/SkeletonLoader";
import { useGlobalContextHook } from "../Context/GlobalContext";
import FeaturedDishes from "../JsFiles/FeaturedDishesData";

const MenuPage = () => {
  const { productDetails, setProductDetails } = useGlobalContextHook();
  const [searchValue, setSearchValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  function handleSelectedCity(e) {
    setSelectedCity(e.target.value);
  }

  // Filter logic
  const filteredSearch = productDetails.filter((data) => {
    const searchName = data?.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const searchCuisine = data?.cuisine
      .toLowerCase()
      .includes(selectedCity.toLowerCase());
    const cuisineFilter =
      selectedCity === "all" ||
      data?.cuisine?.toLowerCase().includes(selectedCity.toLowerCase());

    return (searchName || searchCuisine) && cuisineFilter;
  });

  const cuisine = [...new Set(productDetails.map((c) => c?.cuisine))].filter(
    Boolean,
  );

  useEffect(() => {
    async function getProductDetails() {
      try {
        setIsLoading(true);

        const response = await axios(
          `${import.meta.env.VITE_API_URL}/recipes`,
          {
            method: "GET",
          },
        );

        const apiDishes = response.data?.recipes.map((recipe) => {
          // hash from the recipe id
          const hash = recipe.id
            .toString()
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);

          // Map hash to a price between 10 and 65 so that th eprices dont keep chaning
          const price = (10 + (hash % 55)).toFixed(2);

          return {
            ...recipe,
            price,
            isFeatured: false,
          };
        });

        setProductDetails([...apiDishes, ...FeaturedDishes]);
      } catch (error) {
        console.log(error);
        // If API fails, still show featured dishes
        setProductDetails([...FeaturedDishes]);
      } finally {
        setIsLoading(false);
      }
    }

    getProductDetails();
  }, []);

  // Split for rendering
  const apiDishes = filteredSearch.filter((item) => !item.isFeatured);
  const featuredDishes = filteredSearch.filter((item) => item.isFeatured);

  return (
    <div className="bg-black min-h-screen pt-20">
      <Header />

      {/* Sticky Search + Filter Bar */}
      <div className="pb-2 pt-2 sticky top-20 z-40 backdrop-blur-lg border-[#99907C] bg-black/50 border-b flex flex-col w-[95%] md:w-[85%] mx-auto gap-3 md:flex-row">
        <div className="w-[100%] border-2 border-[#99907C] bg-transparent backdrop-blur-sm p-[6px] rounded-xl overflow-hidden flex items-center">
          <IoSearch className="text-[#F2CA51]" />
          <input
            onChange={handleSearchValue}
            value={searchValue}
            type="text"
            placeholder="Search by name (Or cuisine)"
            className="placeholder:text-[#6B7280] text-white bg-transparent w-[92%] outline-none p-2"
          />
        </div>
        <select
          value={selectedCity}
          onChange={handleSelectedCity}
          name="cuisine"
          id="cuisine"
          className="bg-transparent backdrop-blur-lg border-2 border-[#99907C] w-[50%] outline-none rounded-lg p-2 text-[#6B7280]"
        >
          <option value="all">Search by cuisine</option>
          {cuisine.map((each, i) => (
            <option key={i} value={each}>
              {each}
            </option>
          ))}
        </select>
      </div>

      {/* Featured Dishes — always visible, appears instantly */}
      <div className="w-[95%] md:w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-8">
        {featuredDishes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* API Dishes + Skeletons */}
      <div className="w-[95%] md:w-[85%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-8">
        {/* API dishes when loaded */}
        {apiDishes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {/* Skeletons — hidden on mobile, shown sm+ */}
        {isLoading && (
          <div className="hidden sm:contents">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonLoader key={`skeleton-${i}`} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filteredSearch.length === 0 && (
          <div className="col-span-full text-center text-[#C9C6C5] py-10">
            No dishes found
          </div>
        )}
      </div>

      <MenuFooter />
    </div>
  );
};

export default MenuPage;