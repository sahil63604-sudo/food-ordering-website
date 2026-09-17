
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

const Menu = ({ socket }) => {

  const [item, setItem] = useState([])
  const [addedItems, setAddedItems] = useState([])
  const [showCard, setShowCard] = useState(4)
  const [selectedId, setSelectedId] = useState('')
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const location = useLocation()
  const userId = localStorage.getItem('userId')

  useEffect(() => {

    const updateCards = () => {
      if (window.innerWidth >= 1023) {
        setShowCard(8)
      }
      else if (window.innerWidth >= 640) {
        setShowCard(6)
      }
      else {
        setShowCard(4)
      }
    }

    updateCards()

    window.addEventListener("resize", updateCards)

    async function getMenu() {
      try {
        const response = await fetch('http://localhost:3000/menu')
        const data = await response.json()

        setItem(data.data)
      }
      catch (error) {
        console.log("Error fetching menu:", error)
      }
      finally {
        setLoading(false)
      }
    }

    getMenu()

    return () => {
      window.removeEventListener("resize", updateCards)
    }

  }, [])


  const handleAddToCart = async (item) => {

    setAddedItems(prev => [...prev, item._id])

    setTimeout(() => {
      setAddedItems([])
    }, 3000)

    try {

      const res = await fetch('http://localhost:3000/get-order', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          userId,
          item
        })
      })

      socket.current.send(JSON.stringify({
        type: 'CartItem_ADD'
      }))

    }
    catch (error) {
      console.log("Error adding item to cart:", error)
    }
  }


  // =========================
  // LOADING SKELETON
  // =========================

  if (loading) {
    return (
      <div className="bg-[#fff8dd] min-h-screen">

        {/* Heading Skeleton */}

        <div className="text-center py-12 px-6 animate-pulse">

          <div className="h-4 w-28 bg-orange-200 rounded-full mx-auto"></div>

          <div className="h-10 md:h-12 w-3/4 max-w-2xl bg-gray-200 rounded-lg mx-auto mt-5"></div>

          <div className="h-4 w-full max-w-2xl bg-gray-200 rounded-full mx-auto mt-5"></div>

          <div className="h-4 w-4/5 max-w-xl bg-gray-200 rounded-full mx-auto mt-3"></div>

          <div className="w-24 h-1 bg-orange-200 mx-auto rounded-full mt-6"></div>

        </div>


        {/* Card Skeletons */}

        <div className="py-16 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-18 md:gap-10 md:pb-5 px-6 lg:px-22 lg:pb-15">

          {Array.from({ length: showCard }).map((_, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden p-6 animate-pulse"
            >

              {/* Image Skeleton */}

              <div className="flex justify-center mt-2">

                <div className="w-40 h-40 rounded-full bg-gray-200"></div>

              </div>


              {/* Name Skeleton */}

              <div className="h-7 w-3/4 bg-gray-200 rounded-lg mx-auto mt-7"></div>


              {/* Description Skeleton */}

              <div className="space-y-3 mt-5">

                <div className="h-3 w-full bg-gray-200 rounded-full"></div>

                <div className="h-3 w-5/6 bg-gray-200 rounded-full mx-auto"></div>

                <div className="h-3 w-2/3 bg-gray-200 rounded-full mx-auto"></div>

              </div>


              {/* Price + Availability Skeleton */}

              <div className="flex justify-between items-center mt-7">

                <div>

                  <div className="h-3 w-20 bg-gray-200 rounded-full"></div>

                  <div className="h-8 w-20 bg-gray-200 rounded-lg mt-2"></div>

                </div>

                <div className="h-8 w-24 bg-gray-200 rounded-full"></div>

              </div>


              {/* Button Skeleton */}

              <div className="h-12 w-full bg-gray-200 rounded-full mt-6"></div>

            </div>

          ))}

        </div>

      </div>
    )
  }


  // =========================
  // ACTUAL MENU
  // =========================

  return (
    <>

      <div className="bg-[#fff8dd] transition-all duration-500">

        {/* Header */}

        <div className="text-center py-12 px-6">

          <p className="text-orange-500 font-semibold uppercase tracking-[4px]">
            Our Menu
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#39364b] mt-3">
            Delicious Food Crafted With Passion
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-5 text-base md:text-lg leading-7">
            Discover our carefully curated selection of freshly prepared dishes made
            with premium ingredients. Whether you're craving a quick snack or a
            complete meal, we have something delicious for everyone.
          </p>

          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>

        </div>


        {/* Menu Cards */}

        <div className="py-16 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-18 md:gap-10 md:pb-5 px-6 lg:px-22 lg:pb-15">

          {item.slice(0, showCard).map((food) => {

            return (

              <div
                key={food._id}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden group"
              >

                {/* Category */}

                <div className="absolute top-5 right-5 z-20">

                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {food.category}
                  </span>

                </div>


                {/* Image */}

                <div className="flex justify-center mt-8">

                  <div className="w-40 h-40 rounded-full bg-orange-50 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">

                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-36 h-36 object-cover rounded-full p-1"
                    />

                  </div>

                </div>


                {/* Content */}

                <div className="px-6 pb-6 pt-4">


                  {/* Name */}

                  <h2 className="text-2xl font-bold text-center text-[#39364b] mt-3 h-14 flex items-center justify-center">
                    {food.name}
                  </h2>


                  {/* Description */}

                  <p className="text-gray-500 text-sm text-center h-18 overflow-hidden leading-6 mt-2">
                    {food.description}
                  </p>


                  {/* Price + Stock */}

                  <div className="flex justify-between items-center mt-5">

                    <div>

                      <p className="text-xs text-gray-400">
                        Starting From
                      </p>

                      <h2 className="text-3xl font-extrabold text-orange-500">
                        ₹{food.price}
                      </h2>

                    </div>


                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold ${
                        food.isAvailable
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {food.isAvailable
                        ? "🟢 Available"
                        : "🔴 Unavailable"}
                    </span>

                  </div>


                  {/* Button */}

                  {food.isAvailable === true ? (

                    <button
                      onClick={() => handleAddToCart(food)}
                      disabled={food.isAvailable === false}
                      className={`w-full mt-6 py-3 rounded-full font-bold transition-all duration-300 ${
                        addedItems.includes(food._id)
                          ? "bg-green-500 text-white"
                          : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105 hover:shadow-xl"
                      }`}
                    >

                      {addedItems.includes(food._id)
                        ? "✓ Added to Cart"
                        : "🛒 Add to Cart"}

                    </button>

                  ) : (

                    <button
                      disabled
                      className="w-full mt-6 py-3 rounded-full font-bold bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed opacity-80 flex items-center justify-center gap-2"
                    >

                      <span>🚫</span>

                      <span>
                        Currently Unavailable
                      </span>

                    </button>

                  )}

                </div>

              </div>

            )

          })}

        </div>


        {/* Explore Full Menu Button */}

        <div className="flex justify-center items-center pt-5">

          <button
            className={`${
              location.pathname === '/Menu'
                ? 'hidden'
                : 'bg-[#39364b] hover:cursor-pointer text-white px-8 py-3 rounded-full border-2 border-[#39364b] hover:bg-transparent hover:text-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-105'
            }`}
            onClick={() => navigate('/Menu')}
          >
            🍽️ Explore Full Menu
          </button>

        </div>

      </div>

    </>
  )
}

export default Menu
