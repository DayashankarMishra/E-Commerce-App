import React, { useContext, useEffect, useState } from "react";
import axois from "axios";
import CartContext from "../Context/CartContext";
import Footer from "../Components/Footer";
import UserContext from "../Context/UserContext";

const Home = () => {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState(false);

  let ctx = useContext(CartContext);
  let userCtx = useContext(UserContext)
  let searchValue = userCtx.searchItems

  const getData = async () => {
    try {
      let res = await axois.get(
        "https://dummyjson.com/products?limit=0&skip=0"
      );
      console.log(res.data.products);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };  

  useEffect(() => {
    getData();
  },[]);

  let [currentPage, setCurrentPage] = useState(1);
  let noOfItems = 20;
  let lastIndex = noOfItems * currentPage;
  let firstIndex = lastIndex - noOfItems;

  let filterSearch = products.filter((item)=>item.title.toLowerCase().includes(searchValue) || item.category.toLowerCase().includes(searchValue))
  let slideItems = filterSearch.slice(firstIndex, lastIndex);
  // console.log(slideItems)
  let noOfBtn = Math.ceil(filterSearch.length / noOfItems);
  let arrOfBtn = new Array(noOfBtn).fill(0);
  console.log(arrOfBtn);
  // console.log(noOfBtn)

  const handleNext = () => {
    if (currentPage <= arrOfBtn.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePre = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // const handleChange = (index)=>{
  //   setCurrentPage(index+1)
  // }
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-5 py-5 bg-gray-400">
        {slideItems.map((item,index) => {
          return (
            item.thumbnail && (
              <div key={index} className="flex justify-evenly items-center flex-wrap flex-col border-[3px] border-blue-600 w-[450px] h-[500px]  rounded-xl">
                <img className="w-[60%] h-[40%]" src={item.thumbnail} alt="" />
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <h1 className="text-xl font-bold">
                  Price:-{Math.round(item.price)}$
                </h1>
                <div className="flex gap-3">
                  <button className="p-3 bg-blue-600 text-white rounded-md">
                    View Details
                  </button>
                  <button
                    onClick={() => ctx.addToCart(item)}
                    className="p-3 bg-blue-600 text-white rounded-md"
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>

      <div className="flex justify-center gap-0 items-center bg-gray-400 py-4">
        <button
          onClick={handlePre}
          className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md  dark:bg-gray-800 dark:text-gray-600"
        >
          previous
        </button>
        {arrOfBtn.map((items, index) => {
          return (
            
            <button
            key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={
                currentPage === index + 1
                  ? "items-center hidden px-4 py-2 mx-1 rounded-md sm:flex active bg-blue-500 text-white"
                  : "items-center hidden px-4 py-2 mx-1 rounded-md sm:flex bg-white"
              }
            >
              {index + 1}
            </button>
          );
        })}

        <button
          onClick={handleNext}
          className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Home;
