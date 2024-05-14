import React, { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

function Navbar() {
    const[open,setOpen]=useState(false)
  return (
    <div className="max-w-[1640px] flex justify-between items-center mx-auto p-4">
      {/* ----------Left Side---------------- */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={()=>setOpen(!open)} />
        </div>
        <h1 className="text-2xl sm:text-3xl   px-2">
          Best <span className="font-bold ">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 text-[14px] p-1 rounded-full">
            <p className="bg-black text-white p-2 rounded-full ">Delivery</p>
            <p className="p-2 ">Pickup</p>
        </div>
      </div>
 {/* ----------Search---------------- */}

<div className="bg-gray-200 w-[200px] sm:w-[400px] lg:w-[500px] flex items-center px-2 rounded-full">
    <AiOutlineSearch size={25}/>
    <input type="text" placeholder="search foods" className="bg-transparent p-2 w-full focus:outline-none"/>
</div>

<button className="hidden bg-black text-white md:flex items-center rounded-full ">
   <BsFillCartFill size={20} className="mr-2"/> 
   Cart
</button>
{/* ----------mobile menu---------------- */}
{/* ----------Overlay---------------- */}
<div className={open?"fixed bg-black/80 w-full h-screen left-0 top-0 z-10":""}>
</div>

{/* ----------Side drawer---------------- */}
<div className={open?"fixed left-0 top-0 z-10 bg-white w-[300px] h-screen duration-300":"fixed left-[-100%] top-0 z-10 bg-white w-[300px] h-screen duration-300"}>
<AiOutlineClose onClick={()=>setOpen(!open)} size={20} className="absolute right-4 top-4 cursor-pointer"/>
<h1 className="p-4 text-2xl">
    Best<span className="font-bold">Eats</span>
</h1>

<ul className="text-gray-800 flex flex-col py-4">
    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer duration-300">
        <TbTruckDelivery size={25} className="mr-4"/>
        Orders
    </li>
    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer duration-300">
        <MdFavorite size={25} className="mr-4"/>
        favorites
    </li>
    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer duration-300">
        <FaWallet size={25} className="mr-4"/>
        Wallet
    </li>
    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer duration-300">
        <MdHelp size={25} className="mr-4"/>
        Help
    </li>
    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer duration-300">
        <AiFillTag size={25} className="mr-4"/>
        Promotions
    </li>
    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer duration-300">
        <BsFillSaveFill size={25} className="mr-4"/>
        Best Ones
    </li>
    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer duration-300">
        <FaUserFriends size={25} className="mr-4"/>
        Invite Friends
    </li>
</ul>







</div>
    </div>
  );
}

export default Navbar;
