"use client";

import React, { useContext, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import UserContext from "../Context/UserContext";

const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to : "/about",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let [show, setShow] = useState();
  function handleShow() {
    setShow(!show);
  }

  let ctx = useContext(CartContext)
  let userCtx = useContext(UserContext)
  
  let login = userCtx.userData.login
  // console.log(login)

  let [search,setSearch]= useState('')
  const handleLogout = ()=>{
    setSearch('')
    localStorage.removeItem('userLogin')
    userCtx.setUserData({login:false,email:''})
  }

  const handleChange = (e)=>{
    setSearch(e.target.value.toLowerCase())
    userCtx.setSearchItems(e.target.value.toLowerCase())
    // console.log(e.target.value)
  }

  return (
    <div className=" navbar w-full z-50  bg-blue-600 text-white fixed">
      <div className="mx-auto w-[100%] flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-1 md:space-x-2">
          <span>
            <img
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-[50%]"
              src="https://img.freepik.com/premium-vector/vintage-retro-iron-cast-cooking-pan-logo-design_675836-382.jpg?w=826"
              alt=""
            />
          </span>
          <span className="font-bold text-sm md:text-xl inline-flex">DAYA</span>
        </div>

        <div className="flex grow justify-end ">
        <input
        onChange={handleChange}
        value={search}
            className="flex text-black h-8 w-[120px] md:h-11 sm:w-[300px] md:w-[450px] rounded-md bg-gray-100  px-3 py-2 text-sm placeholder:text-black focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  "
            type="text"
            placeholder="Serach . . ."
          ></input>
          
        </div>

        <div className=" hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              login && <li key={item.name}>
                <Link
                  to={item.to}
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-yellow-600"
                >
                  {item.name}
                  <span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow justify-end md:me-4">
       
         {login && <Link to='/cart' className="p-1 bg-black mx-1 text-sm md:text-xl rounded-xl ">Cart <sup>{ctx.cartArr.length}</sup></Link>}
          {login || <Link to='/login' className="p-1 bg-black mx-1 text-sm md:text-xl rounded-xl ">Login</Link>}
          {login || <Link to='/signup' className="p-1 bg-black mx-1 text-sm md:text-xl rounded-xl ">SignUP</Link>}
         {login &&  <Link onClick={handleLogout} to='/login' className="p-1 bg-black mx-1 text-sm md:text-xl rounded-xl ">LogOut</Link>}
         
        </div>
        <div className=" hidden lg:block ">
          <span className="relative inline-block">
            <img
              onClick={handleShow}
              className="w-[60px] h-[60px] rounded-[50%]"
              src=''
              alt=""
            />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
          </span>
        </div>

        {show && (
          <div className="h-[400px] w-[300px] absolute bg-blue-600 right-6 top-[100px] right-2 flex justify-center items-center text-white  font-bold flex-col gap-10">
            <img
              className="w-[100px] h-[100px] rounded-[50%]"
              src=''
              alt=""
            />
            <h3 className="text-[40px] text-red-600 underline">RajDm</h3>
            <button className="bg-black text-white p-3 rounded-xl">
              LogOut
            </button>
          </div>
        )}

        <div className="ml-2 lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        className="w-[80px] h-[80px] rounded-[50%]"
                        src="https://img.freepik.com/premium-vector/vintage-retro-iron-cast-cooking-pan-logo-design_675836-382.jpg?w=826"
                        alt=""
                      />
                    </span>
                    <span className="font-bold">DAYA</span>
                  </div>
                  
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">

                <div className="flex justify-between  sm-block">
                   <input
            className="flex h-10 w-[80px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 hidden sm:block"
            type="text"
            placeholder="Serach"
          ></input>
          <button className="p-2 bg-black me-[50px] rounded-xl hidden sm:block">Search</button>
                </div>

                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="relative">
                  <Link
                    to="/signUp"
                    className="p-2 bg-black  rounded-xl absolute right-[30px] bottom-1 md:block"
                  >
                    SignUP
                  </Link>
                </div>

                <div className="ml-3 mt-4 flex items-center space-x-2">
                  <img
                    className="w-[60px] h-[60px] rounded-[50%]"
                    src=''
                    alt=""
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      Dan Abromov
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      @dan_abromov
                    </span>
                  </span>
                  <button className=" bg-black p-3 rounded-xl absolute right-[50px]">
                    LogOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
