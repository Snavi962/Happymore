import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon
} from "@heroicons/react/solid";
import { useState } from "react";
import Search from "../pages/search";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

function Header() {
  const[searchInput, setSearchInput] = useState(" ");
  const Search = () => {
    router.push("/search")
  }
  const [newDate,setdate] = useState("")
 const handleSelect = () => {
   setdate("");
 }
  const [noOfGuests,setnoOfGuests] = useState(1);
  const resetInput = () => {
    setSearchInput("");
  };
  
  const router = useRouter(); 
  const search = () => {
    router.push({
      pathname: "/search",
      query:{
        location: searchInput,
        Date:
        noOfGuests,

      }
    });
  }
  return(
    <header className="sticky top-0 z-50 grid grid-col-3 bg-white shadow-md p-5 md:px-10">
       <div onClick={() => router.push("/")}
        className="relative flex items-Center h-10 cursor-pointer my-auto">
           
           {/*Left*/}
            <h1 className="font-semiboldleft">Happyhour</h1>
        </div>
           
            {/*Middle - Search*/}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
             <input
             value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)} className=" flex-grow pl-5 bg-transparant outline-none text-sm text-grey-600 placeholder-grey-400 "
             type="text" placeholder="Search here"/>
             <SearchIcon onClick={Search} className="hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2
              cursor-pointer md:mx-2"></SearchIcon>
           </div>
 
           

           {/*right*/}
           <div className="flex items-center space-x-4 justify-end text-grey-500">
             <p className="hidden md:inline cursor-pointer">Become a host </p>
             <GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>
             <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
               <MenuIcon className="h-6"></MenuIcon>
               <UserCircleIcon className="h-6" ></UserCircleIcon>
             </div>
             </div>

        
        {searchInput && 
        (
          <div className="flex  flex-col col-span-3 mx-auto mt-0">
            <Calendar
        date={new Date()}
        minDate={new Date()}
        onChange={handleSelect}
      /> 
      <div className="flex items-center border-b mb-4">
        <h2 className="text-2xl flex-grow font-semibold"> Number of Guest </h2>
        <UsersIcon className="h-5" />

        <input
         value={noOfGuests}
        onChange={(e) => setnoOfGuests(e.target.value)} type="number"
        min={1} className="w-12 pl-2 text-lg outline-none text-blue-400" />
      </div>
      {/*emmet*/}
      <div className="flex">
        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
        <button onClick={search} className="flex-grow text-blue-400">Search</button>
        </div>
         </div>

        ) }
    </header>



  );
}

export default Header;
