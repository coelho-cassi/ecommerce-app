import { useState } from "react";
import { HiMagnifyingGlass, HiMagnifyingGlassCircle, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => { 
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`flex item-center justify-center w-full transition-all duration-300 ${isOpen? "absolute top-0 left-0 w-full bg-white h-24 z-50"  : "w-auto" } `}>
        {isOpen ? (
            <form className="relative flex item-center justify-center w-full">
                <div className="relative w-1/2">
                    <input type="text" placeholder="Search" value={searchTerm} className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
                     />
                    {/* Search Icon */}
                    <button type="submit" className="absolute right-2 top-5 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                        <HiMagnifyingGlass className="h-6 w-6" />
                    </button>
                </div>
                {/* Close Icon */}
                <button type="button" className="absolute left-3/4 top-5 transform -translate-y-1/2 text-gray-600 hover:text-gray-800" onClick={handleSearchToggle}>
                  <HiMiniXMark className="h-6 w-6" />
                </button>
            </form>
            ) : (
            <button onClick={handleSearchToggle}>
                <HiMagnifyingGlass className="h-6 w-6" />
            </button>
        )}
    </div>
  )
}

export default SearchBar