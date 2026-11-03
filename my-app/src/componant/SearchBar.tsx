import { Search } from "lucide-react";

export const SearchBar = () => {
    return (
        <div className="flex items-center w-full max-w-2xl mx-auto">

      <input
        type="text"
        placeholder="Search"
        className="w-full px-5 py-2.5 border border-gray-300
        rounded-l-full outline-none focus:border-blue-500"
      />

      <button
        type="button"
        className="px-6 py-2.5 bg-gray-100 border
        border-gray-300 rounded-r-full hover:bg-gray-200"
      >
        <Search size={22} />
      </button>

    </div>
    )
}